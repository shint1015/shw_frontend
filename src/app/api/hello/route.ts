import { transport } from "@/apiClient/client";
import { HelloService, HelloRequestSchema, HelloResponse } from "@/gen/sample_pb";
import { createClient } from "@connectrpc/connect";
import { NextResponse } from "next/server";
import { fromJson } from "@bufbuild/protobuf";

const client = createClient(HelloService, transport)
export type HelloApiResponse = | { ok: true, data: HelloResponse } | { ok: false, error: Error };
const POST = async (req: Request) => {
    const data = await req.json();
    try {
        const request = fromJson(HelloRequestSchema, data);
        const response = await client.hello(request);
        return NextResponse.json({ ok: true, data: response }, {status: 200});
    }catch (e) {
        return NextResponse.json({ ok: false, error: e }, {status: 500});
    }
}

export { POST };
