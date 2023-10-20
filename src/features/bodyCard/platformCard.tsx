import React from "react";
import styles from "./styles.module.css";
import { ChatTab } from "./tabChat";
import { CommerceTab } from "./tabEcommerce";
import { VacancyTab } from "./tabVacancy";

const PlatformCard = () => {
	return (
		

			<div className={styles.vendor}>
				<CommerceTab />
				<VacancyTab />
				<ChatTab />
			</div>
		
	);
};

export default PlatformCard;
