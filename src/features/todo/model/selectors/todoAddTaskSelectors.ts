import { RootStateType } from "@/app/providers/store/config/configStore";

export const getTodoAddTaskText = (state: RootStateType) => state.todoAddTask.value;
