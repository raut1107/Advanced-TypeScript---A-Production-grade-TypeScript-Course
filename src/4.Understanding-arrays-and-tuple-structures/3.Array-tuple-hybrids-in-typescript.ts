type SequenceStartWithFive = [5,...number[]];

type SentenceEnding=[...string[],"."];
//Valid examples
const sent1 :SentenceEnding =["Hello","world","."];
const sent2:SentenceEnding =["."]; // even a single element array is acceptable

type NonEmptyBooleans = [boolean,...boolean[]];
// valid example
const flags:NonEmptyBooleans =[true,false,true];

type PaddedArray = [-1,...number[],-1];
// valid examples
const pad1 :PaddedArray = [-1,-1];
const pad2:PaddedArray = [-1,10,20,-1];

type BadgeCode =["A" |"B",...number[]];
// valid examples
const code1:BadgeCode = ["A",1334,3423];
const code2:BadgeCode = ["B"];
