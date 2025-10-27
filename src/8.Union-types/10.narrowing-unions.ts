type DataTypes = string | number | boolean;

function parseData(data:DataTypes){
    const isString = typeof data === "string";
    if(isString ){
        console.log(data.length);
    }
    else if(typeof data === "number"){
        console.log(Math.floor(data));
    }
    else{
        console.log(`Request was ${data === true ? "accepted." : "rejected."}`);
    }
}