import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TabButton } from "./btnMain";
import { Services } from "../addCarousel/data";
import ServiceHolder from "./serviceHolder";

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

const AutomotiveRender: React.FC<CarouselProps> = memo(() => {
	let items = [];

	for (let i = 1; i < Services.length - 1; i++) {
		items.push(<SlowPost key={i} Services={Services} />);
	}

	return <ul className={styles.lineContainer}>{items}</ul>;
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
			<>
				<TabButton
					key={service.id}
					onClick={() =>
						tab === "Auto" && service.name
							? selectTab("")
							: selectTab(`Auto${service.name}`)
					}
				>
					{/* You can display the service name, image, or any other information you need */}

					<Image
						className={styles.img}
						src={service.src}
						alt={service.name}
						width={500}
						height={500}
						unoptimized
					/>
					<div className={styles.sname}>{service.name}{" "} Vendors</div>
					
				</TabButton>
				<div className={styles.ServiceHolder}>
					{tab === `Auto${service.name}` && (
						<div className={styles.RCover}>
							<div className={styles.closeIn} onClick={() => selectTab("")}>
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
					<ServiceHolder services={service} />
					</div>
					)}
				</div>
			</>
		));
	}

	return (
		<>
			<div className={styles.iCover}>
				<div className={styles.intabCover}>
					<Image
						className={styles.imgTC}
						src={Services[0].src}
						alt={Services[0].category}
						width={500}
						height={500}
						unoptimized
					/>
					<p className={styles.inAims}> {Services[0].category} Services</p>
					<hr />
				</div>
				<div className={styles.renderedServices}>
        <div>Select your prefered vendor</div>
					{renderAutomotiveServices()}
				</div>
			</div>
		</>
	);
};

AutomotiveRender.displayName = "AutomotiveRender";

export default AutomotiveRender;
