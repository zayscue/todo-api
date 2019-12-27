export interface RepositoryBase<TEntity, KId> {
    get(id: KId): Promise<TEntity | undefined>;
    getAll(): Promise<TEntity[]>;
}