import { useState } from "react";
// import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const addForm = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleQuesitonChange = (event) => {
    console.log(event.target.value);
    setQuestion(event.target.value);
  };

  // const sendEmailNow = ( )=> { emailjs.init({
  //   publicKey: 'service_q4sh36v',
  //   blockHeadless: true,
  //   blockList: {
  //     list: ['sallysegui10@gmail.com', 'bar@emailjs.com'],
  //   },
  //   limitRate: {
  //     throttle: 10000, // 10s
  //   },
  // });}

  // const onSubmit = {sendEmailNow}

  return (
    <div className="contactFormContainer">
      <div>
        <form onSubmit={addForm}>
          <h1>Send us a message</h1>
          <input
            className="fontField"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            id="name"
          />

          <input
            className="fontField"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            id="email"
          />
          {/* <input
            className='fontField enquiry'
            multiline={true} 
            value={question}
            onChange={handleQuesitonChange}
            placeholder='Enquiry'
         /> */}
          <textarea
            className="fontField enquiry"
            value={question}
            onChange={handleQuesitonChange}
            placeholder="Enquiry"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
