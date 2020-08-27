import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn, OneToOne, OneToMany } from "typeorm";
import Bill from "./Bill";
import Product from "../Product/Product";

@Entity()
export class Bill_detail {
    @PrimaryColumn()
    public serial: number;

    @ManyToOne(() => Bill, (bill) => bill.bill_detail)
    public bill: Bill;

    @ManyToOne(()=>Product)
    public product : Product;

    @Column()
    public amount: number;

    @Column()
    public price: number;
}

export default Bill_detail;