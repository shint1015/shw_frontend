// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_shw_UpdateRoleRequest(arg) {
  if (!(arg instanceof user_pb.UpdateRoleRequest)) {
    throw new Error('Expected argument of type shw.UpdateRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_UpdateRoleRequest(buffer_arg) {
  return user_pb.UpdateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_UserCommonResponse(arg) {
  if (!(arg instanceof user_pb.UserCommonResponse)) {
    throw new Error('Expected argument of type shw.UserCommonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_UserCommonResponse(buffer_arg) {
  return user_pb.UserCommonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  updateRole: {
    path: '/shw.UserService/UpdateRole',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateRoleRequest,
    responseType: user_pb.UserCommonResponse,
    requestSerialize: serialize_shw_UpdateRoleRequest,
    requestDeserialize: deserialize_shw_UpdateRoleRequest,
    responseSerialize: serialize_shw_UserCommonResponse,
    responseDeserialize: deserialize_shw_UserCommonResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
