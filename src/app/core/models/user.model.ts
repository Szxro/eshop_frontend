export interface IUser {
  username: string;
  email: string;
  token: string;
  refreshtoken: string;
  password: string;
}

export interface IUserShippingInfo {
  address: string;
  country: string;
  phone: string;
  state: string;
  city: string;
  postalCode: string;
  countryCode: string;
}
