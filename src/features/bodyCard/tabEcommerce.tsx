import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import styles from "./styles.module.css";
import CommerceRender from "./eCommerce";
import Image from "next/image";
import { Services } from "../addCarousel/data";

export const CommerceTab = () => {
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
				onClick={() => (tab === "Commerce" ? selectTab("") : selectTab("Commerce"))}
			>
				<div className={tab === "Commerce" ? styles.tabBtnclicked : styles.tabBtn}>
					{tab === "Commerce" ? (
						<div className={styles.tabCover}>
							<p className={styles.aims}>E Commerce</p>
							<hr />
							<Image
								className={styles.img}
								src={"/platform/commerce.jpg"}
								alt={"Commerce"}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
					) : (
						<div className={styles.tabCover}>
							<p className={styles.aims}>E Commerce</p>
							<hr />
							<Image
								className={styles.img}
								src={"/platform/commerce.jpg"}
								alt={"commerce"}
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
			{tab === "Commerce" && (
				<div>
					<div className={styles.close} onClick={() => selectTab("")}>
					<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svg}
								fill="red"
								stroke="red"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
					</div>
					<CommerceRender />
				</div>
			) }
		</>
	);
};
