import { ProfileCardPreview, getAllProfiles } from "@/entities/profile";
import styles from "./MainPage.module.sass";
import { getRouteTODO } from "@/shared/consts/routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const MainPage = () => {
	const profiles = useSelector(getAllProfiles);
	const navigate = useNavigate();

	return (
		<main className={styles.mainPage}>
			{profiles?.map((profile) => (
				<ProfileCardPreview
					key={profile.id}
					text={profile.name}
					img={profile.image}
					onClick={() => navigate(getRouteTODO(profile.id))}
					className={styles.mainPageCard}
				/>
			))}
		</main>
	);
};
