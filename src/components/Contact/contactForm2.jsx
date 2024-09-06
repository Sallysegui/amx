import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    try {
      alert("Currently inoperative");
      ///////////////////////////////////////////////////////////
      /////uncomment this to make it work
      const response = await axios.post(
        "https://testsendback.onrender.com/api/test",
        formData
      );

      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      // alert("Email sent!");

      // Optionally, you can handle success or display a message to the user
    } catch (error) {
      console.error("Error sending email:", error);
      // Optionally, you can handle errors or display an error message to the user
    }
  };

  return (
    <div className="all">
      <div className="title">
        <h2>Contact Us</h2>
      </div>
      <div className="title-info">We will get back to you soon!</div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <label placeholder="Name">Name *</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e-mail"
            required
          />
          <label placeholder="e-mail">E-mail *</label>
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
          <label placeholder="Phone">Phone Number</label>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <label placeholder="message">Message *</label>
        </div>
        <div className="button-div">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <section>
      {/* <div className="contact-info">
      <h2>Contact Info</h2> */}
      <div className="info">
        <i className="fas fa-map-marker-alt"></i>
        <span>
          AMX Support GmbH
          <br />
          Niki Lauda Allee
          <br />
          Objekt 235 Hangar 6<br />
          Vienna International Airport,
          <br />
          Austria
          <br />
        </span>
      </div>
      {/* <div className="info">
        <i className="fas fa-envelope"></i>
        <span>moc@amxsupport.com</span>
      </div>
      <div className="info">
        <i className="fas fa-phone-alt"></i>
        <span>+43 (0)1 386 0 888 </span>
      </div> */}
      {/* </div> */}
    </section>
  );
};

const ContactFormTwo = () => {
  return (
    <div className="contact-container">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactFormTwo;
