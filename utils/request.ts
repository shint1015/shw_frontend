import {NextResponse} from "next/server";
import { getAccessToken } from "@auth0/nextjs-auth0";

/**
 * Create a query string from an object
 * @param url
 */
export const createParamsFromUrl = (url: string): {[key: string]: string} => {
    const { searchParams } = new URL(url);
    const params: {[key: string]: string} = {};
    searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}

/**
 * Do a request
 * @param req
 * @param method
 * @param grpcRequest
 */
export const doRequest = async (
    req: Request,
    method: string,
    grpcRequest: (req: Request, method: string) => Promise<any>
) => {
    try {
        const response = await grpcRequest(req, method);
        return NextResponse.json({ ok: true, data: response }, {status: 200});
    } catch (e) {
        return NextResponse.json({ ok: false, error: e }, {status: 500});
    }
}

/**
 * Do an authenticated request
 * @param req
 * @param method
 * @param grpcRequest
 */
export const doAuthRequest = async (
    req: Request,
    method: string,
    grpcRequest: (req: Request, method: string, accessToken: string) => Promise<any>
) => {
    try {
        const { accessToken } = await getAccessToken();
        if (!accessToken) {
            return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
        }
        return await doRequest(req, method, (r, m) => grpcRequest(r, m, accessToken));
    } catch (e) {
        return NextResponse.json({ ok: false, error: e }, { status: 500 });
    }
}


/**
 * Create a request method function
 * @param grpcRequest
 * @param methods
 */
export const createRequestMethodFunc = <ResponseType>(grpcRequest: (req: Request, method: string) => Promise<any>, methods: string[]): ResponseType[] => {
    let requestMethodFunc = new Map<string, (req: Request) => Promise<ResponseType>>();
    switch (methods.length) {
        case 'GET':
            requestMethodFunc.append(doRequest(req, "GET", grpcRequest))
            break;
        case 'POST':
            requestMethodFunc.append(doRequest(req, "POST", grpcRequest))
            break;
        case 'PUT':
            requestMethodFunc.append(doRequest(req, "PUT", grpcRequest))
            break;
        case 'DELETE':
            requestMethodFunc.append(doRequest(req, "DELETE", grpcRequest))
            break;
    }
    return requestMethodFunc;
}
