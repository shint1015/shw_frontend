OUT_DIR="./src/services"
gen:
	rm -rf $(OUT_DIR) && mkdir -p $(OUT_DIR)
	npx buf generate ./protos/