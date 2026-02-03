import { createAuthTransport } from "@/apiClient/client";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import {createPromiseClient} from "@connectrpc/connect";
import {PointService} from "@/services/point_connect";
import {FamilyPointListRequest} from "@/services/point_pb";

const doGrpcRequest = async (req: Request, _method: string, accessToken: string) => {
    const client = createPromiseClient(PointService, createAuthTransport(accessToken))
    const request = new FamilyPointListRequest();
    const requestJson = createParamsFromUrl(req.url)
    request.fromJson(requestJson)
    return client.getFamilyPointList(request);
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}
