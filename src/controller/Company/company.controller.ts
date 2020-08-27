import { Request, Response } from 'express';
import { connection } from "../../connection/Connection";
import Company from '../../entity/Company/Company';
import Employee from '../../entity/Company/Employee';
import { Entity, Any } from 'typeorm';

class CompanyController {
    constructor() { }
    public getAllCompany(req: Request, res: Response) {
        connection
            .then(async connection => { 
                const companies: Company[] = await connection.manager.find(Company,{select: ["id", "name","address","tax_num","phone_num"]});
                res.json({companies});
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public getCompanyByID(req: Request, res: Response) {
        connection
            .then(async connection => {
                const company: Company = await connection.manager.findOne(Company, req.params.companyID,{select: ["id", "name","address","tax_num","phone_num"]});
                res.json(company);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } public addCompany(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestCompany = req.body;
                // let request = requestCompany.employee; 
                let company = new Company();
                company.id = requestCompany.id;
                company.name = requestCompany.name;
                company.address = requestCompany.address;
                company.tax_num = requestCompany.tax_num;
                company.phone_num = requestCompany.phone_num;
                company.id_manipulation = requestCompany.id_manipulation;
                company.update_date = requestCompany.update_date;
                company.employee = [];
                await connection.manager.save(company);
                res.json({ message: "Successfully Saved." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public deleteCompany(req: Request, res: Response) {
        connection
            .then(async connection => {
                let company = await connection.manager.findOne(Company, req.params.companyID);
                for (let i = 0; i < company.employee.length; i++) {
                    async employee => {
                        await connection.manager.delete(Employee, { id: employee.id });
                    };
                }
                await connection.manager.delete(Company, { id: req.params.companyID });
                res.json({ message: "Successfully Removed." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public updateCompany(req: Request, res: Response) {
        connection
            .then(async connection => {
                let company = await connection.manager.findOne(Company, req.params.companyID);
                let requestCompany = req.body;
                company.name = requestCompany.name;
                company.address = requestCompany.address;
                company.tax_num = requestCompany.tax_num;
                company.phone_num = requestCompany.phone_num;
                company.id_manipulation = requestCompany.id_manipulation;
                company.update_date = requestCompany.update_date;
                await connection.manager.save(company);
                res.json({ message: "Successfully Updated." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
} export { CompanyController }