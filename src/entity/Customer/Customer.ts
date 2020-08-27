import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Bill from "../Bill/Bill";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public customer_name: string;

    @Column()
    public customer_phone: string;

    @Column()
    public customer_bank_account: number;

    @ManyToOne(()=> Bill, (bill)=>bill.customer)
    public bill : Bill;

    @Column()
    public id_manipulation : string;

    @Column()
    public update_date : Date;
}

export default Customer;