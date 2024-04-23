import Common, {endpoint} from "@utils/api/common";


class Family extends Common {
    static async getRole(familyId: string, cacheType: string = 'force-cache') {
        const res = await fetch(`${endpoint}/family/role?familyId=${familyId}`, {cache: cacheType});
        return await res.json();
    }

    static async getBelongToUser(familyId: string, cacheType: string = 'no-store') {
        const res = await fetch(`${endpoint}/family/belongs_to_user?familyId=${familyId}`,{cache: cacheType});
        return await res.json();
    }

    static async getBelongToUserArr (familyId: string) {
        const data = await this.getBelongToUser(familyId);
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

export default Family;