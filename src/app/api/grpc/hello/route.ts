import { HelloService } from "@/services/sample_connect";
import { transport } from "@/apiClient/client";
import { HelloRequest, HelloResponse } from "@/services/sample_pb";
import { createPromiseClient } from "@connectrpc/connect";
import { NextResponse } from "next/server";

const request = new HelloRequest();
const client = createPromiseClient(HelloService, transport)
export type HelloApiResponse = | { ok: true, data: HelloResponse } | { ok: false, error: Error };

const POST = async (req: Request) => {
    const data = await req.json();
    try {
        request.fromJson(data)
        const response = await client.hello(request);
        return NextResponse.json({ ok: false, data: response }, {status: 200});
    }catch (e) {
        return NextResponse.json({ ok: false, error: e }, {status: 500});
    }
}

export { POST };
