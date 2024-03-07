import { useMemo } from 'react';
import { ServiceType } from "@bufbuild/protobuf";
import { createConnectTransport } from "@connectrpc/connect-web";
import { createPromiseClient, PromiseClient } from "@connectrpc/connect";
import {credentials} from "@grpc/grpc-js";

const transport = createConnectTransport({
    baseUrl: "http://172.20.0.4:8080",
    // By default, this transport uses the JSON format.
    // Set this option to true to use the binary format.
    // useBinaryFormat: false,
    //
    // // Controls what the fetch client will do with credentials, such as
    // // Cookies. The default value is "same-origin", which will not
    // // transmit Cookies in cross-origin requests.
    // credentials: "same-origin",
    //
    // // Interceptors apply to all calls running through this transport.
    // interceptors: [],
    //
    // // By default, all requests use POST. Set this option to true to use GET
    // // for side-effect free RPCs.
    // useGet: false,
});

const useClient = <T extends ServiceType>(service: T): PromiseClient<T> => {
    return useMemo(() => createPromiseClient(service, transport), [service]);
}

export { useClient, transport }
