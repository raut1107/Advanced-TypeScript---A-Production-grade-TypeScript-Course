
type RecordData = {
  "100": string;
};

type Code = 100;

type GetValue<T, K extends keyof T> = T[K];

//type BadCase = GetValue<RecordData, Code>;
type GoodCase = GetValue<RecordData, `${Code}`>;

type SizeOption = "tiny" | "medium" | "large";
type CssClass = `size-${SizeOption}`;

type ThemeOption = "light" | "dark";
type ButtonSize = "small" | "big";

type ButtonVariant = `${ThemeOption}-${ButtonSize}`;


type Animal = "cat" | "dog";
type Emotion = "happy" | "sad";

function getEmoji(animal: Animal, emotion: Emotion) {
  const key = `${animal}-${emotion}` as const;

  switch (key) {
    case "cat-happy":
      return "😺";
    case "cat-sad":
      return "😿";
    case "dog-happy":
      return "🐶";
    case "dog-sad":
      return "😢";
    default:
      return assertUnreachable(key);
  }
}

function assertUnreachable(x: never): never {
  throw new Error("Unhandled case: " + x);
}