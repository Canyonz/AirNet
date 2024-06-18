import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoI, TodoTaskI } from "../types/todoType";
import { ThunkConfig } from "@/app/providers/store/config/configStore";
import { editableTodoByIdQuery, fetchTodoByIdQuery } from "../api/todoApi";
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

interface AddTodoTaskProps {
	todoListId: string | undefined;
	selectedDate: string;
	task: TodoTaskI;
}

export const addTodoTask = createAsyncThunk<TodoI, AddTodoTaskProps, ThunkConfig<string>>(
	"todo/addTodoTask",
	async ({ todoListId, selectedDate, task }, thunkApi) => {
		const { dispatch, rejectWithValue, getState } = thunkApi;

		const todo = getTodo(getState());

		if (!todo?.id) {
			return rejectWithValue("error");
		}

		const newTodoList = todoListId
			? todo.todoList.map((todo) => {
					if (todo.id !== todoListId) return todo;

					return {
						...todo,
						tasks: [...todo.tasks, task],
					};
			  })
			: [
					...todo.todoList,
					{
						id: (Date.now() + 1).toString(),
						date: selectedDate,
						tasks: [task],
					},
			  ];

		try {
			const response = await dispatch(editableTodoByIdQuery({ id: todo.id, todoList: newTodoList })).unwrap();

			return response;
		} catch (error) {
			console.log(error);
			return rejectWithValue("error");
		}
	}
);

interface completeTodoTaskByIdProps {
	todoListId: string;
	taskId: string;
	completed: boolean;
}

export const completeTodoTaskById = createAsyncThunk<TodoI, completeTodoTaskByIdProps, ThunkConfig<string>>(
	"todo/completeTodoTaskById",
	async ({ todoListId, taskId, completed }, thunkApi) => {
		const { dispatch, rejectWithValue, getState } = thunkApi;

		const todo = getTodo(getState());

		if (!todo?.id) {
			return rejectWithValue("error");
		}

		const newTodoList = todo.todoList.map((todo) => {
			if (todo.id !== todoListId) return todo;

			return {
				...todo,
				tasks: todo.tasks.map((task) => {
					if (task.id !== taskId) return task;
					return { ...task, completed: completed };
				}),
			};
		});

		try {
			const response = await dispatch(editableTodoByIdQuery({ id: todo.id, todoList: newTodoList })).unwrap();

			return response;
		} catch (error) {
			console.log(error);
			return rejectWithValue("error");
		}
	}
);

interface DeleteTodoByIdProps {
	todoListId: string;
	taskId: string;
}

export const deleteTodoById = createAsyncThunk<TodoI, DeleteTodoByIdProps, ThunkConfig<string>>(
	"todo/deleteTodoById",
	async ({ todoListId, taskId }, thunkApi) => {
		const { dispatch, rejectWithValue, getState } = thunkApi;

		const todo = getTodo(getState());

		if (!todo?.id) {
			return rejectWithValue("error");
		}

		const newTodoList = todo.todoList.map((todo) => {
			if (todo.id !== todoListId) return todo;

			return {
				...todo,
				tasks: todo.tasks.filter((task) => task.id !== taskId),
			};
		});

		const filteredNewTodoList = newTodoList.filter((todo) => todo.tasks.length > 0);

		try {
			const response = await dispatch(editableTodoByIdQuery({ id: todo.id, todoList: filteredNewTodoList })).unwrap();

			return response;
		} catch (error) {
			console.log(error);
			return rejectWithValue("error");
		}
	}
);
