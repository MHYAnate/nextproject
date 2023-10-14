"use client";

import { Services } from "@/features/addCarousel/data";
import InCarousel from "@/features/trial/add";


function ClientPage() {
	return (
		<>
			<div><InCarousel Services={Services} /></div>
		</>
	);
}

export default ClientPage;
