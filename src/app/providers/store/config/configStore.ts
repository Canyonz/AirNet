import { todoAddTaskReducer } from "@/features/todo/model/slices/todoAddTaskSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
	todoAddTask: todoAddTaskReducer,
});

export const configStore = configureStore({
	reducer: reducers,
});

export type RootStateType = ReturnType<typeof reducers>;
export type AppDispatchType = typeof configStore.dispatch;
