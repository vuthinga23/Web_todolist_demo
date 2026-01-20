import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo | null>;
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo | null>;
    remove(id: number): Promise<void>;
}
