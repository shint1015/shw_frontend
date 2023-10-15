// package: shw
// file: sample.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sample_pb from "./sample_pb";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    hello: IHelloServiceService_IHello;
}

interface IHelloServiceService_IHello extends grpc.MethodDefinition<sample_pb.HelloRequest, sample_pb.HelloResponse> {
    path: "/shw.HelloService/Hello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sample_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<sample_pb.HelloRequest>;
    responseSerialize: grpc.serialize<sample_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<sample_pb.HelloResponse>;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer {
    hello: grpc.handleUnaryCall<sample_pb.HelloRequest, sample_pb.HelloResponse>;
}

export interface IHelloServiceClient {
    hello(request: sample_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: sample_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: sample_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: sample_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public hello(request: sample_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: sample_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: sample_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: sample_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
