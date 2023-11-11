import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
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

	async function initMap() {
		// Request needed libraries.
		const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
		const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
	
		const map = new google.maps.Map(
			document.getElementById("map") as HTMLElement,
			{
				zoom: 3,
				center: { lat: 9.036485, lng: 7.47624 },
				mapId: 'DEMO_MAP_ID',
			}
		);
	
		const infoWindow = new google.maps.InfoWindow({
			content: "",
			disableAutoPan: true,
		});
	
		// Create an array of alphabetical characters used to label the markers.
		const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
		// Add some markers to the map.
		const markers = locations.map((position, i) => {
			const label = labels[i % labels.length];
			const pinGlyph = new google.maps.marker.PinElement({
				glyph: label,
				glyphColor: "white",
			})
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
	
	initMap();
React.useEffect(()=>{
	if(Map){
		setTimeout(() => {
			initMap();
		}, 1000);
	}

})
	

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
					<div className={styles.filter}></div>
					<div className={styles.vendorsDisplay}>

					</div>
				</div>
			</div>
		</div>
	);
};
ServiceHolder.displayName = "ServiceHolder";
export default ServiceHolder;
