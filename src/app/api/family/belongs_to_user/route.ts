import { UserService} from "@/services/user_connect";
import { transport } from "@/apiClient/client";
import { User, GetBelongToUserRequest, GetBelongToUserResponse } from "@/services/user_pb";
import { createPromiseClient } from "@connectrpc/connect";
import { createParamsFromUrl } from "@utils/request";


const client = createPromiseClient(UserService, transport)
export type UserApiResponse = { ok: true, data: GetBelongToUserResponse } | { ok: false, error: Error };

export const GET = async (req: Request) => {
    const request = new GetBelongToUserRequest();
    const requestJson = createParamsFromUrl(req.url)
    request.fromJson(requestJson)
    const response = await client.getBelongToUser(request);
    return { ok: true, data: response }
}