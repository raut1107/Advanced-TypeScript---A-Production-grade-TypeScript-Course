type WrapElements<T> = {
    [k in keyof T]:{value: T[k]}

}

type MyStrings = string[];

type WrapStrings = WrapElements<MyStrings>;

type MyTuple2 = [number,boolean,23];
type WrappedTuple = WrapElements<MyTuple2>

type KeyTuple = ["key-3445","key-4543","fgse"];

type ExtractKey<T extends any[]> = {
    [S in keyof T]: T[S] extends `key-${infer k}` ? k:T[S];
}

type RealKeysTuple = ExtractKey<KeyTuple>