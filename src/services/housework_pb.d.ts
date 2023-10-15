// package: shw
// file: housework.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HouseworkRequest extends jspb.Message { 
    getFamilyid(): number;
    setFamilyid(value: number): HouseworkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkRequest): HouseworkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkRequest;
    static deserializeBinaryFromReader(message: HouseworkRequest, reader: jspb.BinaryReader): HouseworkRequest;
}

export namespace HouseworkRequest {
    export type AsObject = {
        familyid: number,
    }
}

export class HouseworkDetailRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): HouseworkDetailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkDetailRequest): HouseworkDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkDetailRequest;
    static deserializeBinaryFromReader(message: HouseworkDetailRequest, reader: jspb.BinaryReader): HouseworkDetailRequest;
}

export namespace HouseworkDetailRequest {
    export type AsObject = {
        id: number,
    }
}

export class HouseworkMemoRequest extends jspb.Message { 
    getHouseworkid(): number;
    setHouseworkid(value: number): HouseworkMemoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkMemoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkMemoRequest): HouseworkMemoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkMemoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkMemoRequest;
    static deserializeBinaryFromReader(message: HouseworkMemoRequest, reader: jspb.BinaryReader): HouseworkMemoRequest;
}

export namespace HouseworkMemoRequest {
    export type AsObject = {
        houseworkid: number,
    }
}

export class HouseworkPointRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): HouseworkPointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkPointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkPointRequest): HouseworkPointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkPointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkPointRequest;
    static deserializeBinaryFromReader(message: HouseworkPointRequest, reader: jspb.BinaryReader): HouseworkPointRequest;
}

export namespace HouseworkPointRequest {
    export type AsObject = {
        userid: number,
    }
}

export class HouseworkTemplateRequest extends jspb.Message { 
    getFamilyid(): number;
    setFamilyid(value: number): HouseworkTemplateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkTemplateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkTemplateRequest): HouseworkTemplateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkTemplateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkTemplateRequest;
    static deserializeBinaryFromReader(message: HouseworkTemplateRequest, reader: jspb.BinaryReader): HouseworkTemplateRequest;
}

export namespace HouseworkTemplateRequest {
    export type AsObject = {
        familyid: number,
    }
}

export class HouseworkPointHistoryRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): HouseworkPointHistoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkPointHistoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkPointHistoryRequest): HouseworkPointHistoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkPointHistoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkPointHistoryRequest;
    static deserializeBinaryFromReader(message: HouseworkPointHistoryRequest, reader: jspb.BinaryReader): HouseworkPointHistoryRequest;
}

export namespace HouseworkPointHistoryRequest {
    export type AsObject = {
        userid: number,
    }
}

export class HouseworkResponse extends jspb.Message { 
    clearHouseworkList(): void;
    getHouseworkList(): Array<Housework>;
    setHouseworkList(value: Array<Housework>): HouseworkResponse;
    addHousework(value?: Housework, index?: number): Housework;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkResponse): HouseworkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkResponse;
    static deserializeBinaryFromReader(message: HouseworkResponse, reader: jspb.BinaryReader): HouseworkResponse;
}

export namespace HouseworkResponse {
    export type AsObject = {
        houseworkList: Array<Housework.AsObject>,
    }
}

export class HouseworkDetailResponse extends jspb.Message { 

    hasHousework(): boolean;
    clearHousework(): void;
    getHousework(): Housework | undefined;
    setHousework(value?: Housework): HouseworkDetailResponse;
    clearMemoList(): void;
    getMemoList(): Array<HouseworkMemo>;
    setMemoList(value: Array<HouseworkMemo>): HouseworkDetailResponse;
    addMemo(value?: HouseworkMemo, index?: number): HouseworkMemo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkDetailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkDetailResponse): HouseworkDetailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkDetailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkDetailResponse;
    static deserializeBinaryFromReader(message: HouseworkDetailResponse, reader: jspb.BinaryReader): HouseworkDetailResponse;
}

export namespace HouseworkDetailResponse {
    export type AsObject = {
        housework?: Housework.AsObject,
        memoList: Array<HouseworkMemo.AsObject>,
    }
}

