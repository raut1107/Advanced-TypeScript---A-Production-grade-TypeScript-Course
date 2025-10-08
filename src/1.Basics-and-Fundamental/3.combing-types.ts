type NotificationMethod = "email" | "sms" | "push"

type Person = {name:string};
type Recordable = {recordId: number}

type Empolyee = Person & Recordable;