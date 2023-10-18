import { Request, Response } from 'express';
import { GetUsers } from './GetUsers';

export class GetUsersController {
    private getUsers: GetUsers;

    constructor(getUsers: GetUsers) {
        this.getUsers = getUsers;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const query = req.query.q as string; 
            const response = await this.getUsers.execute({ query }); 

            return res.status(200).json({ data: response.users }); 
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message }); 
            } else {
                return res.status(500).json({ message: 'An unknown error occurred' }); 
            }
        }
    }
}
