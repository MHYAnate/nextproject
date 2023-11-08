import React, { useTransition } from "react";
import { Loader } from "@googlemaps/js-api-loader"
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

	let startTime = performance.now();

	const loader = new Loader({
		apiKey: "AIzaSyDCN0cgiDpCY-3N5fHnIONkyep1Th8h6mk",
		version: "weekly",
		
	});

	React.useEffect(()=>{
		loader.load().then(async () => {
		const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
		map = new Map(document.getElementById("map") as HTMLElement, {
			center: { lat: 9.036485, lng: 7.476240 },
			zoom: 13,
		});
	});
	}, [Map])
	
	

	// Initialize and add the map
	

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
					
				</div>
				<div className={styles.inBody}></div>
			</div>
		</div>
	);
};
ServiceHolder.displayName = "ServiceHolder";
export default ServiceHolder;
