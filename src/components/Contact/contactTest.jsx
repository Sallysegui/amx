import { useRef } from 'react';
// import  { useState } from "react";
import emailjs from '@emailjs/browser';


const ContactFormTest = () => {
  const form = useRef();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleInputChange = (event) => {
  //   console.log(event.target)
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // We will handle the submit later
  // };

  const sendEmail = (e) => {
    // emailjs.init({
    //     publicKey: 'YOUR_PUBLIC_KEY',
    //     blockHeadless: true,
    //     blockList: {
    //       list: ['sallysegui10@gmail.com', 'bar@emailjs.com'],
    //     },
    //     limitRate: {
    //       throttle: 10000, // 10s
    //     },
    //   });
      
    e.preventDefault();

    // emailjs
    //   .sendForm('service_q4sh36v', "template_8p5056o", form.current, {
    //     publicKey: 'AKB-QS5iIe09EdSph',
    //   })
    //   .send
    //   .then
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );

    // const templateParams = {
    //   name: 'James',
    //   notes: 'Check this out!',
    // };
    
    emailjs
      .sendForm('service_gfwen7r', "template_n7mztor",form.current, {
        publicKey: 'AKB-QS5iIe09EdSph',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );









  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        {/* <form > */}
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email"/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"  />
    </form>
  );
};

export default ContactFormTest