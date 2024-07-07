import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactRightBar'></div>
      <div className='contactContainer'>
        <div className='contactDetails'>
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> rohitshendurkar2017@gmail.com</p>
          <p><strong>Phone:</strong> +91 8421252700</p>
        </div>
        <div className='collegeDetails'>
          <h2>College Information</h2>
          <p><strong>Name:</strong> Indian Institute of Information Technology, Nagpur</p>
          <p><strong>Address:</strong> BSNL - Regional Telecom Training Centre, Seminary Hills, Nagpur, Maharashtra, India - 440006</p>
        </div>
        <div className='mapContainer'>
          <h2>Location Map</h2>
          <iframe
            title='IIIT Nagpur Location'
            width='100%'
            height='300'
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.174167316176!2d79.0492732149288!3d21.15594618602048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd568d3cfd7f4b1%3A0xd16c1efbfcf1763a!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1626281157348!5m2!1sen!2sin'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
