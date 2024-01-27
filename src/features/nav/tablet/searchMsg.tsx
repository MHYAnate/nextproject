import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import {MobileNotificationMessages } from "@/features/database/mobileNoticeMassege";



interface CarouselProps {
	MobileNotificationMessages: {
		id: number;
		category: string;
		src: string;
		notice: {
			id: number;
			category: string;
			src: string;
			Notification: string;
			TimeStamp: string;
		}[];
	}[];
}



const MassegesRender: React.FC<CarouselProps> = memo(() => {

	
	let items = [];

	for (let i = 1; i < MobileNotificationMessages[1].notice.length - 1; i++) {
		items.push(<SlowPost key={i} MobileNotificationMessages={MobileNotificationMessages} />);
	}

	return <ul className={styles.lineContainer}>{items}</ul>;
});

const SlowPost: React.FC<CarouselProps> = ({ MobileNotificationMessages }) => {
	



	let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}

	const searched = MobileNotificationMessages.find(
		(category) => category.category === "Messages"
	);

	function renderSearched() {
		if (!searched) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		
		return searched.notice.map((notice) => (
			<>
				
					{/* You can display the notice name, image, or any other information you need */}

					<li className={styles.renderCover}>
     	<div className={styles.img}>
							<Image
								className={styles.ntfctImg}
								src={notice.src}
								alt={notice.Notification}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
						<div className={styles.renderSubBody}>
							<div className={styles.noticeMsg}>{notice.Notification}</div>

							<div className={styles.timeStamp}>
								<p>{notice.TimeStamp}</p>
								<div className={styles.seen}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="green"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="green"
										className={styles.see}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
							</div>
						</div>
    </li>
		</>
	))
}

return(
 <div>
	{renderSearched()}
 </div>
)
}

MassegesRender.displayName = "MassegesRender";

export default MassegesRender;
