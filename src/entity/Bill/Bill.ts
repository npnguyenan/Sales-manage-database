import { Column, Entity, ManyToOne, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import Employee from "../Company/Employee";
import Bill_detail from "./Bill_detail";
import Customer from "../Customer/Customer";

@Entity()
export class Bill {

    @PrimaryColumn()
    public id: string;

    @Column()
    public initiated_date: Date;

    @Column()
    public payment_type: string;

    @Column()
    public total_price: number;

    @ManyToOne(() => Employee, (employee) => employee.bill)
    public employee: Employee;

    @OneToMany(
        () => Bill_detail, (bill_detail) => bill_detail.bill,
        { eager: true, cascade: true }
    )
    public bill_detail: Bill_detail[];

    @OneToMany(
        () => Customer, (customer) => customer.bill,
        { eager: true, cascade: true }
    )
    public customer: Customer[];

}

export default Bill;