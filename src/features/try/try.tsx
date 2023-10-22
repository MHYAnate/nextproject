import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TabButton } from "./btn";

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

const AutomotiveRender: React.FC<CarouselProps> = memo(({ Services }) => {
	let items = [];

	for (let i = 1; i < Services.length - 1; i++) {
		items.push(<SlowPost key={i} Services={Services} />);
	}

	return <ul className={styles.mainContainer}>{items}</ul>;
});

const SlowPost: React.FC<CarouselProps> = ({ Services }) => {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}

	const autoCategory = Services.find(
		(category) => category.category === "Automotive"
	);

	function renderAutomotiveServices() {
		if (!autoCategory) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		return autoCategory.services.map((service) => (
			<li className={styles.renderCover} key={service.id}>
				{/* You can display the service name, image, or any other information you need */}
				<Image
					className={styles.img}
					src={service.src}
					alt={service.name}
					width={500}
					height={500}
					unoptimized
				/>
				<p className={styles.sname}>{service.name}</p>
			</li>
		));
	}

	return (
		<>
			<p className={styles.aims}>
				{" "}
				Check out the list of highly competitive service providers within this
				dynamic categories
			</p>
			<hr />
			<div className={styles.tabCover}>
				<TabButton
					onClick={() =>
						tab === "Automotive" ? selectTab("") : selectTab("Automotive")
					}
				>
					<div className={styles.tabHolder}>
						<div className={styles.tabin}>
							<Image
								className={styles.img1}
								src={autoCategory ? autoCategory.src : ""}
								alt={autoCategory ? autoCategory.category : ""}
								width={500}
								height={500}
								unoptimized
							/>
							{autoCategory?.category}
						</div>
					</div>
				</TabButton>
				<div className={styles.tabControl}>
					{tab === "Automotive" && renderAutomotiveServices()}
				</div>
			</div>
		</>
	);
};

AutomotiveRender.displayName = "AutomotiveRender";

export default AutomotiveRender;
