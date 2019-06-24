export class User {
  id: string;
  isActive: boolean;
  balance: number;
  picture: string;
  age: number;
  gender: 'male' | 'female';
  name: {
    first: string;
    second: string;
  };
  address: string;
  registered: Date;
}
