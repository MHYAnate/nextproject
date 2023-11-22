import { MarkerClusterer } from "@googlemaps/markerclusterer";

declare global {
	interface Window {
		initMap: () => void;
	}
}

interface CarouselProps {
	services: {
		id: number;
		name: string;
		src: string;
		link: string;
	};
}

	export async function initMap() {
		// Request needed libraries.
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
	


