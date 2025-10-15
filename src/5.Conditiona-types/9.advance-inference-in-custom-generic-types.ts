// type Pair<A,B> = {first:A;second:B};
// type GetPairTypes<P> = P extends Pair<infer A, infer B> ? [A,B]:never;
// type PairExample = GetPairTypes<Pair<string,number>>;
// // PairExample is [string,number]


// type Variable

// SomeExpression extends infer Temp ?  /* use Temp */ : never;

// type UseCal<T> = ExpensiveCalcuation<T> extends infer Result ?[Result,Result,Result]:never;

// type ProcessAndRepeat<T> =ProcessData<T> extends infer Intermediate ? {first:Intermediate;second:Intermediate;third:Intermediate}:never;