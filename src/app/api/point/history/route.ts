
import { createAuthTransport } from "@/apiClient/client";
import { createParamsFromUrl, doAuthRequest } from "@utils/request";
import { createClient } from "@connectrpc/connect";
import { HouseworkPointHistoryRequestSchema, HouseworkPointService } from "@/gen/housework_pb";
import { fromJson } from "@bufbuild/protobuf";

const doGrpcRequest = async (req: Request, _method: string, accessToken: string) => {
    const client = createClient(HouseworkPointService, createAuthTransport(accessToken))
    const requestJson = createParamsFromUrl(req.url)
    const request = fromJson(HouseworkPointHistoryRequestSchema, requestJson);
    return client.getHouseworkPointHistory(request);
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}
