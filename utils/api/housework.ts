import Common from "@utils/api/common";

class Housework extends Common {
    static async getByFamilyId(familyId: string) {
        const res = await fetch(`http://localhost:3000/api/housework?familyId=${familyId}`);
        return await res.json();
    }

    static async getHouseworkDetail(houseworkId: string) {
        const res = await fetch(`http://localhost:3000/api/housework/detail?id=${houseworkId}`);
        return await res.json();
    }
}

export default Housework;