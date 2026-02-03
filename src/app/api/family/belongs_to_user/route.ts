import { UserService} from "@/services/user_connect";
import { createAuthTransport } from "@/apiClient/client";
import { GetBelongToUserRequest, GetBelongToUserResponse } from "@/services/user_pb";
import { createPromiseClient } from "@connectrpc/connect";
import { createParamsFromUrl, doAuthRequest } from "@utils/request";


export type UserApiResponse = { ok: true, data: GetBelongToUserResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, _method: string, accessToken: string) => {
    const client = createPromiseClient(UserService, createAuthTransport(accessToken))
    const request = new GetBelongToUserRequest();
    const requestJson = createParamsFromUrl(req.url)
    request.fromJson(requestJson)
    return client.getBelongToUser(request);
}

export const GET = async (req: Request) => {
    return await doAuthRequest(req, "GET", doGrpcRequest);
}
