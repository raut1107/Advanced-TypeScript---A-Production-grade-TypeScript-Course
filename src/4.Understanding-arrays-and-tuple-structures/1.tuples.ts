type NoElements = []; // empty tuple
type SingleElements = [42]; // a tuple with 1 number
type Pair = [string,number]; // 1st elemt is string,2nd is a number
type Triple = [boolean,string,number]; // 3 elements of differemt types
type DuplicateTypes = [true,"yes",true];  // tuples can include same type more than once


type PersonProfile = [string,number];
type PersonName = PersonProfile[0]; // type is string
type PersonAge = PersonProfile[1]; // type is number


type DataSet = [string,number,boolean];
type NumberOrNumber = DataSet[0 | 1]; // yields string | number

type DataSet1 = [string,number,boolean];
type AllValues = DataSet[number]; //string | number|boolean
            //         t[number] pattern

type TupleKeys = keyof["Alic",30];
//  tupleKeys becomes "0"|"1"|"map"|"filter|"reduce | ..which is usually not what you want

type FirstPart =[1,2];
type SecondPart = [3,4];
type Combined = [...FirstPart,...SecondPart]; //   [1,2,3,4]

type FullName = [firstName:string,lastName:string];
// Internally,FullName is still [string,string];

type OptionalInfo = [username:string,score?:number];
const completeInfo :OptionalInfo =["Charlie",99]; // both element provieded
const partialInfo:OptionalInfo=["Charile"]; // 2nd element is ommited
const explicitUndefined:OptionalInfo = ["Charile",undefined] // allowed too