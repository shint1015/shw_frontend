import { createAuthTransport } from '@/apiClient/client';
import { createPromiseClient } from '@connectrpc/connect';
import {createParamsFromUrl, doAuthRequest} from '@utils/request';
import {PointService} from "@/services/point_connect";
import {Point, PointRequest} from "@/services/point_pb";

const doGrpcRequest = async (req: Request, method: string, accessToken: string) => {
    const client = createPromiseClient(PointService, createAuthTransport(accessToken))
    const request = new PointRequest();
    const point = new Point();
    if (method === 'GET' || method === 'DELETE') {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case 'GET':
                request.fromJson(requestJson)
                return client.getPoint(request);
            case 'DELETE':
                point.fromJson(requestJson)
                return client.deletePoint(point);
        }
    } else if (method === 'POST' || method === 'PUT') {
        const data = await req.json();
        point.fromJson(data)
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
