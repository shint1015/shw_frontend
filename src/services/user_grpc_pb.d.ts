// package: shw
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updateRole: IUserServiceService_IUpdateRole;
}

interface IUserServiceService_IUpdateRole extends grpc.MethodDefinition<user_pb.UpdateRoleRequest, user_pb.UserCommonResponse> {
    path: "/shw.UserService/UpdateRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateRoleRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateRoleRequest>;
    responseSerialize: grpc.serialize<user_pb.UserCommonResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserCommonResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    updateRole: grpc.handleUnaryCall<user_pb.UpdateRoleRequest, user_pb.UserCommonResponse>;
}

export interface IUserServiceClient {
    updateRole(request: user_pb.UpdateRoleRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserCommonResponse) => void): grpc.ClientUnaryCall;
    updateRole(request: user_pb.UpdateRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserCommonResponse) => void): grpc.ClientUnaryCall;
    updateRole(request: user_pb.UpdateRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserCommonResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public updateRole(request: user_pb.UpdateRoleRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserCommonResponse) => void): grpc.ClientUnaryCall;
    public updateRole(request: user_pb.UpdateRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserCommonResponse) => void): grpc.ClientUnaryCall;
    public updateRole(request: user_pb.UpdateRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserCommonResponse) => void): grpc.ClientUnaryCall;
}
