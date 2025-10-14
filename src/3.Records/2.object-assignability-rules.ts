const extraDetails = {
  name: "Alice",
  age: 28,
  occupation: "Designer", // Extra property
};

// Later we assign it to a Person type
const person: Person = extraDetails; // ✅ Works fine