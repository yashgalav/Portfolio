import { Mail, PhoneCall } from 'lucide-react';
import React, { useRef } from 'react'
import { Link, } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const darkMode = useRecoilValue(darkAtom);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const form = useRef();

  

  const navigateToGitHub = () => {
    window.open("https://github.com/yashgalav", "_blank")
  }

  const navigateToLinkedIn = () => {
    window.open("https://linkedin.com/in/yash-kumar-78b8041b7", "_blank")
  }
  const navigateToTwitter = () => {
    window.open("https://x.com/thenameisyaashh", "_blank")
  }
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(serviceID)
  console.log(templateID)

    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      publicKey
    )
      .then((result) => {
        alert('Message sent!');
        console.log(result.text);
      })
      .catch((error) => {
        alert('Message failed to send.');
        console.log(error);
      });
  };




  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-7xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center  mb-12">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <form onSubmit={sendEmail} ref={form} className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name= "name"
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? `bg-gray-700` : `bg-gray-100`}`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? `bg-gray-700` : `bg-gray-100`}`}
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? `bg-gray-700` : `bg-gray-100`}`}
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button  type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6 mb-10 md:mb-0">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <span>yashgalav12345@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneCall className="w-6 h-6 text-purple-600" />
              <span>+91 70489 36402</span>
            </div>
            <div className="flex space-x-4 ">
              <Link className={`${darkMode ? `text-gray-300` : `text-gray-600`} hover:text-purple-600`} >
                <FontAwesomeIcon icon={faGithub} onClick={navigateToGitHub} className="w-6 h-6" />
              </Link>
              <Link className={`${darkMode ? `text-gray-300` : `text-gray-600`} hover:text-purple-600`} >
                <FontAwesomeIcon onClick={navigateToLinkedIn} icon={faLinkedin} className="w-6 h-6" />
              </Link>
              <Link className={`${darkMode ? `text-gray-300` : `text-gray-600`} hover:text-purple-600`} >
                <FontAwesomeIcon onClick={navigateToTwitter} icon={faXTwitter} className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact