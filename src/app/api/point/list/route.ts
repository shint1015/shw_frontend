import { transport } from "@/apiClient/client";
import { NextResponse } from "next/server";
import {createParamsFromUrl} from "@utils/request";
import {createPromiseClient} from "@connectrpc/connect";
import {HouseworkPointRequest, HouseworkPointResponse} from "@/services/housework_pb";
import {PointService} from "@/services/point_connect";
import {FamilyPointListRequest} from "@/services/point_pb";

const client = createPromiseClient(PointService, transport)


const GET = async (req: Request) => {
    const request = new FamilyPointListRequest();
    const requestJson = createParamsFromUrl(req.url)
    request.fromJson(requestJson)
    const response = await client.getFamilyPointList(request);
    try {
        return NextResponse.json({ ok: true, data: response }, {status: 200});
    } catch (e) {
        return NextResponse.json({ ok: false, error: e }, {status: 500});
    }
}

export {
    GET
}
