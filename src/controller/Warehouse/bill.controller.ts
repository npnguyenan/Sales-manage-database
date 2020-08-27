import { Request, Response } from 'express';
import { connection } from "../../connection/Connection";
import Bill from '../../entity/Bill/Bill';
import Bill_detail from '../../entity/Bill/Bill_detail'; 
class BillController {
    constructor() { }
    public getAllAccount(req: Request, res: Response) {
        connection
            .then(async connection => {
                const billls: Bill[] = await connection.manager.find(Bill);
                res.json(billls);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } 
} export { BillController }