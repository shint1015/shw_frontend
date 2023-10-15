// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sample_pb = require('./sample_pb.js');

function serialize_shw_HelloRequest(arg) {
  if (!(arg instanceof sample_pb.HelloRequest)) {
    throw new Error('Expected argument of type shw.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HelloRequest(buffer_arg) {
  return sample_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shw_HelloResponse(arg) {
  if (!(arg instanceof sample_pb.HelloResponse)) {
    throw new Error('Expected argument of type shw.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shw_HelloResponse(buffer_arg) {
  return sample_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloServiceService = exports.HelloServiceService = {
  hello: {
    path: '/shw.HelloService/Hello',
    requestStream: false,
    responseStream: false,
    requestType: sample_pb.HelloRequest,
    responseType: sample_pb.HelloResponse,
    requestSerialize: serialize_shw_HelloRequest,
    requestDeserialize: deserialize_shw_HelloRequest,
    responseSerialize: serialize_shw_HelloResponse,
    responseDeserialize: deserialize_shw_HelloResponse,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
