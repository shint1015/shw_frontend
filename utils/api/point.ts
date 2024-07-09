import Common, {endpoint} from "@utils/api/common";

const POINT_URL = `${endpoint}/point`;
const POINT_LIST_URL = `${endpoint}/point/list`;

class HouseworkPoint extends Common {

    static async getListByFamilyId(familyId: string) {
        const res = await fetch(`${POINT_LIST_URL}?familyId=${familyId}`);
        return await res.json();
    }

    static async getPointListByUserIdArr(familyId: string) {
        const data = await this.getListByFamilyId(familyId);
        if (data.ok) {
            let resArr: Record<number, string> = [];
            for (const user of data.data.users) {
                resArr[user.id] = user.name;
            }
            return resArr;
        } else {
            throw new Error(data.error);
        }
    }
}


export default HouseworkPoint;
