import { Request, Response } from "express";

import { AccountController } from "../controller/Account/account.controller"

class AccountRoutes {
   
    private accountController: AccountController;

    constructor() {
        this.accountController = new AccountController();
    }
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
        app.route('/account')
            .get(this.accountController.getAllAccount);
    }
} export { AccountRoutes };