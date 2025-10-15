type ExtractRole<T> = T extends {name:string;role:infer R }
? R :never;

type RoleA = ExtractRole<{name:"Alice";role:"admin"}>; // role is admin
type RoleB = ExtractRole<{name:"Alice";role:number}>; // role is number
type RoleC = ExtractRole<{role:"user"}>; // rolec is never,since there's no name; 

