
interface idInt {
    id:string;
}
interface CreatedAt{
    postedAt:Date;
}

interface Articale extends idInt,CreatedAt {
    headline:string;
    content:string;
} ;

interface Feedback extends idInt,CreatedAt {
    username:string;
    comment:string;
} ;