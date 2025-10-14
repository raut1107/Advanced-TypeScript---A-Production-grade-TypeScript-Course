interface BookDetails {
    isbn:string;
    title:string;
    author:string;
}

interface BookInventory {
    isbn : number;
    availableCopies:number;
};

interface Book extends BookDetails,BookInventory{};

const book : Book ={
    isbn:"456436523",
    title:"dfgseef",
    author:"dgazfsd",
    availableCopies:10
}