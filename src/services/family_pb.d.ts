// package: shw
// file: family.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FamilyCommonResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): FamilyCommonResponse;
    getStatuscode(): number;
    setStatuscode(value: number): FamilyCommonResponse;
    getMessage(): string;
    setMessage(value: string): FamilyCommonResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FamilyCommonResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FamilyCommonResponse): FamilyCommonResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FamilyCommonResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FamilyCommonResponse;
    static deserializeBinaryFromReader(message: FamilyCommonResponse, reader: jspb.BinaryReader): FamilyCommonResponse;
}

export namespace FamilyCommonResponse {
    export type AsObject = {
        ok: boolean,
        statuscode: number,
        message: string,
    }
}

export class FamilyRequest extends jspb.Message { 
    getFamilyid(): number;
    setFamilyid(value: number): FamilyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FamilyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FamilyRequest): FamilyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FamilyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FamilyRequest;
    static deserializeBinaryFromReader(message: FamilyRequest, reader: jspb.BinaryReader): FamilyRequest;
}

export namespace FamilyRequest {
    export type AsObject = {
        familyid: number,
    }
}

export class FamilyHouseworkPointRequest extends jspb.Message { 
    getFamilyid(): number;
    setFamilyid(value: number): FamilyHouseworkPointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FamilyHouseworkPointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FamilyHouseworkPointRequest): FamilyHouseworkPointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FamilyHouseworkPointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FamilyHouseworkPointRequest;
    static deserializeBinaryFromReader(message: FamilyHouseworkPointRequest, reader: jspb.BinaryReader): FamilyHouseworkPointRequest;
}

export namespace FamilyHouseworkPointRequest {
    export type AsObject = {
        familyid: number,
    }
}

export class FamilyHouseworkPointResponse extends jspb.Message { 
    clearHouseworkpointList(): void;
    getHouseworkpointList(): Array<FamilyHouseworkPoint>;
    setHouseworkpointList(value: Array<FamilyHouseworkPoint>): FamilyHouseworkPointResponse;
    addHouseworkpoint(value?: FamilyHouseworkPoint, index?: number): FamilyHouseworkPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FamilyHouseworkPointResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FamilyHouseworkPointResponse): FamilyHouseworkPointResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FamilyHouseworkPointResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FamilyHouseworkPointResponse;
    static deserializeBinaryFromReader(message: FamilyHouseworkPointResponse, reader: jspb.BinaryReader): FamilyHouseworkPointResponse;
}

export namespace FamilyHouseworkPointResponse {
    export type AsObject = {
        houseworkpointList: Array<FamilyHouseworkPoint.AsObject>,
    }
}

export class FamilyHouseworkPoint extends jspb.Message { 
    getId(): number;
    setId(value: number): FamilyHouseworkPoint;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): FamilyUserInfo | undefined;
    setUser(value?: FamilyUserInfo): FamilyHouseworkPoint;
    getPoint(): number;
    setPoint(value: number): FamilyHouseworkPoint;
    getCreatedat(): number;
    setCreatedat(value: number): FamilyHouseworkPoint;
    getUpdatedat(): number;
    setUpdatedat(value: number): FamilyHouseworkPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FamilyHouseworkPoint.AsObject;
    static toObject(includeInstance: boolean, msg: FamilyHouseworkPoint): FamilyHouseworkPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FamilyHouseworkPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FamilyHouseworkPoint;
    static deserializeBinaryFromReader(message: FamilyHouseworkPoint, reader: jspb.BinaryReader): FamilyHouseworkPoint;
}

export namespace FamilyHouseworkPoint {
    export type AsObject = {
        id: number,
        user?: FamilyUserInfo.AsObject,
        point: number,
        createdat: number,
        updatedat: number,
    }
}

export class AddFamilyMemberRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): AddFamilyMemberRequest;
    getEmail(): string;
    setEmail(value: string): AddFamilyMemberRequest;
    getFamilyid(): number;
    setFamilyid(value: number): AddFamilyMemberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddFamilyMemberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddFamilyMemberRequest): AddFamilyMemberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddFamilyMemberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddFamilyMemberRequest;
    static deserializeBinaryFromReader(message: AddFamilyMemberRequest, reader: jspb.BinaryReader): AddFamilyMemberRequest;
}

export namespace AddFamilyMemberRequest {
    export type AsObject = {
        name: string,
        email: string,
        familyid: number,
    }
}

export class FamilyResponse extends jspb.Message { 

    hasFamily(): boolean;
    clearFamily(): void;
    getFamily(): Family | undefined;
    setFamily(value?: Family): FamilyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FamilyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FamilyResponse): FamilyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FamilyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FamilyResponse;
    static deserializeBinaryFromReader(message: FamilyResponse, reader: jspb.BinaryReader): FamilyResponse;
}

export namespace FamilyResponse {
    export type AsObject = {
        family?: Family.AsObject,
    }
}

export class FamilyUserInfo extends jspb.Message { 
    getId(): number;
    setId(value: number): FamilyUserInfo;
    getName(): string;
    setName(value: string): FamilyUserInfo;
    getRole(): string;
    setRole(value: string): FamilyUserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FamilyUserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FamilyUserInfo): FamilyUserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FamilyUserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FamilyUserInfo;
    static deserializeBinaryFromReader(message: FamilyUserInfo, reader: jspb.BinaryReader): FamilyUserInfo;
}

export namespace FamilyUserInfo {
    export type AsObject = {
        id: number,
        name: string,
        role: string,
    }
}

export class Family extends jspb.Message { 
    getId(): number;
    setId(value: number): Family;
    clearUserList(): void;
    getUserList(): Array<FamilyUserInfo>;
    setUserList(value: Array<FamilyUserInfo>): Family;
    addUser(value?: FamilyUserInfo, index?: number): FamilyUserInfo;
    getName(): string;
    setName(value: string): Family;
    getPointperworktime(): string;
    setPointperworktime(value: string): Family;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Family.AsObject;
    static toObject(includeInstance: boolean, msg: Family): Family.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Family, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Family;
    static deserializeBinaryFromReader(message: Family, reader: jspb.BinaryReader): Family;
}

export namespace Family {
    export type AsObject = {
        id: number,
        userList: Array<FamilyUserInfo.AsObject>,
        name: string,
        pointperworktime: string,
    }
}
