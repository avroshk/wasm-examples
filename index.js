// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/wasm_examples.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const wasmAdd = await init("./pkg/wasm_examples_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = wasmAdd.add(21, 21);

  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();
