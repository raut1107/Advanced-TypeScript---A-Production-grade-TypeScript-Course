type apiPayload = {
  chapter_title: "Mapped Types",
  author: { full_name: "Codelicks Academy" },
};
type Camelize<T> = {
  // For each key K in T, transform it into camelCase
  [K in keyof T as Camelcase<K>]: T[K] extends object ? Camelize<T[K]> : T[K];
};

type Camelcase<S> = S extends `${infer P}_${infer R}`
? `${Lowercase<P>}${Capitalize<Camelcase<R>>}` :S;


type newResponse = Camelize<apiPayload>;