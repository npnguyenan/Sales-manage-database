import { Column, Entity, OneToMany, PrimaryColumn, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import Account from "../Account/Account";
import Employee from "./Employee";
import Receipt from "../Warehouse/Receipt";

@Entity()
export class Company {

    @PrimaryColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public address: string;

    @Column()
    public tax_num: string;

    @Column()
    public phone_num: string;

    // @OneToMany(() => Account, (account) => account.company)

    @OneToMany(
        () => Employee, (employee) => employee.company,
        { eager: true, cascade: true }
    )
    public employee : Employee[];

    // @OneToMany(() => Receipt, (receipt) => receipt.company)

    @Column()
    public id_manipulation: string;

    @Column()
    public update_date: Date;
}

export default Company;