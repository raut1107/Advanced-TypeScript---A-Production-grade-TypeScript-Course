type Resources = {
    product:string;
    customer:string;
    inventory:string;
};



type RemapKeys <T> ={
    [K in keyof Resources as  `get${Capitalize<K & string>}`] : ()=> T[K]
}

type test2 = RemapKeys<Resources>;

type GetResources = {
    getProduct : () => string;
    getCustomer : () => string;
    getInventory : () => string;
}