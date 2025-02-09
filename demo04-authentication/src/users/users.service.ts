import { Injectable } from '@nestjs/common';

export class User {
  id: number;
  name: string;
  username: string;
  password: string;
}
// dealing with the user object
@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Marius',
      username: 'marius',
      password: 'sosecure',
    },
    {
      id: 2,
      name: 'Mambo',
      username: 'mambo',
      password: 'dumbo',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
