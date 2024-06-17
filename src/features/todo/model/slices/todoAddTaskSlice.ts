import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoAddTaskI } from "../types/todoAddTaskType";

const initialState: TodoAddTaskI = {
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
