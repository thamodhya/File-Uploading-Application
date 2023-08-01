// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDlns1zxD5943yDvAnuisYxKZu8k6A14gw",
//   authDomain: "test-1e05f.firebaseapp.com",
//   projectId: "test-1e05f",
//   storageBucket: "test-1e05f.appspot.com",
//   messagingSenderId: "796752733199",
//   appId: "1:796752733199:web:fb6f7a4eeb372b7b382f7a"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
 

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyDlns1zxD5943yDvAnuisYxKZu8k6A14gw",
  authDomain: "test-1e05f.firebaseapp.com",
  projectId: "test-1e05f",
  storageBucket: "test-1e05f.appspot.com",
  messagingSenderId: "796752733199",
  appId: "1:796752733199:web:fb6f7a4eeb372b7b382f7a"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
getAnalytics(app)