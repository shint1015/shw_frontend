import { FamilyService } from "@/services/family_connect";
import { createAuthTransport } from "@/apiClient/client";
import { Family, FamilyRequest, FamilyResponse } from "@/services/family_pb";
import { createPromiseClient } from "@connectrpc/connect";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import { CommonResponse } from "@/services/common_pb";


export type FamilyApiResponse = | { ok: true, data: FamilyResponse | CommonResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createPromiseClient(FamilyService, createAuthTransport(accessToken))
    const request = new FamilyRequest();
    const family = new Family();
    if (method === "GET" || method === "DELETE") {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case "GET":
                request.fromJson(requestJson)
                return client.getFamily(request);
            case "DELETE":
                family.fromJson(requestJson)
                return client.deleteFamily(family);
        }
    } else if (method === "POST" || method === "PUT") {
        const data = await req.json();
        family.fromJson(data)
        switch (method) {
            case "POST":
                return client.createFamily(family);
            case "PUT":
                return client.updateFamily(family);
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
