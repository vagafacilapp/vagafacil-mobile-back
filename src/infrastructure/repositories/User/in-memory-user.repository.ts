import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/domain/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async findAll(): Promise<User[] | null> {
    return this.users.map((item) => item) || null;
  }
}
