type Persons = {firstName:string;age:number};
type PersonsInfo =Persons["firstName" | "age"];
//  output string|number

type LabelSize = "small" | "medium" | "large";
type LabelClass = `label-${LabelSize}`;
//  output : "label-small" |"label-medium" | "label-large"

const setting ={mode:"production" ,port:8000};

function printSetting(key:"mode" | "port"){
    const value =setting[key];
    console.log(value);
}

printSetting("mode");
printSetting("port");
