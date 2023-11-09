import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";
import styles from "./styles.module.css";

interface CarouselProps {
	services: {
		id: number;
		name: string;
		src: string;
		link: string;
	};
}

const ServiceHolder = (props: CarouselProps) => {
	// Initialize and add the map
	let map;

	async function initMap(): Promise<void> {
		// The location of area 2 section 1 oyo street block 30 flat 2 garki Abuja
		const position = { lat: 9.036485, lng: 7.47624 };

		// Request needed libraries.
		//@ts-ignore
		const { Map } = (await google.maps.importLibrary(
			"maps"
		)) as google.maps.MapsLibrary;

		const { AdvancedMarkerElement } = (await google.maps.importLibrary(
			"marker"
		)) as google.maps.MarkerLibrary;

		// The map, centered at Uluru
		map = new Map(document.getElementById("map") as HTMLElement, {
			zoom: 15,
			center: position,
			mapId: "DEMO_MAP_ID",
		});

		// The marker, positioned at Uluru
		const marker = new AdvancedMarkerElement({
			map: map,
			position: position,
			title: "Uluru",
		});
	}

	setTimeout(() => {
		initMap();
	}, 1000);

	return (
		<div className={styles.displayFinalService}>
			<div className={styles.inDisplayFinalService}>
				<div className={styles.serviceImg}>
					<Image
						className={styles.imgITC}
						src={props.services.src}
						alt={props.services.name}
						width={500}
						height={500}
						unoptimized
					/>
				</div>
				<div className={styles.sHName}>{props.services.name} Vendors</div>
			</div>
			<div className={styles.body}>
				<div id="map" className={styles.map}>
					<script
						async
						src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCN0cgiDpCY-3N5fHnIONkyep1Th8h6mk&callback=initMap"
					></script>
				</div>
				<div className={styles.inBody}>
					
				</div>
			</div>
		</div>
	);
};
ServiceHolder.displayName = "ServiceHolder";
export default ServiceHolder;
