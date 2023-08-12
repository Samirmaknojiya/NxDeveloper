// components/UserForm.js
import React, { useState } from 'react';
import { getFirebaseDatabase } from '../config/firebase';
import { ref, push, set } from 'firebase/database';


// Use a function expression or a function declaration, not both
// Also, use camelCase for function names, like "UserData"
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  
  const handleSubmit = async (e) => {
      e.preventDefault();
  ;
      const usersRef = ref(getFirebaseDatabase(), 'submit'); // Create a reference using ref method
      const newUserRef = push(usersRef); // Push a new child node to the reference
  
    await set(newUserRef, {
      name,
      email,
      phone,
      course,
      college,
    })
    .then(() => {
      // Data submitted successfully, update the state
      setFormSubmitted(true);
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });

    // Clear input fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    setCollege('');
  };

  return (
    
    <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
      
      <h2 className="text-2xl font-semibold mb-4 text-slate-500">Registration Form</h2>

      {formSubmitted ? (
      <p className=' text-teal-600'>Thank you for registration!</p>
      ) :
      
      <form action="/api/submit" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text" id="name" name="name" value={name}
          onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md mb-4" required />

        <label htmlFor="email" className="block mb-2">Email:</label>
        <input type="email" id="email" name="email" value={email}
          onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md mb-4" required />

        <label htmlFor="phone" className="block mb-2">Phone:</label>
        <input type="tel" id="phone" name="phone" value={phone}
          onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-md mb-4" required />

        <label htmlFor="course" className="block mb-2">Course:</label>
        <input type="text" id="course" name="course" value={course}
          onChange={(e) => setCourse(e.target.value)} className="w-full p-2 border rounded-md mb-4" required />

        <label htmlFor="college" className="block mb-2">College:</label>
        <input type="text" id="college" name="college" value={college}
          onChange={(e) => setCollege(e.target.value)} className="w-full p-2 border rounded-md mb-4" required />

        <button type="submit" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-900">
            Submit
        </button>
    </form>
    }
    </div>
    
  );
}

export default UserForm
