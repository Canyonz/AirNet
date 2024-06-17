import { AppDispatchType } from "@/app/providers/store/config/configStore";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatchType>();
