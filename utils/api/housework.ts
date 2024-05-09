import Common, {endpoint} from "@utils/api/common";

class Housework extends Common {
    static async getByFamilyId(familyId: string) {
        const res = await fetch(`${endpoint}/housework?familyId=${familyId}`);
        return await res.json();
    }

    static async getHouseworkDetail(houseworkId: string) {
        const res = await fetch(`${endpoint}/housework/detail?id=${houseworkId}`);
        return await res.json();
    }

    static async getHouseworkTemplate(templateId: string) {
        const res = await fetch(`${endpoint}/housework/template/detail?id=${templateId}`);
        return await res.json();
    }
    static async getHouseworkPointLists(familyId: string) {

    }
}

export default Housework;