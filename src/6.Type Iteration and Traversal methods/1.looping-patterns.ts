// pseudocode in imperative language:
// doSomething();
// while(condition){
//     performance();
// };

// A recursive function pseudocode

type ProcessTuple<T extends any[]> = 
T extends [infer Head,...infer Tail] // check if T has at least one element 
?ProcessTuple<Tail> // recursively process the rest of the tuple 
:"Finished";
