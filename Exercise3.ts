//  Problem 3 — Union Status Handler (Optional Chaining + Nullish Coalescing)
// Detailed Problem Statement
// Define:

// Implement:
// export function handleStatus(
//   status,
//   data
// )

// Rules:

// Return "Unknown" if status is null or undefined.
// If status === 'success' or 'error' or 'loading', return:data?.message ?? status.toUpperCase()
// Must use optional chaining and nullish coalescing.

// Constraints

// No if (data && data.message) allowed — must use ?. and ??.
// data?.message overrides upper-case status when available.

// Example Test Cases
// Valid

// Input	Output
// handleStatus("success")	"SUCCESS"
// handleStatus("error", { message: "Something failed" })	"Something failed"
// handleStatus("loading")	"LOADING"

// Code Snippet
// // Problem 3 — Union Status Handler (Optional Chaining + Nullish Coalescing)

// TODO: Define a union type for status values (success, error, loading, null)

export function handleStatus(
  status: "success" | "error" | "loading" | null | undefined,
  data: { message?: string } | null | undefined
) {
  // TODO: Return "Unknown" if status is null or undefined
  // TODO: Otherwise return data?.message if defined, else status in uppercase
  // TODO: Use optional chaining (?.) and nullish coalescing (??)
  if(status == null || status == undefined){
    return "Unknown";
  }
  return data?.message ?? status.toUpperCase();
}
console.log(handleStatus("success",{message:"Success"}));
console.log(handleStatus("error", { message: "Something failed" }));
console.log(handleStatus("loading",null));
console.log(handleStatus("success",undefined));
console.log(handleStatus("hello",undefined));