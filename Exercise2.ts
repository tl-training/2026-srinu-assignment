// Problem 2 — Tuple & Interface Validation
// Detailed Problem Statement
// Define:
// Implement:
// createUser(name, age)

// Returns a proper User object.
// Must validate types at compile time.
// parseTuple(tuple)

// Converts a tuple [name, age] into a User.
// Must guarantee type safety.

// Constraints

// name must be a string.
// age must be a number ≥ 0.
// Tuple length must be exactly 2.

// Example Test Cases
// Valid
// parseTuple(["Alice", 20])
// // → { name: "Alice", age: 20 }

// createUser("Bob", 30)
// // → { name: "Bob", age: 30 }

// Code Snippet
// // Problem 2 — Tuple & Interface Validation

export function createUser(name:string, age:number) {
  // TODO: Return a user object with the given name and age
  // TODO: Validate at compile time that name is string and age is number ≥ 0
  if(typeof name !== "string"){
    throw new Error("Name must be a string");
  }
  if(typeof age !== "number" || age < 0){
    throw new Error("Age must be a non-negative number");
  }
  return {
    name: name,
    age: age,
  };
}

export function parseTuple(tuple: [string, number]) {
  // TODO: Convert tuple into a user object
  // TODO: Ensure tuple length is exactly 2 and types are validated at compile time
  return {
    name: tuple[0],
    age: tuple[1],
  };
}
console.log(createUser("Bob",30));
console.log(parseTuple(["Alice",20]));
console.log(parseTuple(["Alice","hello"]));
console.log(createUser("Bob","thirty"));