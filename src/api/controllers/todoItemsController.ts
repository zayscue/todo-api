import * as express from 'express';
import { inject } from 'inversify';
import {
    controller,
    httpGet,
    httpPost,
    response,
    request
} from 'inversify-express-utils';
import { TodoItem } from '../../domain/todoItem';
import { RequestMediator } from '../../mediator';
import { GetTodoItemsQuery } from '../../application/todoItems/queries/getTodoItems/getTodoItemsQuery';
import { AddTodoItemCommand } from '../../application/todoItems/commands/addTodoItem/addTodoItemCommand';

@controller('/api/v1/todoItems')
export class TodoItemsController {
    private readonly _mediator: RequestMediator;

    public constructor(@inject('Mediator') mediator: RequestMediator) {
        this._mediator = mediator;
    }

    @httpGet('/')
    public get(@response() res: express.Response) {
        return this._mediator.send(new GetTodoItemsQuery()).then(response => {
            return res.status(200).json(response);
        });
    }

    @httpPost('/')
    public insert(@request() req: express.Request, @response() res: express.Response) {
        return this._mediator.send(new AddTodoItemCommand(req.body.description)).then(response => {
            return res.status(201).json(response);
        });
    } 
}