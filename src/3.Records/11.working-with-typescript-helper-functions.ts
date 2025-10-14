//  Partial Section 
type Config ={
    endpoint:string;
    timeout:number;
    secure:boolean;
};

type OptionalConfig = Partial<Config>;
// equivalent
// type OptionalConfig = {
//    endpoint?:string;
//     timeout?:number;
//     secure?:boolean;
// }

//   Required section
 type Preferences ={
 language?:string;
    notification?:boolean;
    timezone?:number;
}

type CompletePreferences = Required<Preferences>;
//  equivalent
// type CompletePreferences = {
//     language:string;
//     notification:boolean;
//     timezone:number;
// }


//  Pick section 
type UserInform ={
 username:string;
    email:string;
    age:number;
    subscribed:boolean;
}

type BasicUserInfo = Pick<UserInform,"username" | "email">;
// equivalent
// type BasicUserInfo = {
//     username:string;
//     email:string;
// }

//  omit section
type UserInforma = {
    username:string;
    email:string;
    age:number;
    subscribed:boolean;
};

type UserWithoutAge = Omit<UserInforma,"age">;
// equivalent
// type UserWithoutAge = {
//     username:string;
//     email:string;
//     subscribed:boolean;
// }

// if you want to remove both email and subscribed
type ContactInfo = Omit<UserInforma,"email"|"subscribed">;
// equivalent
// type ContactInfo = {
//     username:string;
//     age:number;
// }