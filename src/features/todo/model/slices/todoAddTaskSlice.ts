import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoAddTaskSchema } from "../types/todoAddTaskType";

const initialState: TodoAddTaskSchema = {
	value: "",
};

const todoAddTaskSlice = createSlice({
	name: "todoAddTask",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { actions: todoAddTaskActions, reducer: todoAddTaskReducer } = todoAddTaskSlice;
