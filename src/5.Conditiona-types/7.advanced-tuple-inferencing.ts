type FirstEl<T extends unknown[]> = T extends[infer Head,...unknown[]]?Head:never;
// example
type ea=FirstEl<["red","green","blue"]>; // red
type eb=FirstEl<[]>; //never


type RestEl<T extends unknown[]> = T extends[infer Tail,...unknown[]]?Tail:[];
// example
type ea1=RestEl<["red","green","blue"]>; // ["green","blue"]
type eb1=RestEl<["red"]>; //[]
type ec1=RestEl<[]>; //[]

type EdgeEl<T extends unknown[]> = T extends[infer First,...unknown[],infer Last]?[First,Last]:[];
// example
type ea2=EdgeEl<[10,20,30,40]>; // [10,40]
type eb2=EdgeEl<[10,20]>; //[10,20]
type ec2=EdgeEl<[10]>; //[] (only one element so no distinct "first" and "last")
type ed2=EdgeEl<[]>; //[]

