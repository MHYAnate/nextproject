import React from "react";
import { AutomativeTab } from "@/features/hamBurgerMenu/mobile/tabAutomative";
import { MaintainaceTab } from "@/features/hamBurgerMenu/mobile/tabMaintnce";
import styles from "./styles.module.css";
import { Services } from "@/features/database/data";
import { PersonalTab } from "./tabPersonal";
const VendorCard = () => {
	return (
		
     
			<div className={styles.vendor}>
				<AutomativeTab Services={Services} />
				<MaintainaceTab Services={Services} />
				<PersonalTab Services={Services} />
			</div>
		
	);
};

export default VendorCard;
