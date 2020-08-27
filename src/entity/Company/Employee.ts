import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn, ManyToMany, JoinTable, OneToOne, OneToMany } from "typeorm";
import Company from "./Company";
import Bill from "../Bill/Bill";
import Receipt from "../Warehouse/Receipt";

@Entity()
export class Employee {

    @PrimaryColumn()
    public id: string;

    @Column()
    public name: string;

    @Column()
    public gender: string;

    @Column()
    public id_card: string;

    @Column()
    public email: string;

    @Column()
    public birth_date: Date;

    @Column()
    public position: string;

    @Column()
    public address: string;

    @Column()
    public phone_num: string;

    @Column()
    public salary: number;

    @ManyToOne(() => Company, (company) => company)
    public company: Company;
    // @ManyToOne(() => Company)
    // public company: Company;

    @OneToMany(
        () => Bill, (bill) => bill.employee,
        { eager: true, cascade: true }
    )
    public bill: Bill[];

    @Column()
    public id_manipulation: string;

    @Column()
    public update_date: Date;
}

export default Employee;