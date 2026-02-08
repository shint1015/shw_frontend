import { createAuthTransport } from '@/apiClient/client';
import { createClient } from '@connectrpc/connect';
import {createParamsFromUrl, doAuthRequest} from '@utils/request';
import {PointService, PointRequestSchema, PointSchema} from "@/gen/point_pb";
import { fromJson } from '@bufbuild/protobuf';

const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createClient(PointService, createAuthTransport(accessToken))
    if (method === 'GET' || method === 'DELETE') {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case 'GET':
                const request = fromJson(PointRequestSchema, requestJson);
                return client.getPoint(request);
            case 'DELETE':
                const point = fromJson(PointSchema, requestJson);
                return client.deletePoint(point);
        }
    } else if (method === 'POST' || method === 'PUT') {
        const data = await req.json();
        const point = fromJson(PointSchema, data);
        switch (method) {
            case 'POST':
                return client.createPoint(point);
            case 'PUT':
                return client.updatePoint(point);
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
