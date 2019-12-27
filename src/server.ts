import { TodoItemRepository } from './persistance/todoItemRepository';

const todoItems = new TodoItemRepository();

setInterval(() => todoItems.getAll().then(results => console.log(JSON.stringify(results))) , 1000);