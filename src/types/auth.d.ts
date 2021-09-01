declare interface IUserData {
  email: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
}

declare interface IUserDataResponse {
  email: string;
  nickname: string;
  id: string;
  isActivated: boolean;
}
