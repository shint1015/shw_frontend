// package: shw
// file: housework.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as housework_pb from "./housework_pb";

interface IHouseworkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHousework: IHouseworkServiceService_IGetHousework;
    getHouseworkDetail: IHouseworkServiceService_IGetHouseworkDetail;
    createHousework: IHouseworkServiceService_ICreateHousework;
    updateHousework: IHouseworkServiceService_IUpdateHousework;
    finishHousework: IHouseworkServiceService_IFinishHousework;
    deleteHousework: IHouseworkServiceService_IDeleteHousework;
    getHouseworkMemo: IHouseworkServiceService_IGetHouseworkMemo;
    createHouseworkMemo: IHouseworkServiceService_ICreateHouseworkMemo;
    updateHouseworkMemo: IHouseworkServiceService_IUpdateHouseworkMemo;
    deleteHouseworkMemo: IHouseworkServiceService_IDeleteHouseworkMemo;
    getHouseworkPoint: IHouseworkServiceService_IGetHouseworkPoint;
    getHouseworkPointHistory: IHouseworkServiceService_IGetHouseworkPointHistory;
}

interface IHouseworkServiceService_IGetHousework extends grpc.MethodDefinition<housework_pb.HouseworkRequest, housework_pb.HouseworkResponse> {
    path: "/shw.HouseworkService/GetHousework";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkRequest>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkRequest>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkResponse>;
}
interface IHouseworkServiceService_IGetHouseworkDetail extends grpc.MethodDefinition<housework_pb.HouseworkDetailRequest, housework_pb.HouseworkDetailResponse> {
    path: "/shw.HouseworkService/GetHouseworkDetail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkDetailRequest>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkDetailRequest>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkDetailResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkDetailResponse>;
}
interface IHouseworkServiceService_ICreateHousework extends grpc.MethodDefinition<housework_pb.Housework, housework_pb.HouseworkCommonResponse> {
    path: "/shw.HouseworkService/CreateHousework";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.Housework>;
    requestDeserialize: grpc.deserialize<housework_pb.Housework>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkCommonResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkCommonResponse>;
}
interface IHouseworkServiceService_IUpdateHousework extends grpc.MethodDefinition<housework_pb.Housework, housework_pb.HouseworkCommonResponse> {
    path: "/shw.HouseworkService/UpdateHousework";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.Housework>;
    requestDeserialize: grpc.deserialize<housework_pb.Housework>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkCommonResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkCommonResponse>;
}
interface IHouseworkServiceService_IFinishHousework extends grpc.MethodDefinition<housework_pb.Housework, housework_pb.HouseworkCommonResponse> {
    path: "/shw.HouseworkService/FinishHousework";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.Housework>;
    requestDeserialize: grpc.deserialize<housework_pb.Housework>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkCommonResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkCommonResponse>;
}
interface IHouseworkServiceService_IDeleteHousework extends grpc.MethodDefinition<housework_pb.Housework, housework_pb.HouseworkCommonResponse> {
    path: "/shw.HouseworkService/DeleteHousework";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.Housework>;
    requestDeserialize: grpc.deserialize<housework_pb.Housework>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkCommonResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkCommonResponse>;
}
interface IHouseworkServiceService_IGetHouseworkMemo extends grpc.MethodDefinition<housework_pb.HouseworkMemoRequest, housework_pb.HouseworkMemoResponse> {
    path: "/shw.HouseworkService/GetHouseworkMemo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkMemoRequest>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkMemoRequest>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkMemoResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkMemoResponse>;
}
interface IHouseworkServiceService_ICreateHouseworkMemo extends grpc.MethodDefinition<housework_pb.HouseworkMemo, housework_pb.HouseworkCommonResponse> {
    path: "/shw.HouseworkService/CreateHouseworkMemo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkMemo>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkMemo>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkCommonResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkCommonResponse>;
}
interface IHouseworkServiceService_IUpdateHouseworkMemo extends grpc.MethodDefinition<housework_pb.HouseworkMemo, housework_pb.HouseworkCommonResponse> {
    path: "/shw.HouseworkService/UpdateHouseworkMemo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkMemo>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkMemo>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkCommonResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkCommonResponse>;
}
interface IHouseworkServiceService_IDeleteHouseworkMemo extends grpc.MethodDefinition<housework_pb.HouseworkMemo, housework_pb.HouseworkCommonResponse> {
    path: "/shw.HouseworkService/DeleteHouseworkMemo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkMemo>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkMemo>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkCommonResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkCommonResponse>;
}
interface IHouseworkServiceService_IGetHouseworkPoint extends grpc.MethodDefinition<housework_pb.HouseworkPointRequest, housework_pb.HouseworkPointResponse> {
    path: "/shw.HouseworkService/GetHouseworkPoint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkPointRequest>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkPointRequest>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkPointResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkPointResponse>;
}
interface IHouseworkServiceService_IGetHouseworkPointHistory extends grpc.MethodDefinition<housework_pb.HouseworkPointHistoryRequest, housework_pb.HouseworkPointHistoryResponse> {
    path: "/shw.HouseworkService/GetHouseworkPointHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<housework_pb.HouseworkPointHistoryRequest>;
    requestDeserialize: grpc.deserialize<housework_pb.HouseworkPointHistoryRequest>;
    responseSerialize: grpc.serialize<housework_pb.HouseworkPointHistoryResponse>;
    responseDeserialize: grpc.deserialize<housework_pb.HouseworkPointHistoryResponse>;
}

