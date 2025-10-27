type Product1 = {
  id: number;
  title: string;
  price: number;
};

type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

type OptionalProduct = MakeOptional<Product>;

type NumbersArray = number[];

type OptionalNumbers = MakeOptional<NumbersArray>;

type Point = [number, number];
type OptionalPoint = MakeOptional<Point>;

type OptionalPoint = [number | undefined, number | undefined];
