import { createAuthTransport } from "@/apiClient/client";
import { FamilyService, FamilySchema, FamilyRequest, FamilyResponse, FamilyRequestSchema } from "@/gen/family_pb";
import { createClient } from "@connectrpc/connect";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import { CommonResponse } from "@/gen/common_pb";
import { fromJson } from "@bufbuild/protobuf";


export type FamilyApiResponse = | { ok: true, data: FamilyResponse | CommonResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createClient(FamilyService, createAuthTransport(accessToken))
    if (method === "GET" || method === "DELETE") {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case "GET":
                const request = fromJson(FamilyRequestSchema, requestJson);
                return client.getFamily(request);
            case "DELETE":
                const family = fromJson(FamilySchema, requestJson);
                return client.deleteFamily(family);
        }
    } else if (method === "POST" || method === "PUT") {
        const data = await req.json();
        const family = fromJson(FamilySchema, data);
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
