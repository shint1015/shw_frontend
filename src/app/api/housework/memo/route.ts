import { HouseworkService } from "@/services/housework_connect";
import { transport } from "@/apiClient/client";
import { createPromiseClient } from "@connectrpc/connect";
import { HouseworkMemo, HouseworkMemoRequest, HouseworkMemoResponse } from "@/services/housework_pb";
import { createParamsFromUrl, createRequestMethodFunc } from "@utils/request";
import { CommonResponse } from "@/services/common_pb";


const client = createPromiseClient(HouseworkService, transport)
export type HouseworkMemoApiResponse = { ok: true, data: HouseworkMemoResponse | CommonResponse } | { ok: false, error: Error };


const doGrpcRequest = async (req: Request, method: string) => {
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

const [GET, POST, PUT, DELETE] = createRequestMethodFunc<HouseworkMemoApiResponse>(doGrpcRequest, ['GET', 'POST', 'PUT', 'DELETE'])

export {
    GET,
    POST,
    PUT,
    DELETE
}