import { Column, Entity, PrimaryColumn, ManyToOne, OneToOne, OneToMany } from "typeorm";
import Company from "../Company/Company";
import Type from "./Product_type";
import Bill_detail from "../Bill/Bill_detail";
import Receipt_detail from "../Warehouse/Receipt_detail";
import Receipt from "../Warehouse/Receipt";
import Bill from "../Bill/Bill";

@Entity()
export class Product {

    @PrimaryColumn()
    public id: string;

    @Column()
    public name: string;

    @Column()
    public import_company: string;

    @Column()
    public purchase_price: number;

    @Column()
    public sale_price: number;

    @Column()
    public amount: number;

    @ManyToOne(() => Type, (product_type) => product_type.product)
    public product_type: Type;

    @OneToMany(()=>Bill_detail, (bill_detail)=>bill_detail.product)

    @OneToMany(()=>Receipt_detail, (receipt_detail)=>receipt_detail.product)

    @Column()
    public id_manipulation: string;

    @Column()
    public update_date: Date;
}

export default Product;