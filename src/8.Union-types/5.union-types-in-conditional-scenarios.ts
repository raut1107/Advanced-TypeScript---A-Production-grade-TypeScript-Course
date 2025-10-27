type IsNumber<T> = T extends number ? "yes" : "no"

type Result1 = IsNumber<100>;
type ResultB = IsNumber<"hello">;

// Distributed form
type ResultC2 = | (100 extends number ? "yes" :"no")
| ("hello" extends number ? "yes" :"no")
| (true extends number ? "yes" :"no")


type DashToSpace<Str extends string> = Str extends `${infer Part}-${infer Rest}` ? `${Part} ${DashToSpace<Rest>}` :Str;
type DTS1 = DashToSpace<"some-text-with-dash">;
type DTS2 = DashToSpace<"some-text-wtih-dash" | "another-text">;