export interface Profile {
	id: string;
	name: string;
	image: string;
}

export interface ProfileSchema {
	loading: boolean;
	error?: string;
	profiles?: Profile[];
	profileById?: Record<string, Profile>;
}
