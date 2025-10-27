type ParseVersion<Version> =
  Version extends `${infer Major}.${infer Minor}.${infer Patch}`
    ? [Major, Minor, Patch]
    : never;

type VersionA = ParseVersion<"3.5.6">;
type VesrionB = ParseVersion<"3.0">;

type DivideName<Str> = Str extends `${infer First} ${infer Last}`
  ? [First, Last]
  : never;

type NameOne = DivideName<"John Doe">;
type PersonName1 = DivideName<"Alexander Graham Bell">;
