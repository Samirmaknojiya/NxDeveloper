 
import { ref, push, set } from 'firebase/database';

 // Update the import path based on your project structure

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: "https://handy-woodland-395003-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const getFirebaseDatabase = () => database;




export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, course, college } = req.body;

    try {
      const usersRef = ref(getFirebaseDatabase(), 'users'); // Create a reference using ref method
      const newUserRef = push(usersRef); // Push a new child node to the reference

      await set(newUserRef, {
        name,
        email,
        phone,
        course,
        college,
      });

      return res.status(200).json({ message: 'Form data submitted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred while submitting the form' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}


