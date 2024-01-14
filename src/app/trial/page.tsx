"use client";

import { Services } from "@/features/database/data";

import AutomotiveRender from "@/features/try/try";



const ClientPage = () => {
	return (
		<>
			<div>checking
				<AutomotiveRender Services={Services}/>
			</div>
		</>
	);
};

export default ClientPage;
