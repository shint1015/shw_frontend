import {NextResponse} from "next/server";

const commonProcess = async (req: Request, method: string, doRequest: Function) => {
    const data = await req.json();
    try {
        request.fromJson(data)
        const response = await doRequest(request, method);
        return NextResponse.json({ ok: true, data: response }, {status: 200});
    }catch (e) {
        console.error(e);
        return NextResponse.json({ ok: false, error: "error" }, {status: 500});
    }
}

export {commonProcess}