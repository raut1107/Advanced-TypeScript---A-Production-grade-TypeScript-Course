type ProductValue = [["title","TV65"],["price",499.99]];
// Expected type: { title: "TV 65'"; price: 499.99 }


type TupleToObject<Tuple,Acc = {}>=
Tuple extends[infer Value,...infer Rest]
?TupleToObject<Rest,
// check if value is valid [Key,Value] pair
Value extends[infer Key,infer Value]
//  Merge the new key-value pair into the accumulator.
?Acc & {[K in Key &(string | number | symbol)]:Value}
:Acc> :Acc;

type Product = TupleToObject<ProductValues>;
// the type "product will be {title:"TV 65";price:499.99}
