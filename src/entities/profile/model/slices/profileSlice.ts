import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profileType";
import { fetchAllProfiles } from "../services/profileService";

const initialState: ProfileSchema = {
	loading: false,
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllProfiles.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchAllProfiles.fulfilled, (state, action: PayloadAction<Profile[]>) => {
			state.loading = false;
			state.profiles = action.payload;
			state.profileById = action.payload.reduce((acc, profile) => {
				acc[profile.id] = profile;
				return acc;
			}, {} as Record<string, Profile>);
		});
		builder.addCase(fetchAllProfiles.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
