//Object Type 

type ProductDetails ={
    title:string;
    inStock:boolean;
}

// Record type 
type configSetting ={
    [setting:string]:number;
}

// tuple type 
type LogEntry = [timeStamp:Date,level:string,message:String];

//array type 
type Rating = number[];