import { Request, Response } from 'express';
import { connection } from "../../connection/Connection";
import Employee from '../../entity/Company/Employee';
import { Company } from '../../entity/Company/Company';

class EmployeeController {
    constructor() { }
    public getEmployees(req: Request, res: Response) {
        connection
            .then(async connection => {
                const company: Company = await connection.manager.findOne(Company, req.params.companyID);
                res.json(company.employee);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public addEmployee(req: Request, res: Response) {
        connection
            .then(async connection => {
                let company = await connection.manager.findOne(Company, req.params.companyID);
                let requestCompany = req.body;
                let requestEmployee = requestCompany.employee;
                // let company : Company;
                // let superHero = await connection.manager.findOne(SuperHero, req.params.superHeroId); 
                company.id = req.params.companyID;
                company.employee = [];
                requestEmployee.forEach( requestEmployee => {
                    let employee: Employee = new Employee();
                    employee.company = company;
                    employee.id = requestEmployee.id;
                    employee.name = requestEmployee.name;
                    employee.gender = requestEmployee.gender;
                    employee.id_card = requestEmployee.id_card;
                    employee.email = requestEmployee.email;
                    employee.birth_date = requestEmployee.birth_date;
                    employee.position = requestEmployee.position;
                    employee.address = requestEmployee.address;
                    employee.phone_num = requestEmployee.phone_num;
                    employee.salary = requestEmployee.salary;
                    employee.id_manipulation = requestEmployee.id_manipulation;
                    employee.update_date = requestEmployee.update_date;
                    company.employee.push(employee);
                });
                await connection.manager.save(company.employee);
                res.json({ message: "Successfully Saved." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public getEmployeeByID(req: Request, res: Response) {
        connection
            .then(async connection => {
                const employee: Employee = await connection.manager.findOne(Employee, req.params.employeeID);
                res.json(employee);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public deleteEmployee(req: Request, res: Response) {
        connection
            .then(async connection => {
                await connection.manager.findOne(Employee, req.params.employeeID);
                await connection.manager.delete(Employee, { id: req.params.employeeID });
                res.json({ message: "Successfully Removed." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public updateEmployee(req: Request, res: Response) {
        connection
            .then(async connection => {
                let employee = await connection.manager.findOne(Employee, req.params.employeeID);
                let requestEmployee = req.body;
                employee.name = requestEmployee.name;
                employee.gender = requestEmployee.gender;
                employee.id_card = requestEmployee.id_card;
                employee.email = requestEmployee.email;
                employee.birth_date = requestEmployee.birth_date;
                employee.position = requestEmployee.position;
                employee.address = requestEmployee.address;
                employee.phone_num = requestEmployee.phone_num;
                employee.salary = requestEmployee.salary;
                employee.id_manipulation = requestEmployee.id_manipulation;
                employee.update_date = requestEmployee.update_date;
                await connection.manager.save(employee);
                res.json({ message: "Successfully Updated." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
} export { EmployeeController }