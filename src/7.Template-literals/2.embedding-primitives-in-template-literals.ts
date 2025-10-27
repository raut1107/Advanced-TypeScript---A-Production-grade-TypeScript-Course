type YearMessage = `The currrent year is ${number}.`;
const msg1 :YearMessage = "The currrent year is 2021.";
const msg2 :YearMessage = "The currrent year is 1999.";
const msg3:YearMessage = "The currrent year is 2000.";  // error "year 2000 is not a number"


declare function connect(url:`http://localhost:${number}`):void;
connect("http://localhost:3000");
// connect("http://localhost:port"); error port must be number