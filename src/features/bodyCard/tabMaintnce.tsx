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
			{tab === "Automative" && <MaintainaceRender Services={Services} />}
		</>
	);
}
