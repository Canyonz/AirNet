import { profileReducer } from "@/entities/profile/model/slices/profileSlice";
import { todoReducer } from "@/entities/todo/model/slices/todoSlice";
import { todoAddTaskReducer } from "@/features/todo/model/slices/todoAddTaskSlice";
import { $rtkApi } from "@/shared/api/rtkApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
	profile: profileReducer,
	todo: todoReducer,
	todoAddTask: todoAddTaskReducer,
	[$rtkApi.reducerPath]: $rtkApi.reducer,
});

export const configStore = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat($rtkApi.middleware),
});

export type RootStateType = ReturnType<typeof configStore.getState>;
export type AppDispatchType = typeof configStore.dispatch;

export interface ThunkConfig<T> {
	rejectValue: T;
	state: RootStateType;
}
