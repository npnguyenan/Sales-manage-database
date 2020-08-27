import { Request, Response } from "express";

import { CompanyController } from "../controller/Company/company.controller";

class CompanyRoutes {

    private companyController: CompanyController;
    constructor() {
        this.companyController = new CompanyController();

    }
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
        app.route('/companies')
            .get(this.companyController.getAllCompany);
        app.route('/companies/addCmp')
            .post(this.companyController.addCompany);
        app.route('/companies/getCmp/:companyID')
            .get(this.companyController.getCompanyByID);
        app.route('/companies/deleteCmp/:companyID')
            .delete(this.companyController.deleteCompany);
        app.route('/companies/updateCmp/:companyID')
            .put(this.companyController.updateCompany);
    }
} export { CompanyRoutes };