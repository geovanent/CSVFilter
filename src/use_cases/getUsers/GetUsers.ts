import { IUserRepository } from '../../domain/users/interfaces/IUserRepository';
import { User } from '../../domain/users/models/User';

interface IRequest {
    query?: string;
}

interface IResponse {
    users: User[];
}

class GetUsers {
    private usersRepository: IUserRepository;

    constructor(usersRepository: IUserRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ query }: IRequest): Promise<IResponse> {
        if (query) {
            const filteredUsers = await this.usersRepository.search(query);
            return { users: filteredUsers };
        }

        const allUsers = await this.usersRepository.getAllUsers();
        return { users: allUsers };
    }
}

export { GetUsers };
