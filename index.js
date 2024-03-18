import { featchData } from './service.js';
import { insertZoneData, insertMemberData } from './dataHandeler.js';

async function main() {
    const uf1 = 1, uf2 = 2, uf4 = 4, uf7 = 7, uf8 = 8, orgTypeid1 = 1;
    const url_zones_ZGB = "https://erp.jciindia.in/lib/api/wm/zone/options";
    const url_zones_NC = "https://erp.jciindia.in/lib/api/app/committee/options";
    const url_memberlist = "https://erp.jciindia.in/lib/api/governing-board/members-lists";
    const url_member_list = "https://erp.jciindia.in/lib/api/wm/yearwise/team/members/lists";

    try {

        const committeeData = await featchData(url_zones_NC, { 'additional': { 'UserInterface': uf1 } }); // Wait for committeeData to be fetched
        // const formattedcommitteeData = committeeData.map(obj => {
        //     if (Number.isInteger(obj.value)) {
        //         return [obj.value, obj.text, uf1];
        //     } return null;
        // }).filter(data => data !== null);
        // await insertZoneData(formattedcommitteeData); // Wait for the insertion of committeeData

        const zoneData = await featchData(url_zones_ZGB, { 'additional': { 'UserInterface': uf2 } });
        // const formattedData = zoneData.map(obj => {
        //     if (Number.isInteger(obj.value)) {
        //         return [obj.value, obj.text, uf2];
        //     } return null;
        // }).filter(data => data !== null);
        // await insertZoneData(formattedData); 

        // For National Governing Board
        const membersDetailsNGB = await featchData(url_memberlist, { 'UserInterface': uf1 });
        const formattedMemberDataNGB = membersDetailsNGB.map(obj => [obj.MemberId, obj.MemberName, obj.ZoneId, obj.ZoneName, obj.EmailId, obj.MobileNo]);
        // insertMemberData(formattedMemberDataNGB);

        // For Zone Governing Board
        for (const zone of zoneData) {
            if (zone.value) {
                const membersDetailsZGB = await featchData(url_memberlist, { "UserInterface": uf2, "ZoneCode": zone.value });
                const formattedMemberDataZGB = membersDetailsZGB.map(obj => [obj.MemberId, obj.MemberName, obj.ZoneId, obj.ZoneName, obj.EmailId, obj.MobileNo]);
                // insertMemberData(formattedMemberDataZGB);
            }
        }

        // For National Committess
        for (const committee of committeeData) {
            if (committee.value) {
                const membersDetailsNatComm = await featchData(url_memberlist, { "UserInterface": uf7, "OrganizationTypeId": orgTypeid1, "CommitteeId": committee.value });
                const formattedMemberDataNatComm = membersDetailsNatComm.map(obj => [obj.MemberId, obj.MemberName, obj.ZoneId, obj.ZoneName, obj.EmailId, obj.MobileNo]);
                // insertMemberData(formattedMemberDataNatComm);
            }
        }

        //For Nom Coordinators
        const membersDetailsNomCoord = await featchData(url_memberlist, { 'UserInterface': uf8, "OrganizationTypeId": orgTypeid1, "CommitteeId": 23 });
        const formattedMemberDataNomCoord = membersDetailsNomCoord.map(obj => [obj.MemberId, obj.MemberName, obj.ZoneId, obj.ZoneName, obj.EmailId, obj.MobileNo]);
        insertMemberData(formattedMemberDataNomCoord);

        //For Past National Precident
        const membersDetailsPNP = await featchData(url_member_list, { 'UserInterface': uf4, "TeamCode": 21 });
        const formattedMemberDataPNP = membersDetailsPNP.map(obj => [obj.MemberId, obj.MemberName, obj.ZoneId, obj.ZoneName, obj.EmailId, obj.MobileNo]);
        insertMemberData(formattedMemberDataPNP);


    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();