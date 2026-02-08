import { createAuthTransport } from "@/apiClient/client";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import {createClient} from "@connectrpc/connect";
import {FamilyPointListRequestSchema, PointService} from "@/gen/point_pb";
import { fromJson } from "@bufbuild/protobuf";

const doGrpcRequest = async (req: Request, _method: string, accessToken: string) => {
    const client = createClient(PointService, createAuthTransport(accessToken))
    const requestJson = createParamsFromUrl(req.url)
    const request = fromJson(FamilyPointListRequestSchema, requestJson);
    return client.getFamilyPointList(request);
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}
