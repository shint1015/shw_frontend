import { FamilyService } from "@/services/family_connect";
import { transport } from "@/apiClient/client";
import {Family, FamilyRequest, FamilyResponse} from "@/services/family_pb";
import { createPromiseClient } from "@connectrpc/connect";
import { NextResponse } from "next/server";
import {createParamsFromUrl} from "@utils/request";
import {CommonResponse} from "@/services/common_pb";


const client = createPromiseClient(FamilyService, transport)
export type FamilyApiResponse = | { ok: true, data: FamilyResponse | CommonResponse } | { ok: false, error: Error };

const doGrpcRequest = async (req: Request, method: string) => {
    const request = new FamilyRequest();
    const family = new Family();
    if (method === "GET" || method === "DELETE") {
        const requestJson = createParamsFromUrl(req.url)
        switch (method) {
            case "GET":
                request.fromJson(requestJson)
                return client.getFamily(request);
            case "DELETE":
                family.fromJson(requestJson)
                return client.deleteFamily(family);
        }
    } else if (method === "POST" || method === "PUT") {
        const data = await req.json();
        family.fromJson(data)
        switch (method) {
            case "POST":
                return client.createFamily(family);
            case "PUT":
                return client.updateFamily(family);
        }
    }
}

const [GET, POST, PUT, DELETE] = createRequestMethodFunc<FamilyApiResponse>(doGrpcRequest, ["GET", "POST", "PUT", "DELETE"])

export {
    GET,
    POST,
    PUT,
    DELETE
}