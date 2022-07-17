import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.VUE_APP_FIREBASE_KEY,
	authDomain: "csc-page.firebaseapp.com",
	projectId: "csc-page",
	storageBucket: "csc-page.appspot.com",
	messagingSenderId: "208420085066",
	appId: "1:208420085066:web:a89afe592c4cb27093b5b3",
	measurementId: "G-HJM736L47K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {
	app,
	analytics
};


createApp(App).use(router).mount("#app");
