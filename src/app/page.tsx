"use client";
import Ilud from "@/features/ilud/ilud";
import Link from "next/link";
import styles from "./styles.module.css";
import { Services } from "@/features/addCarousel/data";
import InCarousel from "@/features/addCarousel/ad1";
import Iludlogo from "@/features/iludlogo/iludlogo";
import AboutContainer from "@/features/aboutUs/about";
import ContactUsBtn from "@/features/contactUs/contactUsBtn";
import UserBtn from "@/features/frontUserBtn/userBtnContainer";

export default function Home() {
	return (
		<>
			{/*<div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>*/}
			<div className={styles.main}>
				<div className={styles.header}>
					<div className={styles.nav}>
						<AboutContainer />
            <ContactUsBtn/>
					</div>
				</div>
				<div>
					<InCarousel Services={Services} />
				</div>
				<div className={styles.btnCard}>
					<UserBtn />
				</div>
				<div className={styles.footer}>
					<div className={styles.contactUs}>
						
					</div>
				</div>
			</div>
		</>
	);
}
