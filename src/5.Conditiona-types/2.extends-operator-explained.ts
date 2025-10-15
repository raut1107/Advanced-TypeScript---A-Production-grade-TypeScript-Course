// A extend B ? X:Y 

type IsLiteral99<T> = T extends 99 ? "Match" : "no match";

type If<Condition extends boolean,Then,Else> = Condition extends true ? Then : Else;
// usage
type ResultA = If<true,number,string>; // resolves to number;
type resultB = If<false,number,string>; // resolves to string;