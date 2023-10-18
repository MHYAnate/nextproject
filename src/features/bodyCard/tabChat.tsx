import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import styles from "./styles.module.css";
import ChattingRender from "./chat";
import Image from "next/image";
import { Services } from "../addCarousel/data";

export const ChatTab = () => {
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
				onClick={() => (tab === "Chat" ? selectTab("") : selectTab("Chat"))}
			>
				<div className={tab === "Chat" ? styles.tabBtnclicked : styles.tabBtn}>
					{tab === "Chat" ? (
						<div className={styles.tabCover}>
							<p className={styles.aims}> Chat Room</p>
							<hr />
							<Image
								className={styles.img}
								src={"/platform/chat.jpg"}
								alt={"chat"}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
					) : (
						<div className={styles.tabCover}>
							<p className={styles.aims}> Chat Room</p>
							<hr />
							<Image
								className={styles.img}
								src={"/platform/chat.jpg"}
								alt={"chat"}
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
			{tab === "Chat" && <ChattingRender />}
		</>
	);
};
