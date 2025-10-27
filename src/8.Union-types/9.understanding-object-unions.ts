type Ob1 = {x:string;y:number};
type ob2 = {x:string;z:boolean};

type AllKeys<T> = T extends unknown ? keyof T:never;

type Al = AllKeys<Ob1 | ob2>;