import { RootStateType } from "@/app/providers/store/config/configStore";

export const getTodo = (state: RootStateType) => state.todo.todo;
export const getTodoId = (state: RootStateType) => state.todo.todo?.id;
export const getTodoList = (state: RootStateType) => state.todo.todo?.todoList;
