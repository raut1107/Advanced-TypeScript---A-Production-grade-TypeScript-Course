type ParticalConfig = {
    mode:"dark" | "light" | undefined;
    refreshRate:number | undefined;
}

type DefiniteProperties<T> ={
    [K in keyof T]:Exclude<T[K],undefined>
};

type DefiniteConfig = DefiniteProperties<ParticalConfig>;
