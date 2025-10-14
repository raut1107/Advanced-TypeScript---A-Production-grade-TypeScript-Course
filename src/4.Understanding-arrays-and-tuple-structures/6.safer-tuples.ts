type NameParts =readonly [string,string,string];
const myName :NameParts =["Jhon","","Doe"];
const unsafeFunction = (nameParts:string[]) =>{
    nameParts.pop();
    nameParts.pop();
}

// unsafeFunction(myName);