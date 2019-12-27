import { container } from './iocContainer';
import { RequestMediator } from './mediator';
import { AddTodoItemCommand } from './application/todoItems/commands/addTodoItem/addTodoItemCommand';
import { UpdateTodoItemCommand } from './application/todoItems/commands/updateTodoItem/updateTodoItemCommand';
import { GetTodoItemsQuery } from './application/todoItems/queries/getTodoItems/getTodoItemsQuery';
import { Request, RequestHandler } from './request';
import { TodoItem } from './domain/todoItem';

const handlers = container.getAll<RequestHandler<Request<any>, any>>('RequestHandler');
const mediator = new RequestMediator(handlers);
const addCommand = new AddTodoItemCommand('Do my homework');
const query = new GetTodoItemsQuery();

mediator.send(addCommand).then(response => {
    printTodoItems();
    const todoItem = response as TodoItem;
    const updateCommand = new UpdateTodoItemCommand(todoItem.id, todoItem.description, true);
    mediator.send(updateCommand).then(() => printTodoItems());
});

const printTodoItems: Function = () => {
    mediator.send(query).then(response => console.log(JSON.stringify(response)));
};