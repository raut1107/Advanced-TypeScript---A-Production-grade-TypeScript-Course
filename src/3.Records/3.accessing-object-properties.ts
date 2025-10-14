type User = {
  username: string;
  experience: number;
  premium: boolean;
};

type BasicInfo1 = User["username" | "experience"];


type BasicInfo = User["username"] | User["experience"];
