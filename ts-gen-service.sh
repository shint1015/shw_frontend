function find_proto() {
  find -name '*.proto' -type f -exec basename {} \;
}

# protoc(proto ファイルから各種ファイルを生成するコンパイラ)のパス
NODE_PROTOC="../node_modules/.bin/grpc_tools_node_protoc"

# TypeScript 用のファイルを生成するためのプラグインのパス
PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts"

# 生成ファイルを格納するフォルダパス
OUT_DIR="../src/services"

cd protos;


for file in $(find_proto); do
  echo "$file"
  $NODE_PROTOC \
  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \
  --grpc_out="grpc_js:${OUT_DIR}" \
  "$file"
done