declare interface ITokens {
  accessToken: string;
  refreshToken: string;
}

declare interface IUserDataRegisterResponse {
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

declare interface IUserDataLogin {
  email: string;
  password: string;
}

declare interface IUserDataLoginResponse {
  user: IUserDataResponse;
  tokens: ITokens;
}
