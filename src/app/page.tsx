"use client";
import Ilud from "@/features/ilud/ilud";
import styles from "./styles.module.css";
import MobileNavTab from "@/features/nav/mobile/navTab";
import { updateCountFromLength } from "@/lib/features/slice/notificationSlice";
import { updateMsgLength } from "@/lib/features/slice/messageSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Notification } from "@/features/database/notifiaction";
import { Messages } from "@/features/database/messages";
import InCarousel from "@/features/carousel/mobile/carousel";
import { Services } from "@/features/database/data";
import BurgerMenu from "@/features/burgerMenu/mobile/burgerMenu";
import MobileNewsLetter from "@/features/newsletter/mobile/mobileNewsLetter";
import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";


export default function Home() {
	const dispatch = useAppDispatch();
	if (true) {
		dispatch(updateCountFromLength(Notification.length));
	}
	if (true) {
		dispatch(updateMsgLength(Messages.length));
	}
	async function myFunction() {
		try {

	
	
			// Await initMap
			await initMap();
	
			// Continue with other operations after map is initialized
			console.log('Map initialized successfully!');
		} catch (error) {
			console.error('Error initializing map:', error);
		}
	}
	if (true) {
	   myFunction();
	}

	return (
		<>
			{/*<div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>*/}
			<div className={styles.bodyMainCover}>
				<div className={styles.navCover}>
					<nav className={styles.nav}>
						<div className={styles.iludCover}>
							<div className={styles.mobileIlud}>
								<Ilud />
							</div>
							<div className={styles.tabletIlud}>
								<Ilud />
							</div>
							<div className={styles.desktopIlud}>
								<Ilud />
							</div>
						</div>
						<div className={styles.navlist}>
							<div className={styles.mobileNavList}>
								<MobileNavTab />
							</div>
							<div className={styles.tabletNavList}></div>
							<div className={styles.desktopNavList}></div>
						</div>
					</nav>
				</div>
				<div className={styles.mobilebody}>
					<div className={styles.mobileCarouselCover}>
						<InCarousel Services={Services} />
					</div>
					<div className={styles.mobileBurgerMenu}>
						<BurgerMenu />
					</div>
					<div className={styles.mobileNewLetter}>
						<MobileNewsLetter/>
					</div>
				</div>
				<div className={styles.tabletBody}>
					<div className={styles.tabletCarouselCover}></div>
					<div className={styles.tabletBurgerMenu}></div>
					<div className={styles.tabletNewLetter}></div>
				</div>
				<div className={styles.desktopBody}>
					<div className={styles.desktopCarouselCover}></div>
				</div>
			</div>
		</>
	);
}
