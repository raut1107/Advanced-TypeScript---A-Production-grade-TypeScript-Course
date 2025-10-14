








//type BooleanRecord =  Record<string,boolean>;
// type Record <K,V> = { [Key in K]:V}



//type DeviceStatus = Record<"active" | "inactive" | "pending",boolean>;
// equivalent
type DeviceStatus = {
    active:boolean;
    inactive:boolean;
    pending:boolean
}

type BooleanRecord = Record<string,boolean>;

type VlueFromRecord = BooleanRecord[string]; // this resolves to boolean;