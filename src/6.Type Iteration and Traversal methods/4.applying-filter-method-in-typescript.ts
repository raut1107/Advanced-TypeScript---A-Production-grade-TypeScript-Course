type SomeVlaues = [1, "hello", true, "bye"]; // ["hello", "bye"]

type FilterStrings<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? [First, ...FilterStrings<Rest>]
    : FilterStrings<Rest>
  : [];

// type SomeFilter<List> =
// List extends [infer First, ...infer Rest]
//   ? First extends  /* ... ❗ the condition */
//     ? [First, ...SomeFilter<Rest>]
//     : SomeFilter<Rest>
//   : [];

type ProductValues = [["title", "TV 65' "], ["price", 499.99]];
// Expected type: { title: "TV 65'"; price: 499.99 }
