import { createAuthTransport } from "@/apiClient/client";
import { UserService, GetBelongToUserResponse, GetBelongToUserRequestSchema } from "@/gen/user_pb";
import { fromJson } from "@bufbuild/protobuf";
import { createClient } from "@connectrpc/connect";
import { createParamsFromUrl, doAuthRequest } from "@utils/request";


export type UserApiResponse = { ok: true, data: GetBelongToUserResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, _method: string, accessToken: string) => {
    const client = createClient(UserService, createAuthTransport(accessToken))
    const requestJson = createParamsFromUrl(req.url)
    const request = fromJson(GetBelongToUserRequestSchema, requestJson);
    return client.getBelongToUser(request);
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}
