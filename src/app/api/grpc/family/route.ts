import { FamilyService } from "@/services/family_connect";
import { transport } from "@/apiClient/client";
import { FamilyRequest, FamilyResponse } from "@/services/family_pb";
import { createPromiseClient } from "@connectrpc/connect";
import { NextResponse } from "next/server";
import {commonProcess} from "@/app/api/utils";

const request = new FamilyRequest();
const client = createPromiseClient(FamilyService, transport)
export type FamilyApiResponse = | { ok: true, data: FamilyResponse } | { ok: false, error: Error };

const doRequest = async (req: string, method: string) => {
    switch (method) {
        case "GET":
            return client.getFamily(req);
        case "POST":
            return client.createFamily(req);
        case "PUT":
            return client.updateFamily(req);
        case "DELETE":
            return client.deleteFamily(req);
    }
}

const GET = async (req: Request) => {
    return commonProcess(req, "GET")
}
const POST = async (req: Request) => {
    return commonProcess(req, "POST")
}
const PUT = async (req: Request) => {
    return commonProcess(req, "PUT")
}
const DELETE = async (req: Request) => {
    return commonProcess(req, "DELETE")
}

export {
    GET,
    POST,
    PUT,
    DELETE
}