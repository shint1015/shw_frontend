import { transport } from "@/apiClient/client";
import { createPromiseClient } from "@connectrpc/connect";
import { NextResponse } from "next/server";
import {Housework, HouseworkRequest, HouseworkResponse} from "@/services/housework_pb";
import {HouseworkService} from "@/services/housework_connect";
import {createParamsFromUrl} from "@utils/request";
import {CommonResponse} from "@/services/common_pb";

const client = createPromiseClient(HouseworkService, transport)
export type HouseworkApiResponse = | { ok: true, data: HouseworkResponse | CommonResponse } | { ok: false, error: Error };


const doGrpcRequest = async (req: Request, method: string) => {
    const request = new HouseworkRequest();
    const housework = new Housework();
    if (method === "GET" || method === "DELETE") {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case "GET":
                request.fromJson(requestJson)
                return client.getHousework(request);
            case "DELETE":
                housework.fromJson(requestJson)
                return client.deleteHousework(housework);
        }
    } else if (method === "POST" || method === "PUT") {
        const data = await req.json();
        housework.fromJson(data)
        switch (method) {
            case "POST":
                return client.createHousework(housework);
            case "PUT":
                return client.updateHousework(housework);
        }
    }
}
const doRequest = async (req: Request, method: string) => {
    try {
        const response = await doGrpcRequest(req, method);
        return NextResponse.json({ ok: true, data: response }, {status: 200});
    } catch (e) {
        return NextResponse.json({ ok: false, error: e }, {status: 500});
    }
}



const GET = async (req: Request) => {
    return doRequest(req, "GET")
}
const POST = async (req: Request) => {
    return doRequest(req, "POST")
}
const PUT = async (req: Request) => {
    return doRequest(req, "PUT")
}
const DELETE = async (req: Request) => {
    return doRequest(req, "DELETE")
}

export {
    GET,
    POST,
    PUT,
    DELETE
}