export class HouseworkMemoResponse extends jspb.Message { 
    clearMemoList(): void;
    getMemoList(): Array<HouseworkMemo>;
    setMemoList(value: Array<HouseworkMemo>): HouseworkMemoResponse;
    addMemo(value?: HouseworkMemo, index?: number): HouseworkMemo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkMemoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkMemoResponse): HouseworkMemoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkMemoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkMemoResponse;
    static deserializeBinaryFromReader(message: HouseworkMemoResponse, reader: jspb.BinaryReader): HouseworkMemoResponse;
}

export namespace HouseworkMemoResponse {
    export type AsObject = {
        memoList: Array<HouseworkMemo.AsObject>,
    }
}

export class HouseworkPointResponse extends jspb.Message { 

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): HouseworkPoint | undefined;
    setPoint(value?: HouseworkPoint): HouseworkPointResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkPointResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkPointResponse): HouseworkPointResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkPointResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkPointResponse;
    static deserializeBinaryFromReader(message: HouseworkPointResponse, reader: jspb.BinaryReader): HouseworkPointResponse;
}

export namespace HouseworkPointResponse {
    export type AsObject = {
        point?: HouseworkPoint.AsObject,
    }
}

export class HouseworkPointHistoryResponse extends jspb.Message { 
    clearHistoryList(): void;
    getHistoryList(): Array<HouseworkPointHistory>;
    setHistoryList(value: Array<HouseworkPointHistory>): HouseworkPointHistoryResponse;
    addHistory(value?: HouseworkPointHistory, index?: number): HouseworkPointHistory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkPointHistoryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkPointHistoryResponse): HouseworkPointHistoryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkPointHistoryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkPointHistoryResponse;
    static deserializeBinaryFromReader(message: HouseworkPointHistoryResponse, reader: jspb.BinaryReader): HouseworkPointHistoryResponse;
}

export namespace HouseworkPointHistoryResponse {
    export type AsObject = {
        historyList: Array<HouseworkPointHistory.AsObject>,
    }
}

export class HouseworkTemplateResponse extends jspb.Message { 
    clearTemplateList(): void;
    getTemplateList(): Array<HouseworkTemplate>;
    setTemplateList(value: Array<HouseworkTemplate>): HouseworkTemplateResponse;
    addTemplate(value?: HouseworkTemplate, index?: number): HouseworkTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkTemplateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkTemplateResponse): HouseworkTemplateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkTemplateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkTemplateResponse;
    static deserializeBinaryFromReader(message: HouseworkTemplateResponse, reader: jspb.BinaryReader): HouseworkTemplateResponse;
}

export namespace HouseworkTemplateResponse {
    export type AsObject = {
        templateList: Array<HouseworkTemplate.AsObject>,
    }
}

export class HouseworkUserInfo extends jspb.Message { 
    getId(): number;
    setId(value: number): HouseworkUserInfo;
    getName(): string;
    setName(value: string): HouseworkUserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkUserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkUserInfo): HouseworkUserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkUserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkUserInfo;
    static deserializeBinaryFromReader(message: HouseworkUserInfo, reader: jspb.BinaryReader): HouseworkUserInfo;
}

export namespace HouseworkUserInfo {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class HouseworkCommonResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): HouseworkCommonResponse;
    getStatuscode(): number;
    setStatuscode(value: number): HouseworkCommonResponse;
    getMessage(): string;
    setMessage(value: string): HouseworkCommonResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkCommonResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkCommonResponse): HouseworkCommonResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkCommonResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkCommonResponse;
    static deserializeBinaryFromReader(message: HouseworkCommonResponse, reader: jspb.BinaryReader): HouseworkCommonResponse;
}

export namespace HouseworkCommonResponse {
    export type AsObject = {
        ok: boolean,
        statuscode: number,
        message: string,
    }
}

export class Housework extends jspb.Message { 
    getId(): number;
    setId(value: number): Housework;
    getFamilyid(): number;
    setFamilyid(value: number): Housework;
    getName(): string;
    setName(value: string): Housework;
    getDetail(): string;
    setDetail(value: string): Housework;
    getStatus(): string;
    setStatus(value: string): Housework;

    hasWorkuser(): boolean;
    clearWorkuser(): void;
    getWorkuser(): HouseworkUserInfo | undefined;
    setWorkuser(value?: HouseworkUserInfo): Housework;
    getStartedat(): number;
    setStartedat(value: number): Housework;
    getEndedat(): number;
    setEndedat(value: number): Housework;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Housework.AsObject;
    static toObject(includeInstance: boolean, msg: Housework): Housework.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Housework, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Housework;
    static deserializeBinaryFromReader(message: Housework, reader: jspb.BinaryReader): Housework;
}

