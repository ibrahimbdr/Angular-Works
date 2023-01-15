export interface Iuser {
  id: string,
  username: string,
  password: string,
  firstName: string,
  middleName?: string,
  lastName: string,
  email: string,
  phone: string,
  orders: string[],
}
