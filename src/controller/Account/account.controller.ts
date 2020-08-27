import { Request, Response } from 'express';
import { connection } from "../../connection/Connection";
import Account from '../../entity/Account/Account';

class AccountController {
    constructor() { }
    public getAllAccount(req: Request, res: Response) {
        connection
            .then(async connection => {
                const accounts: Account[] = await connection.manager.find(Account);
                res.json(accounts);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } 
} export { AccountController }