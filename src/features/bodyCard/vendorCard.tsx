import React from "react";
import { AutomativeTab } from "@/features/bodyCard/tabAutomative";
import { MaintainaceTab } from "@/features/bodyCard/tabMaintnce";
import styles from "./styles.module.css";
import { Services } from "@/features/addCarousel/data";
import { PersonalTab } from "./tabPersonal";
const VendorCard = () => {
	return (
		<div className={styles.vendorsCover}>
      <div className={styles.titleCover}><p className={styles.cardTitle}>Vendors</p></div>
			

			<div className={styles.vendor}>
				<AutomativeTab Services={Services} />
				<MaintainaceTab Services={Services} />
				<PersonalTab Services={Services} />
			</div>
		</div>
	);
};

export default VendorCard;
