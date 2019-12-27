import 'reflect-metadata';
import { Container } from 'inversify';
import { RepositoryBase } from './application/common/interfaces/repositoryBase';
import { TodoItem } from './domain/todoItem';
import { TodoItemRepository } from './persistance/todoItemRepository';
import { RequestHandler } from './request';
import { AddTodoItemCommand, AddTodoItemCommandHandler } from './application/todoItems/commands/addTodoItem/addTodoItemCommand';
import { GetTodoItemsQuery, GetTodoItemsQueryHandler} from './application/todoItems/queries/getTodoItems/getTodoItemsQuery';


const container = new Container();

// TodoItems
container.bind<RepositoryBase<TodoItem, string>>('TodoItemRepository').to(TodoItemRepository).inSingletonScope();

// Handlers
container.bind<RequestHandler<AddTodoItemCommand, TodoItem>>('RequestHandler').to(AddTodoItemCommandHandler).inRequestScope();
container.bind<RequestHandler<GetTodoItemsQuery, TodoItem[]>>('RequestHandler').to(GetTodoItemsQueryHandler).inRequestScope();


export {
    container
};