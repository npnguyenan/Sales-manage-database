import { Column, Entity, PrimaryColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import Employee from "../Company/Employee";
import Company from "../Company/Company";
import Receipt_detail from "./Receipt_detail";

@Entity()
export class Receipt {

    @PrimaryColumn()
    public id: string;

    @Column()
    public name: string;

    @Column()
    public import_date: Date;

    @Column()
    public total_price: number;

    @ManyToOne(() => Employee)
    public employee: Employee;

    @ManyToOne(() => Company)
    public company: Company;

    @OneToMany(
        () => Receipt_detail, receipt_detail => receipt_detail.receipt,
        { eager: true, cascade: true }
    )
    receipt_detail: Receipt_detail[];

    @Column()
    public id_manipulation: string;

    @Column()
    public update_date: Date;
}

export default Receipt;