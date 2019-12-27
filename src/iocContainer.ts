import 'reflect-metadata';
import { Container } from 'inversify';
import { RepositoryBase } from './application/common/interfaces/repositoryBase';
import { TodoItem } from './domain/todoItem';
import { TodoItemRepository } from './persistance/todoItemRepository';

const container = new Container();

// TodoItems
container.bind<RepositoryBase<TodoItem, string>>('TodoItemRepository').to(TodoItemRepository).inSingletonScope();

export {
    container
};