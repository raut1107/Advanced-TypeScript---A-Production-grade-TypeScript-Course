type Gamma = {common :string;extraOne:boolean};
type Delta = {common : string;extraTwo:number};

type UnionType = Gamma | Delta;
type keyofUnion = keyof UnionType // this results in just "common"