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
							<p className={styles.aims}> Vacancies</p>
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
							<p className={styles.aims}> Vacancies</p>
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
			{tab === "Vacancy" && (
				<div>
					<div className={styles.close} onClick={() => selectTab("")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							className={styles.svg}
							fill="red"
							stroke="red"
							data-name="Layer 1"
						>
							<path d="m24 5a3 3 0 0 0 -3-3h-13.242l-7.758 10 7.758 10h13.242a3 3 0 0 0 3-3zm-6.041 9.543-1.414 1.414-2.545-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.414 1.414-2.543 2.543z" />
						</svg>
					</div>
					<VacancyRender />
				</div>
			)  }
		</>
	);
};
