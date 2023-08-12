import { getFirebaseDatabase} from '../firebase'; // Update the import path based on your project structure
import { ref, push, set } from 'firebase/database';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, course, college } = req.body;

    try {
      const usersRef = ref(getFirebaseDatabase, 'users'); // Create a reference using ref method
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


