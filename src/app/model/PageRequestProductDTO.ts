import { Product } from "./Product";

export interface PageRequestProductDTO {
    elements : Product[];
    currentPage : number;
    totalPages : number;
    totalElements : number;
}