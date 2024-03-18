import { fetchDataNGB, featchzones, featchMemberDetails } from './service.js';
import { insertData } from './dataHandeler.js';

async function main() {
    const uf1 = 1, uf2 = 2;
    const url_zones_ZGB = "https://erp.jciindia.in/lib/api/wm/zone/options";
    const url_zones_NC = "https://erp.jciindia.in/lib/api/app/committee/options";
    try {

        const zoneData1 = await featchzones(url_zones_NC,{ 'additional': { 'UserInterface': uf1 } }); // Wait for zoneData1 to be fetched
        const formattedData1 = zoneData1.map(obj => {
            if (Number.isInteger(obj.value)) {
                return [obj.value, obj.text, uf1];
            } return null;
        }).filter(data => data !== null); 
        await insertData(formattedData1); // Wait for the insertion of zoneData1

        const zoneData2 = await featchzones(url_zones_ZGB,{ 'additional': { 'UserInterface': uf2 } }); // Wait for zoneData2 to be fetched
        const formattedData2 = zoneData2.map(obj => {
            if (Number.isInteger(obj.value)) {
                return [obj.value, obj.text, uf2];
            } return null;
        }).filter(data => data !== null); 
        await insertData(formattedData2); // Wait for the insertion of zoneData2

        // const membersDetails = featchMemberDetails({'UserInterface': '2','ZoneCode':'2'});
        // console.log("------------------------------------------------");
        // membersDetails.then(data => {
        //     // console.log(data);

        // }).catch(error => {
        //     console.error(error);
        // })
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();