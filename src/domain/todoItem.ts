export class TodoItem {

    id: string;

    description: string;

    isCompleted: boolean;

    constructor(id?: string, description?: string, isCompleted?: boolean) {
        this.id = id || '';
        this.description = description || '';
        this.isCompleted = isCompleted || false;
    }
}