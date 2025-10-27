const city ="Paris";
const country = "France";
export const location = `${city},${country}`;

type City ="Paris";
type Country = "France";
export type Location = `${City},${Country}`;


type version = 3;
type FileLable = `file_v${version}.txt`

type Flag = true;
type statusMessage = `Status is ${Flag}`;

type RecordData = {
    "100":string
}

type Code = 100;
type GetValue<T,K extends keyof T> = T[K]

// type BadCase = GetValue<RecordData,Code>;
type GoodCase = GetValue<RecordData,`${Code}`>