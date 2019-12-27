"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItemRepository_1 = require("./persistance/todoItemRepository");
const todoItems = new todoItemRepository_1.TodoItemRepository();
setInterval(() => todoItems.getAll().then(results => console.log(JSON.stringify(results))), 1000);
//# sourceMappingURL=server.js.map