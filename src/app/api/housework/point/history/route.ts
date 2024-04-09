import {HouseworkService} from "@/services/housework_connect";
import { transport } from "@/apiClient/client";
import { NextResponse } from "next/server";
import {createParamsFromUrl} from "@utils/request";
import {createPromiseClient} from "@connectrpc/connect";
import {HouseworkPointHistoryRequest, HouseworkPointHistoryResponse} from "@/services/housework_pb";

const client = createPromiseClient(HouseworkService, transport)


const GET = async (req: Request) => {
    const request = new HouseworkPointHistoryRequest();
    const requestJson = createParamsFromUrl(req.url)
    request.fromJson(requestJson)
    const response = await client.getHouseworkPointHistory(request);
    try {
        return NextResponse.json({ ok: true, data: response }, {status: 200});
    } catch (e) {
        return NextResponse.json({ ok: false, error: e }, {status: 500});
    }
}

export {
    GET
}