import { FindManyOptions, OrderByCondition, Repository } from "typeorm";
import { ProductVariant } from "../models/product-variant";
export declare type FindWithRelationsOptions = FindManyOptions<ProductVariant> & {
    order?: OrderByCondition;
    withDeleted?: boolean;
};
export declare class ProductVariantRepository extends Repository<ProductVariant> {
    private mergeEntitiesWithRelations;
    private queryProductsVariants;
    private getGroupedRelations;
    private queryProductVariantsWithIds;
    findWithRelationsAndCount(relations?: string[], idsOrOptionsWithoutRelations?: FindWithRelationsOptions | string[], withDeleted?: boolean): Promise<[ProductVariant[], number]>;
    findWithRelations(relations?: string[], idsOrOptionsWithoutRelations?: FindWithRelationsOptions | string[], withDeleted?: boolean): Promise<ProductVariant[]>;
    findOneWithRelations(relations?: Array<keyof ProductVariant>, optionsWithoutRelations?: FindWithRelationsOptions): Promise<ProductVariant>;
}
