// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import wasmInit from "./pkg/wasm_examples.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const rustWasm = await wasmInit("./pkg/wasm_examples_bg.wasm");

  // Call the Add function export from wasm, save the result
  const result = rustWasm.call_me_from_javascript(21, 21);

  console.log(result); // Should output '66'
  console.log(rustWasm.ADD_CONSTANT); // Should output 'undefined'
  console.log(rustWasm.add_integer_with_constant); // Should output 'undefined'
};
runWasm();
