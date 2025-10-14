

type MyTuple =[1,2,3,4];
type MyTupleLength = MyTuple["length"];
type NextIndex<T extends unknown[]> = [...T,unknown]["length"]

type test = NextIndex<MyTuple>;