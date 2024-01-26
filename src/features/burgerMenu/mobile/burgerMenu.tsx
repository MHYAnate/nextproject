import React from "react";
import { AutomativeTab } from "@/features/burgerMenu/mobile/tabAutomative";
import { MaintainaceTab } from "@/features/burgerMenu/mobile/tabMaintnce";
import styles from "./styles.module.css";
import { Services } from "@/features/database/data";
import { PersonalTab } from "./tabPersonal";
import { VacancyTab } from "./tabVacancy";
import { CommerceTab } from "./tabEcommerce";
import { ChatTab } from "./tabChat";
const BurgerMenu = () => {
	return (
		
     
			<div className={styles.burgerMenu}>
				<AutomativeTab Services={Services} />
				<MaintainaceTab Services={Services} />
				<PersonalTab Services={Services} />
				<VacancyTab/>
				<CommerceTab/>
				<ChatTab/>
			</div>
		
	);
};

export default BurgerMenu;