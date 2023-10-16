"use client";
import Ilud from "@/features/ilud/ilud";
import Link from "next/link";
import styles from "./styles.module.css";
import { Services } from "@/features/addCarousel/data";
import InCarousel from "@/features/addCarousel/ad1";
import AboutContainer from "@/features/aboutUs/about";
import UserBtn from "@/features/frontUserBtn/userBtnContainer";


export default function Home() {
	return (
		<>
			{/*<div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>*/}
			<div className={styles.main}>
				<div className={styles.header}>
					<div className={styles.nav}>
						<div>
							<AboutContainer />
						</div>
						<div><Ilud/></div>
					</div>
				</div>
				<div>
					<span className={styles.offer}>
						Currently offering seamless linkages to
					</span>
					<InCarousel Services={Services} />
				</div>
				<div className={styles.bodyCard}>
					<div className={styles.other}></div>
					<div className={styles.userbtn}>
						<UserBtn />
					</div>
				</div>
				<div className={styles.footer}></div>
			</div>
		</>
	);
}
