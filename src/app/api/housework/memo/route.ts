import { createAuthTransport } from "@/apiClient/client";
import { createClient } from "@connectrpc/connect";
import { HouseworkMemoService, HouseworkMemoRequestSchema, HouseworkMemoResponse, HouseworkMemoSchema } from "@/gen/housework_pb";
import { createParamsFromUrl, doAuthRequest } from "@utils/request";
import { CommonResponse } from "@/gen/common_pb";
import { fromJson } from "@bufbuild/protobuf";


export type HouseworkMemoApiResponse = { ok: true, data: HouseworkMemoResponse | CommonResponse } | { ok: false, error: Error };


const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createClient(HouseworkMemoService, createAuthTransport(accessToken))
    if (method === 'GET' || method === 'DELETE') {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case 'GET':
                const request = fromJson(HouseworkMemoRequestSchema, requestJson);
                return client.getHouseworkMemo(request);
            case 'DELETE':
                const houseworkMemo = fromJson(HouseworkMemoSchema, requestJson);
                return client.deleteHouseworkMemo(houseworkMemo);
        }
    } else if (method === 'POST' || method === 'PUT') {
        const data = await req.json();
        const houseworkMemo = fromJson(HouseworkMemoSchema, data);
        switch (method) {
            case 'POST':
                return client.createHouseworkMemo(houseworkMemo);
            case 'PUT':
                return client.updateHouseworkMemo(houseworkMemo);
        }
    }
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}

export const POST = async (req: Request) => {
    return await doAuthRequest(req, "POST", doGrpcRequest);
}

export const PUT = async (req: Request) => {
    return await doAuthRequest(req, "PUT", doGrpcRequest);
}

export const DELETE = async (req: Request) => {
    return await doAuthRequest(req, "DELETE", doGrpcRequest);
}
