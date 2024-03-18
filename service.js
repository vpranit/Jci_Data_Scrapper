import axios from 'axios';

async function featchData(url_zones, payload) {
  try {
    const response = await axios.post(url_zones, payload);
    const records = response.data.records;
    return records;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}

export { featchData };
