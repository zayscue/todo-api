import { injectable, inject } from 'inversify';
import { Request, RequestHandler } from '../../../../request';
import { TodoItemRepository } from '../../../../persistance/todoItemRepository';
import { TodoItem } from '../../../../domain/todoItem';

export class GetTodoItemsQuery implements Request<TodoItem[]> {

}

@injectable()
export class GetTodoItemsQueryHandler implements RequestHandler<GetTodoItemsQuery, TodoItem[]> {
    request: string = GetTodoItemsQuery.name;
    
    constructor(
        @inject('TodoItemRepository') private _todoItemRepo: TodoItemRepository
    ) { }
    
    handleRequest(request: GetTodoItemsQuery): Promise<TodoItem[]> {
        return this._todoItemRepo.getAll();
    }
}