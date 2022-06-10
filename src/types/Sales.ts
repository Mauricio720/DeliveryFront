import { Address } from "./Address";

export type Sale={
    id:number;
    sub_total:number;
    total:number;
    observation:string;
    id_address:number;
    address:Address
}