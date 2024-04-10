import { FamilyService } from "@/services/family_connect";
import { transport } from "@/apiClient/client";
import { FamilyRole, FamilyRoleRequest, FamilyRoleResponse} from "@/services/family_pb";
import { createPromiseClient } from "@connectrpc/connect";
import {createParamsFromUrl, createRequestMethodFunc} from "@utils/request";
import { CommonResponse } from "@/services/common_pb";


const client = createPromiseClient(FamilyService, transport)
export type FamilyRoleApiResponse = { ok: true, data: FamilyRoleResponse | CommonResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, method: string) => {
    const request = new FamilyRoleRequest();
    const familyRole = new FamilyRole();
    if (method === "GET" || method === "DELETE") {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case "GET":
                request.fromJson(requestJson)
                return client.getFamilyRole(request);
            case "DELETE":
                familyRole.fromJson(requestJson)
                return client.deleteFamilyRole(familyRole);
        }
    } else if (method === "POST" || method === "PUT") {
        const data = await req.json();
        familyRole.fromJson(data)
        switch (method) {
            case "POST":
                return client.createFamilyRole(familyRole);
            case "PUT":
                return client.updateFamilyRole(familyRole);
        }
    }
}

const [GET, POST, PUT, DELETE] = createRequestMethodFunc<FamilyRoleApiResponse>(doGrpcRequest, ["GET", "POST", "PUT", "DELETE"])

export {
    GET,
    POST,
    PUT,
    DELETE
}