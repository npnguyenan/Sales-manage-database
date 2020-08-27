import { createConnection } from "typeorm";
import Account from "../entity/Account/Account";
import Company from "../entity/Company/Company"; 
import Employee from "../entity/Company/Employee";
import Bill from "../entity/Bill/Bill";
import Bill_detail from "../entity/Bill/Bill_detail";
import Product from "../entity/Product/Product";
import Product_type from "../entity/Product/Product_type";
import Receipt from "../entity/Warehouse/Receipt";
import Receipt_detail from "../entity/Warehouse/Receipt_detail";
import Customer from "../entity/Customer/Customer";

export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root", 
    database: "sales_manage",
    entities: [
        Account,
        Company,
        Employee,
        Bill,
        Bill_detail,
        Product,
        Product_type,
        Receipt,
        Receipt_detail,
        Customer

    ],
    synchronize: true,
    logging: false
});