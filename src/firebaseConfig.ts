import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,

	authDomain: "neodocs-1c88e.firebaseapp.com",

	projectId: "neodocs-1c88e",

	storageBucket: "neodocs-1c88e.firebasestorage.app",

	messagingSenderId: "980273581825",

	appId: "1:980273581825:web:5f51fdc08c024257b7d500",

	measurementId: "G-HYN3L6H7EJ"
};

console.log(import.meta.env.API_KEY)
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

