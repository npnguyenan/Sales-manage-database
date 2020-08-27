import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn, ManyToMany, OneToOne } from "typeorm";
import Company from "../Company/Company";

@Entity()
export class Account {

    @PrimaryColumn()
    public uid: string;

    @Column()
    public pass: string;

    @Column()
    public level_user : string;

    @ManyToOne(()=> Company)
    public company : Company;
    
    @Column()
    public id_manipulation : string;

    @Column()
    public update_date : Date;
}

export default Account;