export interface RepositoryBase<TEntity, KId> {
    get(id: KId): Promise<TEntity | undefined>;
    add(entity: TEntity) : Promise<void>;
    update(entity: TEntity) : Promise<void>;
    getAll(): Promise<TEntity[]>;
}