import { injectable, inject } from 'inversify';
import { Request, RequestHandler } from '../../../../request';
import { TodoItemRepository } from '../../../../persistance/todoItemRepository';
import { TodoItem } from '../../../../domain/todoItem';
import { v4 as uuid } from 'uuid';

export class AddTodoItemCommand implements Request<TodoItem> {
    
    description: string;

    constructor(description: string) {
        this.description = description;
    }
};

@injectable()
export class AddTodoItemCommandHandler implements RequestHandler<AddTodoItemCommand, TodoItem> {
    
    request: string = AddTodoItemCommand.name;
    
    constructor(
        @inject('TodoItemRepository') private _todoItemRepo: TodoItemRepository
    ) { }

    
    handleRequest(request: AddTodoItemCommand): Promise<TodoItem> {
        const entity = new TodoItem(uuid(), request.description);
        return this._todoItemRepo.add(entity).then(() => {
            return entity;
        });
    }

};