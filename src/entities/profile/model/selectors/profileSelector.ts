import { RootStateType } from "@/app/providers/store/config/configStore";

export const getAllProfiles = (state: RootStateType) => state.profile.profiles;
export const getProfileById = (id: string, state: RootStateType) => state.profile.profileById?.[id];
export const getIsLoadingProfile = (state: RootStateType) => state.profile.loading;
