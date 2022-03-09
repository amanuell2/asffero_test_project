import { Injectable, NotFoundException } from '@nestjs/common';
import { DummyUsers } from './Dummy.data';
import { User } from './User.model';

@Injectable()
export class UserService {
  users: User[] = DummyUsers;
  addUser(id, name, surname, dateOfBirth, phone, email, timeStamp) {
    const newUser = new User(
      id,
      name,
      surname,
      dateOfBirth,
      phone,
      email,
      timeStamp ?? new Date().toISOString()
    );
    this.users.push(newUser);
    return newUser;
  }

  getUsers() {
    return [...this.users];
  }

  getUser(userId: string) {
    const user = this.users.find((singleUser) => singleUser.id === userId);
    if (!user) throw new NotFoundException('no User found');

    return { ...user };
  }

  editUser(
    userId: string,
    name: string,
    surname: number,
    dateOfBirth: string,
    phone: string,
    email: string,
    timeStamp: string
  ) {
    const [user, userIndex] = this.findUser(userId);
    const updateUser = { ...user };

    if (name) updateUser.name = name;
    if (surname) updateUser.surname = surname;
    if (dateOfBirth) updateUser.dateOfBirth = dateOfBirth;
    if (phone) updateUser.phone = phone;
    if (email) updateUser.email = email;
    if (timeStamp) updateUser.timeStamp = timeStamp;

    return (this.users[userIndex] = { ...updateUser });
  }

  findUser(userId: string): [User, number] {
    const userIndex = this.users.findIndex(
      (activeUser) => activeUser.id === userId
    );
    const user = this.users[userIndex];
    if (!User) throw new NotFoundException('no User found');
    return [user, userIndex];
  }

  deleteUser(userId: string) {
    const [user, index] = this.findUser(userId);
    this.users.splice(index, 1);
    return null;
  }
}
