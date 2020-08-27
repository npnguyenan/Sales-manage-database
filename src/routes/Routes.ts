// import { Request, Response } from "express";
// // import { Controller } from "../controller/controller";
// import { AccountController } from "../controller/Account/account.controller"
// import { BillController } from "../controller/Bill/bill.controller"
// import { CompanyController } from "../controller/Company/company.controller";
// import { EmployeeController } from "../controller/Company/employee.controller";
// class Routes {
//     // private controller: Controller; 
//     // constructor() {
//     //     this.controller = new Controller();

//     // } 
//     private accountController: AccountController;
//     private billController: BillController;
//     private companyController: CompanyController;
//     private employeeController: EmployeeController;
//     constructor() {
//         this.accountController = new AccountController();
//         this.billController = new BillController();
//         this.companyController = new CompanyController();
//         this.employeeController = new EmployeeController();
//     }
//     public routes(app): void {
//         app.route('/')
//             .get((request: Request, response: Response) => {
//                 response.status(200)
//                     .send({
//                         message: "GET request successfully."
//                     });
//             });
//         app.route('/account')
//             .get(this.accountController.getAllAccount);
//         app.route('/bill')
//             .get(this.billController.getAllBill);
//         app.route('/bill/:billID')
//             .get(this.billController.getBillDetailByBillID)
//         app.route('/company')
//             .get(this.companyController.getAllCompany)
//             .post(this.companyController.addCompany);
//         app.route('/company/:companyID/get')
//             .get(this.companyController.getCompanyByID);
//         app.route('/company/:companyID/add')
//             .post(this.employeeController.addEmployee);
//         app.route('/company/:companyID/delete')
//             .delete(this.companyController.deleteCompany);
//         app.route('/company/:companyID/employee')
//             .get(this.employeeController.getEmployees);
//         app.route('/company/:companyID/employee/:employeeID')
//             .get(this.employeeController.getEmployeeByID);


//     }
// } export { Routes };