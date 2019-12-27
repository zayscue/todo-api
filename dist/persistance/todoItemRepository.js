"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("../domain/todoItem");
const uuid_1 = require("uuid");
class TodoItemRepository {
    get(id) {
        return new Promise((resolve, reject) => {
            try {
                resolve(TodoItemRepository.todoItemStorage.find(todoItem => {
                    return todoItem.id === id;
                }));
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(TodoItemRepository.todoItemStorage);
        });
    }
}
exports.TodoItemRepository = TodoItemRepository;
TodoItemRepository.todoItemStorage = [
    new todoItem_1.TodoItem(uuid_1.v4(), 'Do laundry', true),
    new todoItem_1.TodoItem(uuid_1.v4(), 'Walk dog', false),
    new todoItem_1.TodoItem(uuid_1.v4(), 'Clean apartment', false)
];
//# sourceMappingURL=todoItemRepository.js.map