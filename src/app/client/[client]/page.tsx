"use client";
import { getClientRealTimDoc } from "@/firebase/firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseConfig, storage, database, clientColRef } from "@/firebase/client";

import {redirect} from "next/navigation";
import{useLayoutEffect} from "react"

import {
	doc,
	addDoc,
	getDocs,
	deleteDoc,
	onSnapshot,
	collection,
} from "firebase/firestore";


const auth = getAuth();

const currentUser = auth.currentUser;
firebaseConfig

const ClientPage =() => {
 

 if(!currentUser){
	redirect("/");
 }
	return (
		<>
			<div>{currentUser?.email} working</div>
			<div></div>
		</>
	);
}

export default ClientPage;
