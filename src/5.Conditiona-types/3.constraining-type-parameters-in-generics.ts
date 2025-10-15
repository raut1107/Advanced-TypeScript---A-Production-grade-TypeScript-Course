// without constriant typescript infers a broad type:
const wrapValue1 = <T>(value:T) =>({value});
const wrapped1 = wrapValue1("Hello");
// wrapped1 is typed as {value:string} (losing the literal type "hello")

// with constraint ,the literal type is maintained:
const wrapValue2=<T extends string>(value:T) =>({value});
const wrapped2 = wrapValue2("Hello");
// wrapped2 is now typed as:{value :"Hello"};