// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var housework_pb = require('./housework_pb.js');

function serialize_shw_Housework(arg) {
  if (!(arg instanceof housework_pb.Housework)) {
    throw new Error('Expected argument of type shw.Housework');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_Housework(buffer_arg) {
  return housework_pb.Housework.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkCommonResponse(arg) {
  if (!(arg instanceof housework_pb.HouseworkCommonResponse)) {
    throw new Error('Expected argument of type shw.HouseworkCommonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkCommonResponse(buffer_arg) {
  return housework_pb.HouseworkCommonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkDetailRequest(arg) {
  if (!(arg instanceof housework_pb.HouseworkDetailRequest)) {
    throw new Error('Expected argument of type shw.HouseworkDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkDetailRequest(buffer_arg) {
  return housework_pb.HouseworkDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkDetailResponse(arg) {
  if (!(arg instanceof housework_pb.HouseworkDetailResponse)) {
    throw new Error('Expected argument of type shw.HouseworkDetailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkDetailResponse(buffer_arg) {
  return housework_pb.HouseworkDetailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkMemo(arg) {
  if (!(arg instanceof housework_pb.HouseworkMemo)) {
    throw new Error('Expected argument of type shw.HouseworkMemo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkMemo(buffer_arg) {
  return housework_pb.HouseworkMemo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkMemoRequest(arg) {
  if (!(arg instanceof housework_pb.HouseworkMemoRequest)) {
    throw new Error('Expected argument of type shw.HouseworkMemoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkMemoRequest(buffer_arg) {
  return housework_pb.HouseworkMemoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkMemoResponse(arg) {
  if (!(arg instanceof housework_pb.HouseworkMemoResponse)) {
    throw new Error('Expected argument of type shw.HouseworkMemoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkMemoResponse(buffer_arg) {
  return housework_pb.HouseworkMemoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkPointHistoryRequest(arg) {
  if (!(arg instanceof housework_pb.HouseworkPointHistoryRequest)) {
    throw new Error('Expected argument of type shw.HouseworkPointHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkPointHistoryRequest(buffer_arg) {
  return housework_pb.HouseworkPointHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkPointHistoryResponse(arg) {
  if (!(arg instanceof housework_pb.HouseworkPointHistoryResponse)) {
    throw new Error('Expected argument of type shw.HouseworkPointHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkPointHistoryResponse(buffer_arg) {
  return housework_pb.HouseworkPointHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkPointRequest(arg) {
  if (!(arg instanceof housework_pb.HouseworkPointRequest)) {
    throw new Error('Expected argument of type shw.HouseworkPointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkPointRequest(buffer_arg) {
  return housework_pb.HouseworkPointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkPointResponse(arg) {
  if (!(arg instanceof housework_pb.HouseworkPointResponse)) {
    throw new Error('Expected argument of type shw.HouseworkPointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkPointResponse(buffer_arg) {
  return housework_pb.HouseworkPointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkRequest(arg) {
  if (!(arg instanceof housework_pb.HouseworkRequest)) {
    throw new Error('Expected argument of type shw.HouseworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkRequest(buffer_arg) {
  return housework_pb.HouseworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HouseworkResponse(arg) {
  if (!(arg instanceof housework_pb.HouseworkResponse)) {
    throw new Error('Expected argument of type shw.HouseworkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HouseworkResponse(buffer_arg) {
  return housework_pb.HouseworkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HouseworkServiceService = exports.HouseworkServiceService = {
  getHousework: {
    path: '/shw.HouseworkService/GetHousework',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkRequest,
    responseType: housework_pb.HouseworkResponse,
    requestSerialize: serialize_shw_HouseworkRequest,
    requestDeserialize: deserialize_shw_HouseworkRequest,
    responseSerialize: serialize_shw_HouseworkResponse,
    responseDeserialize: deserialize_shw_HouseworkResponse,
  },
  getHouseworkDetail: {
    path: '/shw.HouseworkService/GetHouseworkDetail',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkDetailRequest,
    responseType: housework_pb.HouseworkDetailResponse,
    requestSerialize: serialize_shw_HouseworkDetailRequest,
    requestDeserialize: deserialize_shw_HouseworkDetailRequest,
    responseSerialize: serialize_shw_HouseworkDetailResponse,
    responseDeserialize: deserialize_shw_HouseworkDetailResponse,
  },
  createHousework: {
    path: '/shw.HouseworkService/CreateHousework',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.Housework,
    responseType: housework_pb.HouseworkCommonResponse,
    requestSerialize: serialize_shw_Housework,
    requestDeserialize: deserialize_shw_Housework,
    responseSerialize: serialize_shw_HouseworkCommonResponse,
    responseDeserialize: deserialize_shw_HouseworkCommonResponse,
  },
  updateHousework: {
    path: '/shw.HouseworkService/UpdateHousework',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.Housework,
    responseType: housework_pb.HouseworkCommonResponse,
    requestSerialize: serialize_shw_Housework,
    requestDeserialize: deserialize_shw_Housework,
    responseSerialize: serialize_shw_HouseworkCommonResponse,
    responseDeserialize: deserialize_shw_HouseworkCommonResponse,
  },
  finishHousework: {
    path: '/shw.HouseworkService/FinishHousework',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.Housework,
    responseType: housework_pb.HouseworkCommonResponse,
    requestSerialize: serialize_shw_Housework,
    requestDeserialize: deserialize_shw_Housework,
    responseSerialize: serialize_shw_HouseworkCommonResponse,
    responseDeserialize: deserialize_shw_HouseworkCommonResponse,
  },
  deleteHousework: {
    path: '/shw.HouseworkService/DeleteHousework',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.Housework,
    responseType: housework_pb.HouseworkCommonResponse,
    requestSerialize: serialize_shw_Housework,
    requestDeserialize: deserialize_shw_Housework,
    responseSerialize: serialize_shw_HouseworkCommonResponse,
    responseDeserialize: deserialize_shw_HouseworkCommonResponse,
  },
  getHouseworkMemo: {
    path: '/shw.HouseworkService/GetHouseworkMemo',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkMemoRequest,
    responseType: housework_pb.HouseworkMemoResponse,
    requestSerialize: serialize_shw_HouseworkMemoRequest,
    requestDeserialize: deserialize_shw_HouseworkMemoRequest,
    responseSerialize: serialize_shw_HouseworkMemoResponse,
    responseDeserialize: deserialize_shw_HouseworkMemoResponse,
  },
  createHouseworkMemo: {
    path: '/shw.HouseworkService/CreateHouseworkMemo',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkMemo,
    responseType: housework_pb.HouseworkCommonResponse,
    requestSerialize: serialize_shw_HouseworkMemo,
    requestDeserialize: deserialize_shw_HouseworkMemo,
    responseSerialize: serialize_shw_HouseworkCommonResponse,
    responseDeserialize: deserialize_shw_HouseworkCommonResponse,
  },
  updateHouseworkMemo: {
    path: '/shw.HouseworkService/UpdateHouseworkMemo',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkMemo,
    responseType: housework_pb.HouseworkCommonResponse,
    requestSerialize: serialize_shw_HouseworkMemo,
    requestDeserialize: deserialize_shw_HouseworkMemo,
    responseSerialize: serialize_shw_HouseworkCommonResponse,
    responseDeserialize: deserialize_shw_HouseworkCommonResponse,
  },
  deleteHouseworkMemo: {
    path: '/shw.HouseworkService/DeleteHouseworkMemo',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkMemo,
    responseType: housework_pb.HouseworkCommonResponse,
    requestSerialize: serialize_shw_HouseworkMemo,
    requestDeserialize: deserialize_shw_HouseworkMemo,
    responseSerialize: serialize_shw_HouseworkCommonResponse,
    responseDeserialize: deserialize_shw_HouseworkCommonResponse,
  },
  getHouseworkPoint: {
    path: '/shw.HouseworkService/GetHouseworkPoint',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkPointRequest,
    responseType: housework_pb.HouseworkPointResponse,
    requestSerialize: serialize_shw_HouseworkPointRequest,
    requestDeserialize: deserialize_shw_HouseworkPointRequest,
    responseSerialize: serialize_shw_HouseworkPointResponse,
    responseDeserialize: deserialize_shw_HouseworkPointResponse,
  },
  getHouseworkPointHistory: {
    path: '/shw.HouseworkService/GetHouseworkPointHistory',
    requestStream: false,
    responseStream: false,
    requestType: housework_pb.HouseworkPointHistoryRequest,
    responseType: housework_pb.HouseworkPointHistoryResponse,
    requestSerialize: serialize_shw_HouseworkPointHistoryRequest,
    requestDeserialize: deserialize_shw_HouseworkPointHistoryRequest,
    responseSerialize: serialize_shw_HouseworkPointHistoryResponse,
    responseDeserialize: deserialize_shw_HouseworkPointHistoryResponse,
  },
};

exports.HouseworkServiceClient = grpc.makeGenericClientConstructor(HouseworkServiceService);
