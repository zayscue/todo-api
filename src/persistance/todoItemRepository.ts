import { RepositoryBase } from '../application/common/interfaces/repositoryBase';
import { TodoItem } from '../domain/todoItem';
import { v4 as uuid } from 'uuid';

export class TodoItemRepository implements RepositoryBase<TodoItem, string> {
    
    private static todoItemStorage: TodoItem[] = [
        new TodoItem(uuid(), 'Do laundry', true), 
        new TodoItem(uuid(), 'Walk dog', false), 
        new TodoItem(uuid(), 'Clean apartment', false)
    ];
    
    get(id: string): Promise<TodoItem | undefined> {
        return new Promise<TodoItem | undefined>((resolve, reject) => {
            try {
                resolve(TodoItemRepository.todoItemStorage.find(todoItem => {
                    return todoItem.id === id;
                }));
            } catch (err) {
                reject(err);
            }
        });
    }    
    
    getAll(): Promise<TodoItem[]> {
        return new Promise<TodoItem[]>((resolve, reject) => {
            resolve(TodoItemRepository.todoItemStorage);
        });
    }


}