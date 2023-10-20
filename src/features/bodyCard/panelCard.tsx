import React from "react";
import styles from "./styles.module.css";
import { AboutUsTab } from "./tabAbout";
import { ContactUsTab } from "./tabContact";
import { NoticeTab } from "./tabNotice";


const PanelCard = () => {
	return (
		

			<div className={styles.panel}>
        <AboutUsTab/>
        <ContactUsTab/>
        <NoticeTab/>

			</div>
		
	);
};

export default PanelCard;