export const HouseworkServiceService: IHouseworkServiceService;

export interface IHouseworkServiceServer {
    getHousework: grpc.handleUnaryCall<housework_pb.HouseworkRequest, housework_pb.HouseworkResponse>;
    getHouseworkDetail: grpc.handleUnaryCall<housework_pb.HouseworkDetailRequest, housework_pb.HouseworkDetailResponse>;
    createHousework: grpc.handleUnaryCall<housework_pb.Housework, housework_pb.HouseworkCommonResponse>;
    updateHousework: grpc.handleUnaryCall<housework_pb.Housework, housework_pb.HouseworkCommonResponse>;
    finishHousework: grpc.handleUnaryCall<housework_pb.Housework, housework_pb.HouseworkCommonResponse>;
    deleteHousework: grpc.handleUnaryCall<housework_pb.Housework, housework_pb.HouseworkCommonResponse>;
    getHouseworkMemo: grpc.handleUnaryCall<housework_pb.HouseworkMemoRequest, housework_pb.HouseworkMemoResponse>;
    createHouseworkMemo: grpc.handleUnaryCall<housework_pb.HouseworkMemo, housework_pb.HouseworkCommonResponse>;
    updateHouseworkMemo: grpc.handleUnaryCall<housework_pb.HouseworkMemo, housework_pb.HouseworkCommonResponse>;
    deleteHouseworkMemo: grpc.handleUnaryCall<housework_pb.HouseworkMemo, housework_pb.HouseworkCommonResponse>;
    getHouseworkPoint: grpc.handleUnaryCall<housework_pb.HouseworkPointRequest, housework_pb.HouseworkPointResponse>;
    getHouseworkPointHistory: grpc.handleUnaryCall<housework_pb.HouseworkPointHistoryRequest, housework_pb.HouseworkPointHistoryResponse>;
}

