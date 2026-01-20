import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<import("./todo.entity").Todo[]>;
    create(createTodoDto: CreateTodoDto): Promise<import("./todo.entity").Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<import("./todo.entity").Todo>;
    remove(id: string): Promise<void>;
}
