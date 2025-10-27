type Notification1 = 
        | {type :"message";content:string}
        | {type:"friendRequest"; from:string}
        | {type:"alert"; details:string};

type SelectByType<Item,Allowed> = Item extends {type:Allowed} ? Item :never;

type ImportandNot = SelectByType<Notification1,"message"| "alert">;

declare function filterItems<T extends {type:string},Allowed extends T["type"]>
(items:T[],allowed:Allowed[]):SelectByType<T,Allowed>[];

const allNotifications:Notification1[] = [
  {type :"message",content:"Hello"},
        {type:"friendRequest",from:"dg"},
        {type:"alert",details:"dergzsegfs"}
]

const selected = filterItems(allNotifications,["message","alert"]);