import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import Product from "./Product";

@Entity()
export class Product_type {

    @PrimaryColumn()
    public id: string;

    @Column()
    public name: string;

    @OneToMany(
        () => Product, product => product.product_type,
        { eager: true, cascade: true }
    )
    public product: Product[];

    @Column()
    public id_manipulation: string;

    @Column()
    public update_date: Date;
}

export default Product_type;