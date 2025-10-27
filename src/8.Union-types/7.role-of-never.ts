type CheckAnswer<Answer> = Answer extends 50 ? true:false;

type CA1 = CheckAnswer<50>;
type CA2 = CheckAnswer<never>;


const checkAnswer1 = (list:number[]) => list.map((n) => n === 50);
const result = checkAnswer1([]); 