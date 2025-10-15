type IsProduct<T> = T extends {title:string;price:number} ? true : false;

//  test cases :
type TestA = IsProduct<{title:"gadget",price:99.99}>; // true
type TestB = IsProduct<{title:"gadget"}>; // false
