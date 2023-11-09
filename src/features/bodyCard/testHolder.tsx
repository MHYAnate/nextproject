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

let map: google.maps.Map;

function initMap(): void {
  // The location of Uluru
  const position = { lat: 9.036485, lng: 7.476240 };

  // The map, centered at Uluru
  const Map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: position,
      mapId: 'DEMO_MAP_ID',
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    map: Map,
    position: position,
    title: 'Uluru'
  });
}


const ServiceHolder: React.FC<CarouselProps>= ({services})  => {
  React.useEffect(() => {
    initMap();
  }, []);

  return (
    <div className={styles.displayFinalService}>
      <div className={styles.inDisplayFinalService}>
        <div className={styles.serviceImg}>
          <Image
            className={styles.imgITC}
            src={services.src}
            alt={services.name}
            width={500}
            height={500}
            unoptimized
          />
        </div>
        <div className={styles.sHName}>
        {services.name} {" "} Vendors
        </div>
      </div>
      <div className={styles.body}>
        <div id="map" className={styles.map}></div>
        <div className={styles.inBody}>
        <script async
             src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCN0cgiDpCY-3N5fHnIONkyep1Th8h6mk&callback=initMap">
          </script>
        </div>
      </div>

    </div>
  );
};
ServiceHolder.displayName = "ServiceHolder";
export default ServiceHolder;