export interface IHouseworkServiceClient {
    getHousework(request: housework_pb.HouseworkRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkResponse) => void): grpc.ClientUnaryCall;
    getHousework(request: housework_pb.HouseworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkResponse) => void): grpc.ClientUnaryCall;
    getHousework(request: housework_pb.HouseworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkResponse) => void): grpc.ClientUnaryCall;
    getHouseworkDetail(request: housework_pb.HouseworkDetailRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkDetailResponse) => void): grpc.ClientUnaryCall;
    getHouseworkDetail(request: housework_pb.HouseworkDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkDetailResponse) => void): grpc.ClientUnaryCall;
    getHouseworkDetail(request: housework_pb.HouseworkDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkDetailResponse) => void): grpc.ClientUnaryCall;
    createHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    createHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    createHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    updateHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    updateHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    updateHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    finishHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    finishHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    finishHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    deleteHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    deleteHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    deleteHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    getHouseworkMemo(request: housework_pb.HouseworkMemoRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkMemoResponse) => void): grpc.ClientUnaryCall;
    getHouseworkMemo(request: housework_pb.HouseworkMemoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkMemoResponse) => void): grpc.ClientUnaryCall;
    getHouseworkMemo(request: housework_pb.HouseworkMemoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkMemoResponse) => void): grpc.ClientUnaryCall;
    createHouseworkMemo(request: housework_pb.HouseworkMemo, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    createHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    createHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    updateHouseworkMemo(request: housework_pb.HouseworkMemo, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    updateHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    updateHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    deleteHouseworkMemo(request: housework_pb.HouseworkMemo, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    deleteHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    deleteHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    getHouseworkPoint(request: housework_pb.HouseworkPointRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointResponse) => void): grpc.ClientUnaryCall;
    getHouseworkPoint(request: housework_pb.HouseworkPointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointResponse) => void): grpc.ClientUnaryCall;
    getHouseworkPoint(request: housework_pb.HouseworkPointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointResponse) => void): grpc.ClientUnaryCall;
    getHouseworkPointHistory(request: housework_pb.HouseworkPointHistoryRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointHistoryResponse) => void): grpc.ClientUnaryCall;
    getHouseworkPointHistory(request: housework_pb.HouseworkPointHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointHistoryResponse) => void): grpc.ClientUnaryCall;
    getHouseworkPointHistory(request: housework_pb.HouseworkPointHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointHistoryResponse) => void): grpc.ClientUnaryCall;
}

export class HouseworkServiceClient extends grpc.Client implements IHouseworkServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getHousework(request: housework_pb.HouseworkRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkResponse) => void): grpc.ClientUnaryCall;
    public getHousework(request: housework_pb.HouseworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkResponse) => void): grpc.ClientUnaryCall;
    public getHousework(request: housework_pb.HouseworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkDetail(request: housework_pb.HouseworkDetailRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkDetailResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkDetail(request: housework_pb.HouseworkDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkDetailResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkDetail(request: housework_pb.HouseworkDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkDetailResponse) => void): grpc.ClientUnaryCall;
    public createHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public createHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public createHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public updateHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public updateHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public updateHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public finishHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public finishHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public finishHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteHousework(request: housework_pb.Housework, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteHousework(request: housework_pb.Housework, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteHousework(request: housework_pb.Housework, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkMemo(request: housework_pb.HouseworkMemoRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkMemoResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkMemo(request: housework_pb.HouseworkMemoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkMemoResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkMemo(request: housework_pb.HouseworkMemoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkMemoResponse) => void): grpc.ClientUnaryCall;
    public createHouseworkMemo(request: housework_pb.HouseworkMemo, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public createHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public createHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public updateHouseworkMemo(request: housework_pb.HouseworkMemo, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public updateHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public updateHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteHouseworkMemo(request: housework_pb.HouseworkMemo, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public deleteHouseworkMemo(request: housework_pb.HouseworkMemo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkCommonResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkPoint(request: housework_pb.HouseworkPointRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkPoint(request: housework_pb.HouseworkPointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkPoint(request: housework_pb.HouseworkPointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkPointHistory(request: housework_pb.HouseworkPointHistoryRequest, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointHistoryResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkPointHistory(request: housework_pb.HouseworkPointHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointHistoryResponse) => void): grpc.ClientUnaryCall;
    public getHouseworkPointHistory(request: housework_pb.HouseworkPointHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: housework_pb.HouseworkPointHistoryResponse) => void): grpc.ClientUnaryCall;
}
