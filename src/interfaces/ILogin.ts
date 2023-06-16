interface ILogin {
  email: string;
  password: string;
}

interface UserModel {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: number;
}

export { UserModel, ILogin };
