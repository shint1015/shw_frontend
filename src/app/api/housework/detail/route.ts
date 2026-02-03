import {HouseworkService} from "@/services/housework_connect";
import { createAuthTransport } from "@/apiClient/client";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import {createPromiseClient} from "@connectrpc/connect";
import {HouseworkDetailRequest} from "@/services/housework_pb";

// export type FamilyApiResponse = | { ok: true, data: HouseworkDetailRequest } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, _method: string, accessToken: string) => {
    const client = createPromiseClient(HouseworkService, createAuthTransport(accessToken))
    const request = new HouseworkDetailRequest();
    const requestJson = createParamsFromUrl(req.url)
    request.fromJson(requestJson)
    return client.getHouseworkDetail(request);
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}
