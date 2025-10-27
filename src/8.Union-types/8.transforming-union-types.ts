type StringValue<S extends string> = S extends any ? [Lowercase<S>,Uppercase<S>]:never;

type SV1 = StringValue<"Hi">;
type SV2 = StringValue<"Hi" | "bye">;