export namespace Housework {
    export type AsObject = {
        id: number,
        familyid: number,
        name: string,
        detail: string,
        status: string,
        workuser?: HouseworkUserInfo.AsObject,
        startedat: number,
        endedat: number,
    }
}

export class HouseworkMemo extends jspb.Message { 
    getId(): number;
    setId(value: number): HouseworkMemo;
    getHouseworkid(): number;
    setHouseworkid(value: number): HouseworkMemo;
    getText(): string;
    setText(value: string): HouseworkMemo;

    hasDraftuser(): boolean;
    clearDraftuser(): void;
    getDraftuser(): HouseworkUserInfo | undefined;
    setDraftuser(value?: HouseworkUserInfo): HouseworkMemo;
    getCreatedat(): number;
    setCreatedat(value: number): HouseworkMemo;
    getUpdatedat(): number;
    setUpdatedat(value: number): HouseworkMemo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkMemo.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkMemo): HouseworkMemo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkMemo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkMemo;
    static deserializeBinaryFromReader(message: HouseworkMemo, reader: jspb.BinaryReader): HouseworkMemo;
}

export namespace HouseworkMemo {
    export type AsObject = {
        id: number,
        houseworkid: number,
        text: string,
        draftuser?: HouseworkUserInfo.AsObject,
        createdat: number,
        updatedat: number,
    }
}

export class HouseworkPoint extends jspb.Message { 
    getId(): number;
    setId(value: number): HouseworkPoint;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): HouseworkUserInfo | undefined;
    setUser(value?: HouseworkUserInfo): HouseworkPoint;
    getPoint(): number;
    setPoint(value: number): HouseworkPoint;
    getCreatedat(): number;
    setCreatedat(value: number): HouseworkPoint;
    getUpdatedat(): number;
    setUpdatedat(value: number): HouseworkPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkPoint.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkPoint): HouseworkPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkPoint;
    static deserializeBinaryFromReader(message: HouseworkPoint, reader: jspb.BinaryReader): HouseworkPoint;
}

export namespace HouseworkPoint {
    export type AsObject = {
        id: number,
        user?: HouseworkUserInfo.AsObject,
        point: number,
        createdat: number,
        updatedat: number,
    }
}

export class HouseworkPointHistory extends jspb.Message { 
    getId(): number;
    setId(value: number): HouseworkPointHistory;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): HouseworkUserInfo | undefined;
    setUser(value?: HouseworkUserInfo): HouseworkPointHistory;
    getDetail(): string;
    setDetail(value: string): HouseworkPointHistory;
    getPoint(): number;
    setPoint(value: number): HouseworkPointHistory;
    getCreatedat(): number;
    setCreatedat(value: number): HouseworkPointHistory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkPointHistory.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkPointHistory): HouseworkPointHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkPointHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkPointHistory;
    static deserializeBinaryFromReader(message: HouseworkPointHistory, reader: jspb.BinaryReader): HouseworkPointHistory;
}

export namespace HouseworkPointHistory {
    export type AsObject = {
        id: number,
        user?: HouseworkUserInfo.AsObject,
        detail: string,
        point: number,
        createdat: number,
    }
}

export class HouseworkTemplate extends jspb.Message { 
    getId(): number;
    setId(value: number): HouseworkTemplate;
    getFamilyid(): number;
    setFamilyid(value: number): HouseworkTemplate;
    getName(): string;
    setName(value: string): HouseworkTemplate;
    getDetail(): string;
    setDetail(value: string): HouseworkTemplate;
    getCreatedat(): number;
    setCreatedat(value: number): HouseworkTemplate;
    getUpdatedat(): number;
    setUpdatedat(value: number): HouseworkTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseworkTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: HouseworkTemplate): HouseworkTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseworkTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseworkTemplate;
    static deserializeBinaryFromReader(message: HouseworkTemplate, reader: jspb.BinaryReader): HouseworkTemplate;
}

export namespace HouseworkTemplate {
    export type AsObject = {
        id: number,
        familyid: number,
        name: string,
        detail: string,
        createdat: number,
        updatedat: number,
    }
}
