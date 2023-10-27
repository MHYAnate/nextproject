import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import styles from "./styles.module.css";
import MaintainaceRender from "./maintaince";
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

export const MaintainaceTab: React.FC<CarouselProps> = ({Services}) =>{
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
							<p className={styles.aims}> {Services[1].category} Services </p>
						<hr />
							<Image
								className={styles.img}
								src={Services[1].src}
								alt={Services[1].category}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
					) : (
						<div className={styles.tabCover}>
							<p className={styles.aims}> {Services[1].category} Services </p>
						<hr />
							<Image
								className={styles.img}
								src={Services[1].src}
								alt={Services[1].category}
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
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className={styles.svg}
							fill="none"
							stroke="currentcolor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
							/>
						</svg>
					</div>
					
					<MaintainaceRender Services={Services} />
				</div>
			) }
		</>
	);
}
