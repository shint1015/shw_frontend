import Common, {endpoint} from "@utils/api/common";


class Family extends Common {
    static async getRole(familyId: string) {
        const res = await fetch(`${endpoint}/family/role?familyId=${familyId}`);
        return await res.json();
    }

    static async getBelongToUser(familyId: string) {
        const res = await fetch(`${endpoint}/family/belongs_to_user?familyId=${familyId}`);
        return await res.json();
    }
}

export default Family;