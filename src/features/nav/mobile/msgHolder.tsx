import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";


interface post {
	Notification: {
		id: number;
		category: string;
		src: string;
		Notification: string;
		TimeStamp: string;
	};
}
declare global {
	interface Window {
		initMap: () => void;
	}
}

const MsgHolder = (props: post) => {
	

	return (
		<div className={styles.displayNtcMsg}>
			<div className={styles.inDisplayNtcMsg}>
				<div className={styles.msgImg}>
					<Image
						className={styles.img}
						src={props.Notification.src}
						alt={props.Notification.Notification}
						width={500}
						height={500}
						unoptimized
					/>
				</div>
				<div className={styles.msgName}>{props.Notification.category}</div>
			</div>
			<div className={styles.body}>
			
				<div className={styles.inBody}>
					<div className={styles.filter}>
						<button id="locate" className={styles.locate}>locate</button>
					</div>
					<div className={styles.msgDisplay}>

					</div>
				</div>
			</div>
		</div>
	);
};
MsgHolder.displayName = "MsgHolder";
export default MsgHolder;
