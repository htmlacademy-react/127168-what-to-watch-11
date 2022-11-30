export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  avatarUrl: string;
  id: number;
  name: string;
};

export type UserDataResponse = UserData & {
  email: string;
  token: string;
};
