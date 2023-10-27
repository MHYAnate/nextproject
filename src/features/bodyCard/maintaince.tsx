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

const MaintainaceRender: React.FC<CarouselProps> = memo(() => {
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

	const maintenanceCategory = Services.find(
		(category) => category.category === "Maintenance"
	);

	function renderMaintenanceServices() {
		if (!maintenanceCategory) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		return maintenanceCategory.services.map((service) => (
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
						<ServiceHolder services={service} />
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
						src={Services[1].src}
						alt={Services[1].category}
						width={500}
						height={500}
						unoptimized
					/>
					<p className={styles.inAims}> {Services[1].category} Services</p>
					<hr />
				</div>
				<div className={styles.renderedServices}>
				{renderMaintenanceServices()}
				</div>
			</div>
			
		</>
	);
};

MaintainaceRender.displayName = "MaintainaceRender";

export default MaintainaceRender;
