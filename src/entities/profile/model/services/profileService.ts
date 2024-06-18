import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../types/profileType";
import { ThunkConfig } from "@/app/providers/store/config/configStore";
import { fetchAllProfilesQuery } from "../api/profileApi";

export const fetchAllProfiles = createAsyncThunk<Profile[], void, ThunkConfig<string>>(
	"profile/fetchAllProfiles",
	async (_, thunkApi) => {
		const { dispatch, rejectWithValue } = thunkApi;

		try {
			const response = await dispatch(fetchAllProfilesQuery()).unwrap();

			return response;
		} catch (error) {
			console.log(error);
			return rejectWithValue("error");
		}
	}
);
