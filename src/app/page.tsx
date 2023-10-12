"use client";
import Ilud from "@/features/ilud/ilud";
import Link from "next/link";
import styles from "./styles.module.css";
import { Services } from "@/features/addCarousel/data";
import InCarousel from "@/features/addCarousel/ad1";
import SearchUiBtn from "@/features/search/searchUiBtn";
import AboutContainer from "@/features/aboutUs/about";
import ContactUsBtn from "@/features/contactUs/contactUsBtn";
import UserBtn from "@/features/frontUserBtn/userBtnContainer";
import Other from "@/features/other/other";

export default function Home() {
	return (
		<>
			{/*<div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>*/}
			<div className={styles.main}>
				<div className={styles.header}>
					<div className={styles.nav}>
						<AboutContainer />
						<SearchUiBtn/>
            <ContactUsBtn/>
					</div>
				</div>
				<div>
					<span className={styles.paspinComfirm}>We are currently offering seamless linkages to</span>
					<InCarousel Services={Services} />
				</div>
				<div className={styles.btnCard}>
					<Other/>
					<UserBtn />
				</div>
				<div className={styles.footer}>
	
				</div>
			</div>
		</>
	);
}
