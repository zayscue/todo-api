import { container } from './iocContainer';
import { RequestMediator } from './mediator';
import { AddTodoItemCommand } from './application/todoItems/commands/addTodoItem/addTodoItemCommand';
import { GetTodoItemsQuery } from './application/todoItems/queries/getTodoItems/getTodoItemsQuery';
import { Request, RequestHandler } from './request';

const handlers = container.getAll<RequestHandler<Request<any>, any>>('RequestHandler');
const mediator = new RequestMediator(handlers);
const command = new AddTodoItemCommand('Do my homework');
const query = new GetTodoItemsQuery();

mediator.send(command).then(todoItem => {
    console.log(todoItem.id);
});


setInterval(() => mediator.send(query).then(results => console.log(JSON.stringify(results))) , 1000);