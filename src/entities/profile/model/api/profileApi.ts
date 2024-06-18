import { $rtkApi } from "@/shared/api/rtkApi";
import { Profile } from "../types/profileType";

const profileApi = $rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchAllProfiles: build.query<Profile, void>({
			query: () => ({
				url: "/profile",
				method: "GET",
			}),
		}),
	}),
});

export const fetchAllProfilesQuery = profileApi.endpoints.fetchAllProfiles.initiate;
