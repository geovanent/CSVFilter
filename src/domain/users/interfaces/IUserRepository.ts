import { User } from '../models/User';

export interface IUserRepository {
    save(user: User): Promise<void>;
    search(query: string): Promise<User[]>;
    getAllUsers(): Promise<User[]>;
}