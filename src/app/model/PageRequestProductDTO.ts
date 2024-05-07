import { product } from "./product";
export interface PageRequestProductDTO {
elements : product[];
 currentPage : number;
 totalPages : number;
 totalElements : number;
}