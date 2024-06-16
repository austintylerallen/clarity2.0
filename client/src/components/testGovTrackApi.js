const axios = require('axios');

async function fetchNews() {
  try {
    const response = await axios.get('https://www.govtrack.us/api/v2/bill?sort=-introduced_date&congress=117');
    console.log(response.data.objects);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

fetchNews();
