type Profile = {
  username: string;
  email: string;
  active: boolean;
};

type ProfileKeys = "username" | "email" | "active";

type ProfileValues = Profile[keyof Profile];
