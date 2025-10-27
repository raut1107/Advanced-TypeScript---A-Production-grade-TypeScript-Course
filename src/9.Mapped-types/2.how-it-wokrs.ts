type Numbers = "one" | "two" | "three"

type NumbersMap = {
    [N in Numbers]: N
}

type NumberswithInfo = {
    [N in Numbers]: `The number is ${N}`;
}