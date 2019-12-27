import { TodoItem } from '../domain/todoItem';
import { v4 as uuid } from 'uuid';

export const todoItems: TodoItem[] = [
    new TodoItem(uuid(), 'Do laundry', true), 
    new TodoItem(uuid(), 'Walk dog', false), 
    new TodoItem(uuid(), 'Clean apartment', false)
];