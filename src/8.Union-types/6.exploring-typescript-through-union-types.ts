type Union = "x" | "y";
const union = new Set(["x","y"]);

type Union2 = "x";
const union2 = new Set(["x"]);

type Union3 = never
const union3 = new Set([]);