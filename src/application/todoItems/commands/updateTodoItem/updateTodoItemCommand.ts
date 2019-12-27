import { injectable, inject } from 'inversify';
import { Request, RequestHandler } from '../../../../request';
import { TodoItemRepository } from '../../../../persistance/todoItemRepository';

export class UpdateTodoItemCommand implements Request<void> {
    
    id: string;
    description: string;
    isCompleted: boolean;

    constructor(id: string, description: string, isCompleted: boolean) {
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
    }

};


@injectable()
export class UpdateTodoItemCommandHandler implements RequestHandler<UpdateTodoItemCommand, void> {
    
    request: string = UpdateTodoItemCommand.name;    
    
    constructor(
        @inject('TodoItemRepository') private _todoItemRepo: TodoItemRepository
    ) { }
    
    handleRequest(request: UpdateTodoItemCommand): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            try {
                this._todoItemRepo.get(request.id).then(todoItem => {
                    if (todoItem === undefined)
                        throw new Error(`TodoItem not found with id: ${request.id}`);
                    todoItem.description = request.description;
                    todoItem.isCompleted = request.isCompleted;
                    resolve(this._todoItemRepo.update(todoItem));
                });
            } catch (err) {
                reject(err);
            }
        });
    }
};