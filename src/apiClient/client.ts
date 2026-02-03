import { useMemo } from 'react';
import { ServiceType } from "@bufbuild/protobuf";
import { createConnectTransport } from "@connectrpc/connect-web";
import { createPromiseClient, PromiseClient } from "@connectrpc/connect";

const baseUrl =
    process.env.GRPC_BASE_URL ||
    process.env.NEXT_PUBLIC_GRPC_BASE_URL ||
    "http://172.20.0.4:8080";

const createAuthTransport = (accessToken?: string) =>
    createConnectTransport({
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

const useClient = <T extends ServiceType>(service: T): PromiseClient<T> => {
    return useMemo(() => createPromiseClient(service, transport), [service]);
}

export { useClient, transport, createAuthTransport }
