import { HouseworkService } from "@/services/housework_connect";
import { createAuthTransport } from "@/apiClient/client";
import { createPromiseClient } from "@connectrpc/connect";
import { HouseworkMemo, HouseworkMemoRequest, HouseworkMemoResponse } from "@/services/housework_pb";
import { createParamsFromUrl, doAuthRequest } from "@utils/request";
import { CommonResponse } from "@/services/common_pb";


export type HouseworkMemoApiResponse = { ok: true, data: HouseworkMemoResponse | CommonResponse } | { ok: false, error: Error };


const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createPromiseClient(HouseworkService, createAuthTransport(accessToken))
    const request = new HouseworkMemoRequest();
    const houseworkMemo = new HouseworkMemo();
    if (method === 'GET' || method === 'DELETE') {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case 'GET':
                request.fromJson(requestJson)
                return client.getHouseworkMemo(request);
            case 'DELETE':
                houseworkMemo.fromJson(requestJson)
                return client.deleteHouseworkMemo(houseworkMemo);
        }
    } else if (method === 'POST' || method === 'PUT') {
        const data = await req.json();
        houseworkMemo.fromJson(data)
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
