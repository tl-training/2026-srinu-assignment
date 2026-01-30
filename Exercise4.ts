// Problem 4 — Module Export + Intersection Types + Enum
// Detailed Problem Statement
// In submission/math.ts:

// Create enum
// Define intersection type

// Export default function:
// export default function createCalc(op);

// The returned object must:store op
// execute add or multiply based on it
// In index.ts, import and use it.

// Constraints

// Must use intersection type.
// Must use enum fields Operation.Add or Operation.Multiply.

// Example Test Cases
// Valid
// const addCalc = createCalc(Operation.Add);
// addCalc.execute(2, 3);  // → 5

// Code Snippet — submission/math.ts
// // Problem 4 — Module Export + Intersection Types + Enum
// TODO: Define an enum for operations (add, multiply)

// // TODO: Define a type for calculator object
// // It should store the operation and have an execute method
//  export enum Operator {
//     ADD="add",
//     MULTIPLY="multiply"
//   }

// export default function createCalc(op: Operator) {
//  if (!(op === Operator.ADD || op === Operator.MULTIPLY)) {
//     throw new Error("Invalid operation");
//  }
//   // TODO: Return an object that stores the operation
//   // TODO: Implement execute method that adds or multiplies based on op
 
//   return {
//     op,
//     execute(a: number, b:number):number {
//       if(op === Operator.ADD) {
//         return a+b;
//       }else if(op === Operator.MULTIPLY){
//         return a*b;
//       }
//       return 0; // placeholder
//     },
//   };
// }

// Code Snippet — index.ts
// import createCalc, { Operator } from './submission/math';

// const calc = createCalc(Operator.ADD);
//   /* TODO: pass operation */
// console.log(calc.execute(5, 10)); // Expected output: 15
