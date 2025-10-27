type BreakString<Str> = Str extends `${infer FirstChar}${infer Remainder}`
  ? [FirstChar, Remainder]
  : never;

type Part1 = BreakString<"Hello there.">;
type part2 = BreakString<"lsdjflkdf">;

type DivideArray<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? [Head, Tail]
  : never;

type ArrayResult = DivideArray<["X", "Y", "Z"]>;
