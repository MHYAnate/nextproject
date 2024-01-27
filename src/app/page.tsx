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
import DesktopCarousel from "@/features/carousel/desktop/carousel";
import { Services } from "@/features/database/data";
import BurgerMenu from "@/features/burgerMenu/mobile/burgerMenu";
import DesktopBurgerMenu from "@/features/burgerMenu/desktop/burgerMenu";
import MobileNewsLetter from "@/features/newsletter/mobile/mobileNewsLetter";
import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";
import { useEffect } from "react";
import DesktopNavTab from "@/features/nav/desktop/navTab";
import DesktopNewsLetter from "@/features/newsletter/desktop/desketopNewsLetter";
import TabletCarousel from "@/features/carousel/tablet/carousel";
import TabletBurgerMenu from "@/features/burgerMenu/tablet/burgerMenu";
import TabletNewsLetter from "@/features/newsletter/tablet/tabletNewsLetter";
import TabletNavTab from "@/features/nav/tablet/navTab";


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

	useEffect(() => {
    if (true) {
      const timerId = setTimeout(() => {
        myFunction();
      }, 1000);

      return () => clearTimeout(timerId);
    }
  });

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
							<div className={styles.tabletNavList}>
								<TabletNavTab/>
							</div>
							<div className={styles.desktopNavList}>
								<DesktopNavTab/>
							</div>
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
					<div className={styles.tabletCarouselNenwsLetterCover}>
					<div className={styles.tabletCarouselCover}>
						<TabletCarousel Services={Services} />
					</div>
					<div className={styles.tabletNewLetter}>
						<TabletNewsLetter/>
					</div>
					</div>
					<div className={styles.tabletBurgerMenu}>
						<TabletBurgerMenu/>
					</div>
					
				</div>
				<div className={styles.desktopBody}>
					<div className={styles.inDesktopBody}>
					<div className={styles.desktopCarouselCover}>
						<DesktopCarousel Services={Services}/>
					</div>
					<div className={styles.desktopBurgerMenu}>
						<DesktopBurgerMenu/>
					</div>
					</div>
					<div className={styles.desktopNewsLetter}>
						<DesktopNewsLetter/>
						</div>
				</div>
			</div>
		</>
	);
}
