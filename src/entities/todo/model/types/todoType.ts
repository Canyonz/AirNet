export interface TodoTaskI {
	id?: string;
	value: string;
	completed: boolean;
}

export interface TodoListI {
	id?: string;
	date: string;
	tasks: TodoTaskI[];
}

export interface TodoI {
	id?: string;
	todoList: TodoListI[];
}

export interface TodoSchema {
	loading: boolean;
	todo?: TodoI;
	error?: string;
}
