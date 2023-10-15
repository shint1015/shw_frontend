// package: shw
// file: family.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as family_pb from "./family_pb";

interface IFamilyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFamily: IFamilyServiceService_IGetFamily;
    createFamily: IFamilyServiceService_ICreateFamily;
    updateFamily: IFamilyServiceService_IUpdateFamily;
    deleteFamily: IFamilyServiceService_IDeleteFamily;
    addFamilyMember: IFamilyServiceService_IAddFamilyMember;
}

interface IFamilyServiceService_IGetFamily extends grpc.MethodDefinition<family_pb.FamilyRequest, family_pb.FamilyResponse> {
    path: "/shw.FamilyService/GetFamily";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<family_pb.FamilyRequest>;
    requestDeserialize: grpc.deserialize<family_pb.FamilyRequest>;
    responseSerialize: grpc.serialize<family_pb.FamilyResponse>;
    responseDeserialize: grpc.deserialize<family_pb.FamilyResponse>;
}
interface IFamilyServiceService_ICreateFamily extends grpc.MethodDefinition<family_pb.Family, family_pb.FamilyCommonResponse> {
    path: "/shw.FamilyService/CreateFamily";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<family_pb.Family>;
    requestDeserialize: grpc.deserialize<family_pb.Family>;
    responseSerialize: grpc.serialize<family_pb.FamilyCommonResponse>;
    responseDeserialize: grpc.deserialize<family_pb.FamilyCommonResponse>;
}
interface IFamilyServiceService_IUpdateFamily extends grpc.MethodDefinition<family_pb.Family, family_pb.FamilyCommonResponse> {
    path: "/shw.FamilyService/UpdateFamily";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<family_pb.Family>;
    requestDeserialize: grpc.deserialize<family_pb.Family>;
    responseSerialize: grpc.serialize<family_pb.FamilyCommonResponse>;
    responseDeserialize: grpc.deserialize<family_pb.FamilyCommonResponse>;
}
interface IFamilyServiceService_IDeleteFamily extends grpc.MethodDefinition<family_pb.Family, family_pb.FamilyCommonResponse> {
    path: "/shw.FamilyService/DeleteFamily";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<family_pb.Family>;
    requestDeserialize: grpc.deserialize<family_pb.Family>;
    responseSerialize: grpc.serialize<family_pb.FamilyCommonResponse>;
    responseDeserialize: grpc.deserialize<family_pb.FamilyCommonResponse>;
}
interface IFamilyServiceService_IAddFamilyMember extends grpc.MethodDefinition<family_pb.AddFamilyMemberRequest, family_pb.FamilyCommonResponse> {
    path: "/shw.FamilyService/AddFamilyMember";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<family_pb.AddFamilyMemberRequest>;
    requestDeserialize: grpc.deserialize<family_pb.AddFamilyMemberRequest>;
    responseSerialize: grpc.serialize<family_pb.FamilyCommonResponse>;
    responseDeserialize: grpc.deserialize<family_pb.FamilyCommonResponse>;
}

export const FamilyServiceService: IFamilyServiceService;

export interface IFamilyServiceServer {
    getFamily: grpc.handleUnaryCall<family_pb.FamilyRequest, family_pb.FamilyResponse>;
    createFamily: grpc.handleUnaryCall<family_pb.Family, family_pb.FamilyCommonResponse>;
    updateFamily: grpc.handleUnaryCall<family_pb.Family, family_pb.FamilyCommonResponse>;
    deleteFamily: grpc.handleUnaryCall<family_pb.Family, family_pb.FamilyCommonResponse>;
    addFamilyMember: grpc.handleUnaryCall<family_pb.AddFamilyMemberRequest, family_pb.FamilyCommonResponse>;
}

export interface IFamilyServiceClient {
    getFamily(request: family_pb.FamilyRequest, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyResponse) => void): grpc.ClientUnaryCall;
    getFamily(request: family_pb.FamilyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyResponse) => void): grpc.ClientUnaryCall;
    getFamily(request: family_pb.FamilyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyResponse) => void): grpc.ClientUnaryCall;
    createFamily(request: family_pb.Family, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    createFamily(request: family_pb.Family, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    createFamily(request: family_pb.Family, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    updateFamily(request: family_pb.Family, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    updateFamily(request: family_pb.Family, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    updateFamily(request: family_pb.Family, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    deleteFamily(request: family_pb.Family, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    deleteFamily(request: family_pb.Family, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    deleteFamily(request: family_pb.Family, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    addFamilyMember(request: family_pb.AddFamilyMemberRequest, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    addFamilyMember(request: family_pb.AddFamilyMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    addFamilyMember(request: family_pb.AddFamilyMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
}

export class FamilyServiceClient extends grpc.Client implements IFamilyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getFamily(request: family_pb.FamilyRequest, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyResponse) => void): grpc.ClientUnaryCall;
    public getFamily(request: family_pb.FamilyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyResponse) => void): grpc.ClientUnaryCall;
    public getFamily(request: family_pb.FamilyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyResponse) => void): grpc.ClientUnaryCall;
    public createFamily(request: family_pb.Family, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public createFamily(request: family_pb.Family, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public createFamily(request: family_pb.Family, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public updateFamily(request: family_pb.Family, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public updateFamily(request: family_pb.Family, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public updateFamily(request: family_pb.Family, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteFamily(request: family_pb.Family, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteFamily(request: family_pb.Family, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteFamily(request: family_pb.Family, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public addFamilyMember(request: family_pb.AddFamilyMemberRequest, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public addFamilyMember(request: family_pb.AddFamilyMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
    public addFamilyMember(request: family_pb.AddFamilyMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: family_pb.FamilyCommonResponse) => void): grpc.ClientUnaryCall;
}
