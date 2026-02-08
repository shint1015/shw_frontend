import { createAuthTransport } from '@/apiClient/client';
import { createClient } from '@connectrpc/connect';
import {HouseworkService, Housework, HouseworkRequest, HouseworkResponse, HouseworkRequestSchema, HouseworkTargetRequestSchema, HouseworkSchema} from '@/gen/housework_pb';
import {createParamsFromUrl, createRequestMethodFunc, doAuthRequest} from '@utils/request';
import {CommonResponse} from '@/gen/common_pb';
import { fromJson } from '@bufbuild/protobuf';

export type HouseworkApiResponse = { ok: true, data: HouseworkResponse | CommonResponse } | { ok: false, error: Error };


const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createClient(HouseworkService, createAuthTransport(accessToken))
    if (method === 'GET' || method === 'DELETE') {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case 'GET':
                const request = fromJson(HouseworkRequestSchema, requestJson);
                return client.getHousework(request);
            case 'DELETE':
                const housework = fromJson(HouseworkTargetRequestSchema, requestJson);
                return client.deleteHousework(housework);
        }
    } else if (method === 'POST' || method === 'PUT') {
        const data = await req.json();
        const housework = fromJson(HouseworkSchema, data);
        switch (method) {
            case 'POST':
                return client.createHousework(housework);
            case 'PUT':
                return client.updateHousework(housework);
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
