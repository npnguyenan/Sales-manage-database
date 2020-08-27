import { Request, Response } from "express";

import { BillController } from "../controller/Bill/bill.controller"

class BillRoutes {
  

    private billController: BillController;
  
    constructor() {
        this.billController = new BillController();  
    }
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
        app.route('/company/bill')
            .get(this.billController.getAllBill);
        app.route('/companies/:companyID/getallbill')
            .get(this.billController.getAllBillOfCompany);
        app.route('/companies/:companyID/getallbill')
            .get(this.billController.getBillOfEmployee);
        app.route('/bill/:billID')
            .get(this.billController.getBillDetail);
            // app.route('/company/:companyID/:employeeID')
            // .get(this.billController.getBillOfEmployee);
    
    }
} export { BillRoutes };