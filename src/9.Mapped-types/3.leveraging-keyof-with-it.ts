type Car  = {
    model :string
    year:number
}

type NullableCar = {
    [Prop in keyof Car]: Car[Prop] | null
}