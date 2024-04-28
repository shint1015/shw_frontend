import Common, {endpoint} from "@utils/api/common";

const defaultCacheType = 'no-store';

class Family extends Common {
    static async getRole(familyId: string, cacheType: string = defaultCacheType) {
        const res = await fetch(`${endpoint}/family/role?familyId=${familyId}`, {cache: cacheType});
        return await res.json();
    }

    static async getBelongToUser(familyId: string, cacheType: string = defaultCacheType) {
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

    static async getRoleArr (familyId: string) {
        const data = await this.getRole(familyId);
        if (data.ok) {
            let resArr: Record<number, string> = [];
            for (const role of data.data.familyRole) {
                resArr[role.id] = role.name;
            }
            return resArr;
        } else {
            throw new Error(data.error);
        }
    }


}

export default Family;