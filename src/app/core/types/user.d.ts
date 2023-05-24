import { IUser } from '../models/user.model';

export type IUserCredentials = Pick<IUser, 'email' | 'password'>;
