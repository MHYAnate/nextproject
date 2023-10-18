import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import styles from "./styles.module.css";
import VacancyRender from "./vacancy";
import Image from "next/image";
import { Services } from "../addCarousel/data";

export const VacancyTab = () => {
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
				onClick={() => (tab === "Vacancy" ? selectTab("") : selectTab("Vacancy"))}
			>
				<div className={tab === "Vacancy" ? styles.tabBtnclicked : styles.tabBtn}>
					{tab === "Vacancy" ? (
						<div className={styles.tabCover}>
							<p className={styles.aims}> Vacancy Room</p>
							<hr />
							<Image
								className={styles.img}
								src={"/platform/vacancy.jpg"}
								alt={"Vacancy"}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
					) : (
						<div className={styles.tabCover}>
							<p className={styles.aims}> Vacancy Room</p>
							<hr />
							<Image
								className={styles.img}
								src={"/platform/vacancy.jpg"}
								alt={"Vacancy"}
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
			{tab === "Vacancy" && <VacancyRender />}
		</>
	);
};
