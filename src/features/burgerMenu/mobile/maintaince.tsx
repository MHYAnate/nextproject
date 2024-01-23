import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TabButton } from "./btnMain";
import { Services } from "@/features/database/data";
import ServiceHolder from "./serviceHolder";
// import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";

import { MarkerClusterer } from "@googlemaps/markerclusterer";

declare global {
	interface Window {
		initMap: () => void;
	}
}



	export async function initMap() {
		
		// Request needed libraries.
		if(google){	
			const { Map, InfoWindow } = (await google.maps.importLibrary(
			"maps"
		)) as google.maps.MapsLibrary;
		const { AdvancedMarkerElement, PinElement } =
			(await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;

		const map = new google.maps.Map(
			document.getElementById("map") as HTMLElement,
			{
				zoom: 3,
				center: { lat: 9.036485, lng: 7.47624 },
				mapId: "DEMO_MAP_ID",
			}
		);

		const infoWindow = new google.maps.InfoWindow({
			content: "",
			disableAutoPan: true,
		});

		const locationButton = document.getElementById("locate") as HTMLElement;

		// map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

		locationButton.addEventListener("click", () => {
			// Try HTML5 geolocation.
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position: GeolocationPosition) => {
						const pos = {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						};

						infoWindow.setPosition(pos);
						infoWindow.setContent("Current Position");
						infoWindow.open(map);
						map.setCenter(pos);
					},
					() => {
						handleLocationError(true, infoWindow, map.getCenter()!);
					}
				);
			} else {
				// Browser doesn't support Geolocation
				handleLocationError(false, infoWindow, map.getCenter()!);
			}
			function handleLocationError(
				browserHasGeolocation: boolean,
				infoWindow: google.maps.InfoWindow,
				pos: google.maps.LatLng
			) {
				infoWindow.setPosition(pos);
				infoWindow.setContent(
					browserHasGeolocation
						? "Error: The Geolocation service failed."
						: "Error: Your browser doesn't support geolocation."
				);
				infoWindow.open(map);
			}
		});

		// Create an array of alphabetical characters used to label the markers.
		const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		// Add some markers to the map.
		const markers = locations.map((position, i) => {
			const label = labels[i % labels.length];
			const pinGlyph = new google.maps.marker.PinElement({
				glyph: label,
				glyphColor: "white",
			});
			const marker = new google.maps.marker.AdvancedMarkerElement({
				position,
				content: pinGlyph.element,
			});

			// markers can only be keyboard focusable when they have click listeners
			// open info window when marker is clicked
			marker.addListener("click", () => {
				infoWindow.setContent(position.lat + ", " + position.lng);
				infoWindow.open(map, marker);
			});
			return marker;
		});

		// Add a marker clusterer to manage the markers.
		new MarkerClusterer({ markers, map });
	}
	
	}

	const locations = [
		{ lat: 9.036485, lng: 7.47624 },
		{ lat: 9.136485, lng: 7.57624 },
		{ lat: 9.236485, lng: 7.67624 },
		{ lat: 9.336485, lng: 7.77624 },
		{ lat: 9.436485, lng: 7.87624 },
		{ lat: 9.536485, lng: 7.97624 },
		{ lat: 9.636485, lng: 7.08624 },
		{ lat: 9.736485, lng: 7.19624 },
		{ lat: 9.836485, lng: 7.28624 },
		{ lat: 9.936485, lng: 7.37624 },
		{ lat: 9.926485, lng: 7.46624 },
		{ lat: 9.816485, lng: 7.55624 },
		{ lat: 9.706485, lng: 7.65624 },
		{ lat: 9.616485, lng: 7.74624 },
		{ lat: 9.526485, lng: 7.83624 },
		{ lat: 9.436485, lng: 7.92624 },
		{ lat: 9.326485, lng: 7.01624 },
		{ lat: 9.216485, lng: 7.92624 },
		{ lat: 9.106485, lng: 7.83624 },
		{ lat: 9.216485, lng: 7.74624 },
		{ lat: 9.326485, lng: 7.65624 },
		{ lat: 9.436485, lng: 7.55624 },
		{ lat: 9.546485, lng: 7.64624 },
	];


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
