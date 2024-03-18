import axios from 'axios';

async function featchzones(url_zones, payload) {
  try {
    const response = await axios.post(url_zones, payload);
    const records = response.data.records;
    return records;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}

async function featchMemberDetails(url_memberlist, payload) {
  try {
    const response = await axios.post(url_memberlist, payload)
    const records = response.data.records;
    return records;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}
export { featchzones, featchMemberDetails };
