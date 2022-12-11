

import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdAiPekrbdixPzFKeIxnhvb32XoaewnTo",
    authDomain: "unbox-91cb9.firebaseapp.com",
    projectId: "unbox-91cb9",
    storageBucket: "unbox-91cb9.appspot.com",
    messagingSenderId: "1029014595970",
    appId: "1:1029014595970:web:654c9d683c2ef34045079b",
    measurementId: "G-470NW66W7E"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);