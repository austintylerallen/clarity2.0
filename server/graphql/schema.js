const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    token: String!
  }

  type News {
    id: ID!
    title: String!
    content: String!
  }

  type Representative {
    id: ID!
    name: String!
    title: String!
    party: String!
    phone: String!
    office: String!
    link: String!
  }

  type Query {
    users: [User]
    news: [News]
    representatives(state: String!, district: String!): [Representative]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
