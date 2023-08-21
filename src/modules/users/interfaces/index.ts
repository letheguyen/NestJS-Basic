export interface IUser {
  userName: string;
  email?: string;
  password?: string;
  role: string;
  status: string;
  avatarUrl?: string;
  googleId?: string;
  twitterId?: string;
  facebookId?: string;
}