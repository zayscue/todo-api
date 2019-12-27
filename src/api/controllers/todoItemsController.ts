import * as express from 'express';
import { inject } from 'inversify';
import {
    controller,
    httpGet,
    httpPost,
    response,
    requestParam,
    requestBody
} from 'inversify-express-utils';
import { RequestMediator } from '../../mediator';
import { GetTodoItemsQuery } from '../../application/todoItems/queries/getTodoItems/getTodoItemsQuery';

@controller('/api/v1/todoItems')
export class TodoItemsController {
    private readonly _mediator: RequestMediator;

    public constructor(@inject('Mediator') mediator: RequestMediator) {
        this._mediator = mediator;
    }

    @httpGet('/')
    public get(@response() res: express.Response) {
        this._mediator.send(new GetTodoItemsQuery()).then(response => {
            res.status(200).json(response);
        });
    }
}