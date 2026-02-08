import { FamilyRoleRequestSchema, FamilyRequestSchema, FamilyRoleSchema, FamilyService, FamilyRoleResponse } from "@/gen/family_pb";
import { createAuthTransport } from "@/apiClient/client";
import { createClient } from "@connectrpc/connect";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import { CommonResponse } from "@/gen/common_pb";
import { fromJson } from "@bufbuild/protobuf";


export type FamilyRoleApiResponse = { ok: true, data: FamilyRoleResponse | CommonResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createClient(FamilyService, createAuthTransport(accessToken))
    if (method === "GET" || method === "DELETE") {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case "GET":
                {
                    const request = fromJson(FamilyRequestSchema, requestJson);
                    return client.getFamilyRole(request);
                }
            case "DELETE":
                {
                    const request = fromJson(FamilyRoleRequestSchema, requestJson);
                    return client.deleteFamilyRole(request);
                }
        }
    } else if (method === "POST" || method === "PUT") {
        const data = await req.json();
        const familyRole = fromJson(FamilyRoleSchema, data);
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
