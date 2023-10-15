// package: shw
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UpdateRoleRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UpdateRoleRequest;
    getRoleid(): number;
    setRoleid(value: number): UpdateRoleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRoleRequest): UpdateRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRoleRequest;
    static deserializeBinaryFromReader(message: UpdateRoleRequest, reader: jspb.BinaryReader): UpdateRoleRequest;
}

export namespace UpdateRoleRequest {
    export type AsObject = {
        userid: number,
        roleid: number,
    }
}

export class UserCommonResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): UserCommonResponse;
    getStatuscode(): number;
    setStatuscode(value: number): UserCommonResponse;
    getMessage(): string;
    setMessage(value: string): UserCommonResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserCommonResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserCommonResponse): UserCommonResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserCommonResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserCommonResponse;
    static deserializeBinaryFromReader(message: UserCommonResponse, reader: jspb.BinaryReader): UserCommonResponse;
}

export namespace UserCommonResponse {
    export type AsObject = {
        ok: boolean,
        statuscode: number,
        message: string,
    }
}
