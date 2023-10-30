"use client";
import Ilud from "@/features/ilud/ilud";
import { Services } from "@/features/addCarousel/data";
import InCarousel from "@/features/addCarousel/ad1";
import AboutContainer from "@/features/aboutUs/about";
import UserBtn from "@/features/frontUserBtn/userBtnContainer";
import VendorCard from "@/features/bodyCard/vendorCard";
import PlatformCard from "@/features/bodyCard/platformCard";
import PanelCard from "@/features/bodyCard/panelCard";
import styles from "./styles.module.css";
export default function Home() {
	return (
		<>
			{/*<div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>*/}
			<div className={styles.main}>
				<div className={styles.headMain}>
				<div className={styles.header}>
					<div className={styles.nav}>
						<div className={styles.inNav}>
							<AboutContainer />
						</div>
						<div className={styles.iLudCover}>
							<Ilud />
						</div>
					</div>
				</div>
				<div className={styles.panelCover}>
					<PanelCard />
				</div>
				</div>
				<div className={styles.bodyCover}>
				<div className={styles.carouselCover}>
					<InCarousel Services={Services} />
				</div>
				<div className={styles.bodyCard}>
					<div className={styles.inCardA}>
						<VendorCard />
					</div>

					<div className={styles.inCardB}>
						<PlatformCard />
					</div>
				</div>
				<div className={styles.userbtn}>
					<UserBtn />
				</div>
				<div className={styles.footer}></div>
				</div>
			</div>
		</>
	);
}
