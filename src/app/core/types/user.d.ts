import { IUser, IUserShippingInfo } from '../models/user.model';

export type UserCredentials = Pick<IUser, 'email' | 'password'>;

export type CurrentUser = Pick<IUser, 'email' | 'username'>;

export type RegistrationUser = IUser & { UserShippingInfo: IUserShippingInfo };
