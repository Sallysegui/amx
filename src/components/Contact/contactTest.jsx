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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // const automaticResponse = () => {
  //   return (
  //     <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
  //       <h2 style={{ color: '#333' }}>Automatic Response - AMX Support</h2>
  //       <p>Dear Valued Customer,</p>
  //       <p>Thank you for reaching out to AMX Support. Your message has been received and we are currently reviewing it.</p>
  //       <p>Our team will get back to you as soon as possible. We appreciate your patience.</p>
  //       <p>If you have any urgent inquiries, please feel free to contact us at support@amx.com or call us at 1-800-AMX-SUPPORT.</p>
  //       <p>Thank you for choosing AMX Support.</p>
  //       <p>Best regards,<br />AMX Support Team</p>
  //       <hr style={{ border: '1px solid #ccc' }} />
  //       <p style={{ fontSize: '0.8em', color: '#666' }}>This is an automated message. Please do not reply to this email.</p>
  //       <image src={logo}/>
  //     </div>
  //   );
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/sendEmail', formData);
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