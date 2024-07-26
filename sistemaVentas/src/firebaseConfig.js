import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCE_ULOnKc1j09YuSl1pqJOGveAa7ov3Fk",
  authDomain: "sistemaventas-eb69c.firebaseapp.com",
  projectId: "sistemaventas-eb69c",
  storageBucket: "sistemaventas-eb69c.appspot.com",
  messagingSenderId: "262239209232",
  appId: "1:262239209232:web:3ff76fc9df716ad6f7c795",
  measurementId: "G-LHQEXT4H8B"
};


const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;