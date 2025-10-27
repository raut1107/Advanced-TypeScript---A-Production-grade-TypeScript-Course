type Stages = "Planning" | "Requirements"| "Desing" | "Testing" | 42;
type FS = Extract<Stages,string>;

type operations = "getuser"| "getProduct" | "postdata" | "postR";
type FO = Extract<operations,`get${string}`>; 

type FS2 = Exclude<Stages,number>;
type FO2 = Exclude<operations,`post${string}`>;