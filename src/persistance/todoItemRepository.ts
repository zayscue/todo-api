import { injectable } from 'inversify';
import { RepositoryBase } from '../application/common/interfaces/repositoryBase';
import { TodoItem } from '../domain/todoItem';
import { todoItems } from './todoItems';

@injectable()
export class TodoItemRepository implements RepositoryBase<TodoItem, string> {
    
    private static todoItemStorage: TodoItem[] = todoItems;
    
    add(entity: TodoItem): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            TodoItemRepository.todoItemStorage.push(entity);
            resolve();
        });
    }
    update(entity: TodoItem): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = TodoItemRepository.todoItemStorage.findIndex(todoItem => {
                return todoItem.id === entity.id;
            });
            if (index >= 0) {
                TodoItemRepository.todoItemStorage.splice(index);
                TodoItemRepository.todoItemStorage.push(entity);
            }
            resolve();
        });
    }
    
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