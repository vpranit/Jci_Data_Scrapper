import { fetchDataNGB, featchzones, featchMemberDetails } from './service.js';
import { insertData } from './dataHandeler.js';

async function main() {
    const uf1 = 1, uf2 = 2;
    try {
        const zoneData1 = featchzones({ 'additional': { 'UserInterface': uf1 } });
        // const data = await fetchDataNGB();
        console.log("------------------------------------------------");
        zoneData1.then(data => {
            // Use map to transform the array of objects into the desired format
            const formattedData = data.map(obj => [obj.value, obj.text, uf1]);
            console.log(formattedData);
            insertData(formattedData);
        }).catch(error => {
            console.error(error);
        });

        const zoneData2 = featchzones({ 'additional': { 'UserInterface': uf2 } });
        zoneData2.then(data => {
            // Use map to transform the array of objects into the desired format
            const formattedData = data.map(obj => [obj.value, obj.text, uf2]);
            console.log(formattedData);
            insertData(formattedData);
        }).catch(error => {
            console.error(error);
        });

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