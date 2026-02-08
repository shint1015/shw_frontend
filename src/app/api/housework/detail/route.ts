import { createAuthTransport } from "@/apiClient/client";
import {createParamsFromUrl, doAuthRequest} from "@utils/request";
import {createClient} from "@connectrpc/connect";
import {HouseworkService, HouseworkDetailRequestSchema} from "@/gen/housework_pb";
import { fromJson } from "@bufbuild/protobuf";

// export type FamilyApiResponse = | { ok: true, data: HouseworkDetailRequest } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, _method: string, accessToken: string) => {
    const client = createClient(HouseworkService, createAuthTransport(accessToken))
    const requestJson = createParamsFromUrl(req.url)
    const request = fromJson(HouseworkDetailRequestSchema, requestJson);

    return client.getHouseworkDetail(request);
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}
