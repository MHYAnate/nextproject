import React from "react";
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
declare global {
	interface Window {
		initMap: () => void;
	}
}

const ServiceHolder = (props: CarouselProps) => {
	


  
 
	

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
					<div className={styles.filter}>
						<button id="locate" className={styles.locate}>locate</button>
					</div>
					<div className={styles.vendorsDisplay}>

					</div>
				</div>
			</div>
		</div>
	);
};
ServiceHolder.displayName = "ServiceHolder";
export default ServiceHolder;
