import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn, OneToOne } from "typeorm";
import Receipt from "./Receipt";
import Product from "../Product/Product";
@Entity()
export class Receipt_detail {
    @PrimaryColumn()
    public serial: number;

    @ManyToOne(() => Receipt, (receipt) => receipt.receipt_detail)
    public receipt : Receipt;

    @ManyToOne(()=> Product)
    public product : Product;

    @Column()
    public amount: number;

    @Column()
    public retail_price: number;

    @Column()
    public unit: string;

    @Column()
    public license_amount : number;

    @Column()
    public real_amount : number;

    @Column()
    public id_manipulation : string;

    @Column()
    public update_date : Date;
}

export default Receipt_detail;