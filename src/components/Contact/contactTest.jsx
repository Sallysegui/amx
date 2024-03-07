import  { useState } from 'react';
// import {logo} from '../../../public/css/images/logoBrowsweOriginal.png';
import axios from 'axios';

const ContactFormTest = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitting')
    try {
      const response = await axios.post('http://localhost:3000/sendemail', formData);
      console.log(response.data);
      alert("Email sent!");
      // Optionally, you can handle success or display a message to the user
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally, you can handle errors or display an error message to the user
    }
  };

 
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactFormTest