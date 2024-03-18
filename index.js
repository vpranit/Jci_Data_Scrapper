import { fetchDataNGB,featchzones } from './service.js';
import { insertData } from './dataHandeler.js'; 

async function main() {
    try {
        const zoneData = featchzones();
        const data = await fetchDataNGB();
        console.log("------------------------------------------------");
        zoneData.then(data => {
            // Use map to transform the array of objects into the desired format
            console.log (data);
            let formattedData = data.map(obj => `[${obj.value},'${obj.text}']`).join(',');
            formattedData = '[' + formattedData ;
            formattedData = formattedData + ']' ;
            insertData(formattedData);
        })
        .catch(error => {
            console.error(error);
        });
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();