import { transport } from "@/apiClient/client";
import { createPromiseClient } from "@connectrpc/connect";
import { NextResponse } from "next/server";
import {HouseworkRequest, HouseworkResponse} from "@/services/housework_pb";
import {HouseworkService} from "@/services/housework_connect";
import {commonProcess} from "@/app/api/utils";

const request = new HouseworkRequest();
const client = createPromiseClient(HouseworkService, transport)
export type HouseworkApiResponse = | { ok: true, data: HouseworkResponse } | { ok: false, error: Error };


const doRequest = async (req: string, method: string) => {
    switch (method) {
        case "GET":
            console.log('getHousework')
            return client.getHousework(req);
        case "POST":
            console.log('createHousework')
            return client.createHousework(req);
        case "PUT":
            console.log('updateHousework')
            return client.updateHousework(req);
        case "DELETE":
            console.log('deleteHousework')
            return client.deleteHousework(req);
    }
}

const GET = async (req: Request) => {
    return commonProcess(req, "GET", doRequest.bind(this))
}
const POST = async (req: Request) => {
    return commonProcess(req, "POST", doRequest.bind(this))
}
const PUT = async (req: Request) => {
    return commonProcess(req, "PUT", doRequest.bind(this))
}
const DELETE = async (req: Request) => {
    return commonProcess(req, "DELETE", doRequest.bind(this))
}

export {
    GET,
    POST,
    PUT,
    DELETE
}