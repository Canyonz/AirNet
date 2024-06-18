import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoI, TodoListI, TodoTaskI } from "../types/todoType";
import { ThunkConfig } from "@/app/providers/store/config/configStore";
import { addTaskTodoQuery, fetchTodoByIdQuery } from "../api/todoApi";
import { getTodo } from "../selectors/todoSelector";

export const fetchTodoById = createAsyncThunk<TodoI, string | undefined, ThunkConfig<string>>(
	"todo/fetchTodoById",
	async (id, thunkApi) => {
		const { dispatch, rejectWithValue } = thunkApi;

		if (!id) {
			return rejectWithValue("error");
		}

		try {
			const response = await dispatch(fetchTodoByIdQuery(id)).unwrap();

			return response;
		} catch (error) {
			console.log(error);
			return rejectWithValue("error");
		}
	}
);

interface AddTaskTodoProps {
	todoListId: string;
	task: TodoTaskI;
}

export const addTaskTodo = createAsyncThunk<TodoI, AddTaskTodoProps, ThunkConfig<string>>(
	"todo/fetchTodoById",
	async ({ todoListId, task }, thunkApi) => {
		const { dispatch, rejectWithValue, getState } = thunkApi;

		const todo = getTodo(getState());

		if (!todo?.id) {
			return rejectWithValue("error");
		}

		const newTodoList = todo.todoList.map((todo) => {
			if (todo.id === todoListId) {
				return {
					...todo,
					tasks: [...todo.tasks, task],
				};
			}
			return todo;
		});

		console.log(todo.todoList);
		try {
			const response = await dispatch(addTaskTodoQuery({ id: todo.id, todoList: newTodoList })).unwrap();
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			return rejectWithValue("error");
		}
	}
);
