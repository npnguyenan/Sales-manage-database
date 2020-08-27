import { Request, Response } from "express";

import { EmployeeController } from "../controller/Company/employee.controller";
class EmployeeRoutes {
   
    private employeeController: EmployeeController;
    constructor() {
    
        this.employeeController = new EmployeeController();
    }
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
        app.route('/companies/:companyID/addEmp')
            .post(this.employeeController.addEmployee);
        app.route('/companies/:companyID/getAllEmp')
            .get(this.employeeController.getEmployees);
        app.route('/companies/:companyID/getEmp/:employeeID')
            .get(this.employeeController.getEmployeeByID);
        app.route('/companies/:companyID/deleteEmp/:employeeID')
            .delete(this.employeeController.deleteEmployee);
        app.route('/companies/:companyID/updateEmp/:employeeID')
            .put(this.employeeController.updateEmployee);
    }
} export { EmployeeRoutes };