type ExtractFinalWord<S extends string> = S extends `${string} ${infer Tail}`
  ? ExtractFinalWord<Tail>
  : S;

type LW1 = ExtractFinalWord<"Harry James Potter">;

type SplitFirstAndLast<NameStr extends string> =
  NameStr extends `${infer First} ${infer Remainder}`
    ? [First, ExtractFinalWord<Remainder>]
    : never;

type FN = SplitFirstAndLast<"Harry James Potter">;
