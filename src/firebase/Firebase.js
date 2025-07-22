import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCreTJDYXfWYdfhRr4U2K2Klwnw0lGKHh8",
  authDomain: "resumebuilder2123.firebaseapp.com",
  projectId: "resumebuilder2123",
  storageBucket: "resumebuilder2123.appspot.com", 
  messagingSenderId: "821993565788",
  appId: "1:821993565788:web:07e1d2ba99aca4ce530099"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
