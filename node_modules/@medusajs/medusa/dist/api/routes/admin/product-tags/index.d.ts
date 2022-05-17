import { ProductTag } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare const allowedAdminProductTagsFields: string[];
export declare const defaultAdminProductTagsFields: string[];
export declare const defaultAdminProductTagsRelations: never[];
export declare type AdminProductTagsListRes = PaginatedResponse & {
    product_tags: ProductTag[];
};
export declare type AdminProductTagsRes = {
    product_tag: ProductTag;
};
export * from "./list-product-tags";
