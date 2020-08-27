import { Request, Response } from 'express';
import { connection } from "../../connection/Connection";
import Bill from '../../entity/Bill/Bill';
import Employee from '../../entity/Company/Employee';
import Company from '../../entity/Company/Company';
class BillController {
    constructor() { }
    // public getBillOfEmployee(req: Request, res: Response) {
    //     connection
    //         .then(async connection => {
    //             const company: Company = await connection.manager.findOne(Company, req.params.companyID);
    //             const employee: Employee = await connection.manager.findOne(Employee, req.params.employeeID);
    //             // res.json({company,employee});
    //             res.json({company});
    //         })
    //         .catch(error => {
    //             console.error("Error ", error);
    //             res.json(error);
    //         });
    // }
    public getBillOfEmployee(req: Request, res: Response) {
        connection
            .then(async connection => {
                const company: Company = await connection.manager.findOne(Company, req.params.companyID);
                res.json({
                    id : company.employee[0].id,
                    name: company.employee[0].name,
                    bill : company.employee[0].bill
                });
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public getAllBillOfCompany(req: Request, res: Response) {
        connection
            .then(async connection => {
                const company: Company = await connection.manager.findOne(Company, req.params.companyID);
                res.json({ 
                    emp_id : company.employee[0].id,
                    emp_name : company.employee[0].name,
                    bill : company.employee[0].bill});
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public getAllBill(req: Request, res: Response) {
        connection
            .then(async connection => {
                const bill: Bill[] = await connection.manager.find(Bill);
                res.json(bill);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    // public getAllBillOfCompany(req: Request, res: Response) {
    //     connection
    //         .then(async connection => {
    //             const company: Company = await connection.manager.findOne(Company,req.params.companyID,{select: ["id", "name"]} );
    //             // const employee: Employee = await connection.manager.findOne(Employee,req.params.employeeID,{select: ["id", "name","bill"]} );
    //             res.json(company);
    //         })
    //         .catch(error => {
    //             console.error("Error ", error);
    //             res.json(error);
    //         });
    // }
    // public getEmployeeByID(req: Request, res: Response) {
    //     connection
    //         .then(async connection => {
    //             const employee: Employee = await connection.manager.findOne(Employee, req.params.employeeID);
    //             res.json(employee);
    //         })
    //         .catch(error => {
    //             console.error("Error ", error);
    //             res.json(error);
    //         });
    // } 
    public getBillDetail(req: Request, res: Response) {
        connection
            .then(async connection => {
                const bill: Bill = await connection.manager.findOne(Bill, req.params.billID);
                res.json(bill.bill_detail);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } 
} export { BillController }