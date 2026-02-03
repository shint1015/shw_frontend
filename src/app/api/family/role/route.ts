import { FamilyService } from "@/services/family_connect";
import { createAuthTransport } from "@/apiClient/client";
import {FamilyRequest, FamilyRole, FamilyRoleRequest, FamilyRoleResponse} from "@/services/family_pb";
import { createPromiseClient } from "@connectrpc/connect";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import { CommonResponse } from "@/services/common_pb";


export type FamilyRoleApiResponse = { ok: true, data: FamilyRoleResponse | CommonResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createPromiseClient(FamilyService, createAuthTransport(accessToken))
    const familyRole = new FamilyRole();
    if (method === "GET" || method === "DELETE") {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case "GET":
                {
                    const request = new FamilyRequest();
                    request.fromJson(requestJson)
                    return client.getFamilyRole(request);
                }
            case "DELETE":
                {
                    const request = new FamilyRoleRequest();
                    request.fromJson(requestJson)
                    return client.deleteFamilyRole(request);
                }
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


export const GET = async (req: Request) =>  {
    return await doAuthRequest(req, 'GET', doGrpcRequest)
}
export const POST = async (req: Request) =>  {
    return await doAuthRequest(req, 'POST', doGrpcRequest)
}
export const PUT = async (req: Request) =>  {
    return await doAuthRequest(req, 'PUT', doGrpcRequest)
}
export const DELETE = async (req: Request) =>  {
    return await doAuthRequest(req, 'DELETE', doGrpcRequest)
}
