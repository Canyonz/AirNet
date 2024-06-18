import { $rtkApi } from "@/shared/api/rtkApi";
import { TodoI, TodoListI } from "../types/todoType";

interface AddTodoByIdProps {
	id: string;
	todoList: TodoListI[];
}

const todoApi = $rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchTodoById: build.query<TodoI, string>({
			query: (id) => ({
				url: `/todo/${id}`,
				method: "GET",
			}),
		}),

		editableTodoById: build.mutation<TodoI, AddTodoByIdProps>({
			query: ({ id, todoList }) => ({
				url: `/todo/${id}`,
				method: "PUT",
				body: { todoList },
			}),
		}),
	}),
});

export const fetchTodoByIdQuery = todoApi.endpoints.fetchTodoById.initiate;
export const editableTodoByIdQuery = todoApi.endpoints.editableTodoById.initiate;
