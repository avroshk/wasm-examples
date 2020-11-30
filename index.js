// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import wasmInit from "./pkg/wasm_examples.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const rustWasm = await wasmInit("./pkg/wasm_examples_bg.wasm");

  // Run the exported function
  rustWasm.console_log_from_wasm(); // Should log "This console.log is from wasm!"
};
runWasm();
