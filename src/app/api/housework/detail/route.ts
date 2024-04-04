import {HouseworkService} from "@/services/housework_connect";
import { transport } from "@/apiClient/client";
import { NextResponse } from "next/server";
import {createParamsFromUrl} from "@utils/request";
import {createPromiseClient} from "@connectrpc/connect";
import {HouseworkDetailRequest} from "@/services/housework_pb";


const client = createPromiseClient(HouseworkService, transport)
export type FamilyApiResponse = | { ok: true, data: HouseworkDetailRequest } | { ok: false, error: Error };

const GET = async (req: Request) => {
    const request = new HouseworkDetailRequest();
    const requestJson = createParamsFromUrl(req.url)
    request.fromJson(requestJson)
    const response = await client.getHouseworkDetail(request);
    return NextResponse.json({ ok: true, data: response }, {status: 200});
}

export {
    GET
}