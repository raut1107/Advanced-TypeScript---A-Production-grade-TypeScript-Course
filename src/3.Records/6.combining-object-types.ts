type Identity = {id:number};
type PersonalInfo = {firstName:string;lastName:string};
type Permission = {canAccess:boolean};

type userProfile = Identity & PersonalInfo & Permission;