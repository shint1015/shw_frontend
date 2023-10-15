// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var family_pb = require('./family_pb.js');

function serialize_shw_AddFamilyMemberRequest(arg) {
  if (!(arg instanceof family_pb.AddFamilyMemberRequest)) {
    throw new Error('Expected argument of type shw.AddFamilyMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_AddFamilyMemberRequest(buffer_arg) {
  return family_pb.AddFamilyMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_Family(arg) {
  if (!(arg instanceof family_pb.Family)) {
    throw new Error('Expected argument of type shw.Family');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_Family(buffer_arg) {
  return family_pb.Family.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_FamilyCommonResponse(arg) {
  if (!(arg instanceof family_pb.FamilyCommonResponse)) {
    throw new Error('Expected argument of type shw.FamilyCommonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_FamilyCommonResponse(buffer_arg) {
  return family_pb.FamilyCommonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_FamilyRequest(arg) {
  if (!(arg instanceof family_pb.FamilyRequest)) {
    throw new Error('Expected argument of type shw.FamilyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_FamilyRequest(buffer_arg) {
  return family_pb.FamilyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_FamilyResponse(arg) {
  if (!(arg instanceof family_pb.FamilyResponse)) {
    throw new Error('Expected argument of type shw.FamilyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_FamilyResponse(buffer_arg) {
  return family_pb.FamilyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FamilyServiceService = exports.FamilyServiceService = {
  getFamily: {
    path: '/shw.FamilyService/GetFamily',
    requestStream: false,
    responseStream: false,
    requestType: family_pb.FamilyRequest,
    responseType: family_pb.FamilyResponse,
    requestSerialize: serialize_shw_FamilyRequest,
    requestDeserialize: deserialize_shw_FamilyRequest,
    responseSerialize: serialize_shw_FamilyResponse,
    responseDeserialize: deserialize_shw_FamilyResponse,
  },
  createFamily: {
    path: '/shw.FamilyService/CreateFamily',
    requestStream: false,
    responseStream: false,
    requestType: family_pb.Family,
    responseType: family_pb.FamilyCommonResponse,
    requestSerialize: serialize_shw_Family,
    requestDeserialize: deserialize_shw_Family,
    responseSerialize: serialize_shw_FamilyCommonResponse,
    responseDeserialize: deserialize_shw_FamilyCommonResponse,
  },
  updateFamily: {
    path: '/shw.FamilyService/UpdateFamily',
    requestStream: false,
    responseStream: false,
    requestType: family_pb.Family,
    responseType: family_pb.FamilyCommonResponse,
    requestSerialize: serialize_shw_Family,
    requestDeserialize: deserialize_shw_Family,
    responseSerialize: serialize_shw_FamilyCommonResponse,
    responseDeserialize: deserialize_shw_FamilyCommonResponse,
  },
  deleteFamily: {
    path: '/shw.FamilyService/DeleteFamily',
    requestStream: false,
    responseStream: false,
    requestType: family_pb.Family,
    responseType: family_pb.FamilyCommonResponse,
    requestSerialize: serialize_shw_Family,
    requestDeserialize: deserialize_shw_Family,
    responseSerialize: serialize_shw_FamilyCommonResponse,
    responseDeserialize: deserialize_shw_FamilyCommonResponse,
  },
  addFamilyMember: {
    path: '/shw.FamilyService/AddFamilyMember',
    requestStream: false,
    responseStream: false,
    requestType: family_pb.AddFamilyMemberRequest,
    responseType: family_pb.FamilyCommonResponse,
    requestSerialize: serialize_shw_AddFamilyMemberRequest,
    requestDeserialize: deserialize_shw_AddFamilyMemberRequest,
    responseSerialize: serialize_shw_FamilyCommonResponse,
    responseDeserialize: deserialize_shw_FamilyCommonResponse,
  },
};

exports.FamilyServiceClient = grpc.makeGenericClientConstructor(FamilyServiceService);
