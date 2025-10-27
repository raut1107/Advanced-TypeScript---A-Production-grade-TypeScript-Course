export type userStatus = | {state:"loading"}
                         | {state:"loaded"; userData :{id:number,username:string}}
                         | {state:"failed"; errorMsg:string}

            let goodStatus:userStatus ={state:"loaded", userData:{id:1,username:"sdfs"}};