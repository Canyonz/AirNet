import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoI, TodoSchema } from "../types/todoType";
import { fetchTodoById } from "../services/todoService";

const initialState: TodoSchema = {
	loading: false,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTodoById.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchTodoById.fulfilled, (state, action: PayloadAction<TodoI>) => {
			state.loading = false;
			state.todo = action.payload;
		});
		builder.addCase(fetchTodoById.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export const { actions: todoActions, reducer: todoReducer } = todoSlice;
