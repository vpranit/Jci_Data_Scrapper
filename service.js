import axios from 'axios';

let userInterface, zoneCode;
const url_all_zones = "https://erp.jciindia.in/lib/api/wm/zone/options";
const url_memberlist = "https://erp.jciindia.in/lib/api/governing-board/members-lists";

async function fetchDataNGB() {
  UserInterface = 1
  try {
    const response = await axios.post(url_memberlist, { 'UserInterface': '1' });
    let data = response.data;

    // Initialize an empty array
    //   var arrayOfObjects = [];
    console.log("-----------------------------------------------service");
    //   let size = Object.keys(data.records).length;
    //   for (let i = 0; i<size;i++)
    //   {
    //     var newObj = {
    //         YearTeamId: data.records[i].YearTeamId,
    //         ZoneId: data.records[i].ZoneId,
    //         ZoneName: data.records[i].ZoneName,
    //         YearName: data.records[i].YearName,
    //         LomId: data.records[i].LomId,
    //         LomName: data.records[i].LomName,
    //         MemberId: data.records[i].MemberId,
    //         MemberName: data.records[i].MemberName,
    //         DesignationId: data.records[i].DesignationId,
    //         Designation: data.records[i].Designation,
    //         DesignationTxt: data.records[i].DesignationTxt,
    //         GroupId: data.records[i].GroupId,
    //         Order: data.records[i].Order,
    //         EmailId: data.records[i].EmailId,
    //         MobileNo: data.records[i].MobileNo,
    //         Address: data.records[i].Address
    //     };
    //     arrayOfObjects.push(newObj);
    //   }
    //   console.log(typeof(arrayOfObjects));
    //   console.log(typeof(data));
    //   console.log(typeof(data.records));
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}

async function featchzones(payload) {
  try {
    const response = await axios.post(url_all_zones, payload);
    const records = response.data.records;
    return records;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}

async function featchMemberDetails(payload) {
  try {
    const response = await axios.post(url_memberlist, payload)
    const records = response.data.records;
    return records;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}
export { fetchDataNGB, featchzones, featchMemberDetails };
