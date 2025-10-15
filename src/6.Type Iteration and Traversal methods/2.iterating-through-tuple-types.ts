// A recursive function pseudocode

type ProcessTuple1<T extends any[]> = 
T extends [infer Head,...infer Tail] // check if T has at least one element 
?ProcessTuple1<Tail> // recursively process the rest of the tuple 
:"Finished";


type Column ={
    key:string;
    entries:unknown[]
}

type DataTable =[Column,...Column[]]
type userDataTable =[  
        {key:"username";entries:string[]},
        {key:"score";entries:number[]},
        {key:"active";entries:boolean[]}
];

type FindColumn<Table,K> = Table extends [infer First,...infer Rest]? First extends {key:K,entries:infer E} ? E : FindColumn<Rest,K>: undefined;

type username = FindColumn<userDataTable,"username">;
type scores = FindColumn<userDataTable,"score">;
