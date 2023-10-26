import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import styles from "./styles.module.css";
import PersonalRender from "./personal";
import Image from "next/image";
import { Services } from "../addCarousel/data";

interface CarouselProps {
	Services: {
		id: number;
		category: string;
		src: string;
		services: {
			id: number;
			name: string;
			src: string;
			link: string;
		}[];
	}[];
}

export const PersonalTab: React.FC<CarouselProps> = ({Services}) =>{
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<>
			<TabButton
				onClick={() => (tab === "Automative" ? selectTab("") : selectTab("Automative"))}
			>
				<div className={tab === "Automative" ? styles.tabBtnclicked : styles.tabBtn}>
					{tab === "Automative" ? (
						
						<div className={styles.tabCover}>
							<p className={styles.aims}> {Services[2].category} Services </p>
						<hr />
							<Image
								className={styles.img}
								src={Services[2].src}
								alt={Services[2].category}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
					) : (
						<div className={styles.tabCover}>
							<p className={styles.aims}> {Services[2].category} Services </p>
						<hr />
							<Image
								className={styles.img}
								src={Services[2].src}
								alt={Services[2].category}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
					)}

					<span className={styles.span}></span>
				</div>
			</TabButton>
			<hr />
			{tab === "Automative" && (
				<div className={styles.RCover}>
					<div className={styles.close} onClick={() => selectTab("")}>
					<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Isolation_Mode"
							data-name="Isolation Mode"
							viewBox="0 0 24 24"
							className={styles.svg}
							fill="currentcolor"
							stroke="currentcolor"
						>
							<path d="M13.768,1.147a2.5,2.5,0,0,0-3.536,0L0,11.38V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.38ZM21,21H16V17.818A3.818,3.818,0,0,0,12.182,14h-.364A3.818,3.818,0,0,0,8,17.818V21H3V12.622l9-9,9,9Z" />
						</svg>
					</div>
					<PersonalRender Services={Services} />
				</div>
			)  }
		</>
	);
}
