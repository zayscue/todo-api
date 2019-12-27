import 'reflect-metadata';
import { Container, interfaces, ContainerModule } from 'inversify';
import { RepositoryBase } from './application/common/interfaces/repositoryBase';
import { TodoItem } from './domain/todoItem';
import { TodoItemRepository } from './persistance/todoItemRepository';
import { Request, RequestHandler } from './request';
import { AddTodoItemCommand, AddTodoItemCommandHandler } from './application/todoItems/commands/addTodoItem/addTodoItemCommand';
import { UpdateTodoItemCommand, UpdateTodoItemCommandHandler } from './application/todoItems/commands/updateTodoItem/updateTodoItemCommand';
import { GetTodoItemsQuery, GetTodoItemsQueryHandler} from './application/todoItems/queries/getTodoItems/getTodoItemsQuery';
import { RequestMediator } from './mediator';

const container = new Container();

// TodoItems
container.bind<RepositoryBase<TodoItem, string>>('TodoItemRepository').to(TodoItemRepository).inSingletonScope();

// Handlers
container.bind<RequestHandler<AddTodoItemCommand, TodoItem>>('RequestHandler').to(AddTodoItemCommandHandler).inRequestScope();
container.bind<RequestHandler<UpdateTodoItemCommand, void>>('RequestHandler').to(UpdateTodoItemCommandHandler).inRequestScope();
container.bind<RequestHandler<GetTodoItemsQuery, TodoItem[]>>('RequestHandler').to(GetTodoItemsQueryHandler).inRequestScope();

// Mediator
container.bind<RequestMediator>('Mediator').toDynamicValue((context: interfaces.Context) => {
    const handlers = context.container.getAll<RequestHandler<Request<any>, any>>('RequestHandler');
    const mediator = new RequestMediator(handlers);
    return mediator;
}).inSingletonScope();

// Controllers
const controllerBindings = new ContainerModule((bind) => {
    require('./api/controllers/todoItemsController');
});
container.load(controllerBindings);

export {
    container
};