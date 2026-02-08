import { useMemo } from 'react';
import { type DescService } from "@bufbuild/protobuf";
import { createClient, type Client } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";

const baseUrl =
    process.env.GRPC_BASE_URL ||
    process.env.NEXT_PUBLIC_GRPC_BASE_URL ||
    "http://172.20.0.4:8080";

const createAuthTransport = (accessToken?: string) =>
    createGrpcTransport({
        baseUrl,
        interceptors: accessToken
            ? [
                  (next) => async (req) => {
                      req.header.set("Authorization", `Bearer ${accessToken}`);
                      return next(req);
                  },
              ]
            : [],
    });

const transport = createAuthTransport();

const useClient = <T extends DescService>(service: T): Client<T> => {
    return useMemo(() => createClient(service, transport), [service]);
}

export { useClient, transport, createAuthTransport }
