import * as express from 'express';
import { CompanyRoutes } from "./routes/Company.route";
import { EmployeeRoutes } from "./routes/Employee.route";
import { BillRoutes } from "./routes/Bill.route";
import bodyParser = require("body-parser"); 
class App {
    public app: express.Application;
    public routeCmp: CompanyRoutes; 
    public routeEmp: EmployeeRoutes;
    public routeBill : BillRoutes;
    constructor() {// initializing express in this application
        this.app = express();// support application/json type post data
        this.app.use(bodyParser.json());//support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));// for routing the http request to controller
        this.routeCmp = new CompanyRoutes();
        this.routeEmp = new EmployeeRoutes();
        this.routeBill = new BillRoutes();;
        this.routeCmp.routes(this.app);
        this.routeEmp.routes(this.app);
        this.routeBill.routes(this.app);
    }
    
}
export default new App().app;