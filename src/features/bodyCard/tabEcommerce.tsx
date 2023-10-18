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
			{tab === "Commerce" && <CommerceRender />}
		</>
	);
};
