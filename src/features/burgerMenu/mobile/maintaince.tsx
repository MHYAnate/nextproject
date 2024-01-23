import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TabButton } from "./btnMain";
import { Services } from "@/features/database/data";
import ServiceHolder from "./serviceHolder";
import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";

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

		async function myFunction() {
			try {
	
		
		
				// Await initMap
				await initMap();
		
				// Continue with other operations after map is initialized
				console.log('Map initialized successfully!');
			} catch (error) {
				console.error('Error initializing map:', error);
			}
		}
	
		setTimeout(() => {
			if(tab){
				// initMap()
				myFunction();
			}
		},1000);

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
						<div className={styles.RCover}>
							<div className={styles.closeIn} onClick={() => selectTab("Maintainace")}>
							<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svg}
								fill="currentcolor"
								stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
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
				<div className={styles.selectvendors}>Select your prefered vendor</div>
				{renderMaintenanceServices()}
				</div>
			</div>
			
		</>
	);
};

MaintainaceRender.displayName = "MaintainaceRender";

export default MaintainaceRender;
