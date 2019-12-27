import { container } from './iocContainer';
import { TodoItem } from './domain/todoItem';
import { RepositoryBase } from './application/common/interfaces/repositoryBase';

const todoItems = container.get<RepositoryBase<TodoItem, string>>('TodoItemRepository');

setInterval(() => todoItems.getAll().then(results => console.log(JSON.stringify(results))) , 1000);