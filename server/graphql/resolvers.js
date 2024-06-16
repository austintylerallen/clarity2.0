const { UserInputError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const resolvers = {
  Query: {
    news: async () => {
      try {
        console.log('Fetching news from GovTrack');
        const response = await axios.get('https://www.govtrack.us/api/v2/bill?sort=-introduced_date&congress=117');
        console.log('GovTrack response:', response.data.objects);
        return response.data.objects.map((bill) => ({
          id: bill.id.toString(),
          title: bill.title,
          content: bill.summary || 'No summary available.',
        }));
      } catch (error) {
        console.error('Error fetching news:', error);
        throw new Error('Failed to fetch news');
      }
    },
    representatives: async (_, { state, district }) => {
      try {
        const response = await axios.get(`https://www.govtrack.us/api/v2/role?current=true&state=${state}&district=${district}&role_type=representative`);
        return response.data.objects.map((rep) => ({
          id: rep.id.toString(),
          name: rep.person.name,
          title: rep.title,
          party: rep.party,
          phone: rep.phone,
          office: rep.office,
          link: rep.person.link
        }));
      } catch (error) {
        console.error('Error fetching representatives:', error);
        throw new Error('Failed to fetch representatives');
      }
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      if (!name || !email || !password) {
        throw new UserInputError('All fields are required');
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new UserInputError('User already exists with this email');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });
      await user.save();

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      return {
        token,
        user,
      };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new UserInputError('Invalid email or password');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new UserInputError('Invalid email or password');
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      return {
        token,
        user,
      };
    },
  },
};

module.exports = resolvers;
