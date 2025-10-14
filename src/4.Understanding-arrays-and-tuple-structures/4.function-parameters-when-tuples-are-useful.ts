type UserParams = [username:String,age?:number,...adresses:string[]];

function registerUser(...args:UserParams){

}

function updateUser(userID:number,...args:UserParams){

}


type FullNam = |[firstName:string,lastName:string] |[firstName:string,middleName:string,lastName:string];

function createAccount(...nameParts:FullNam){
    if(nameParts.length === 2){

    }
    else{

    }
}
// valid calls 
createAccount("Jhon","Doe");
createAccount("Jane","df","sdfs");

// // invalid calls
// createAccount("dfa");
// createAccount("def","dfawe","dfa","sdaf");
