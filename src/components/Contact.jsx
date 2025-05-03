import React, { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import emailjs from '@emailjs/browser';
import InputBox from './InputBox';
import ContactPageLowerComponent from './ContactPageLowerComponent';

const Contact = () => {
  const darkMode = useRecoilValue(darkAtom);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
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
    }
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
    
              <InputBox
                label={"Name"}
                name={"name"}
                placeholder={"Your name"}
                err={errors.name}
                value={formData.name}
                onchange={handleChange}
              />

              <InputBox
                label={"Email"}
                name={"email"}
                placeholder={"Your email"}
                err={errors.email}
                value={formData.email}
                onchange={handleChange}
              />
              
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  value= {formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ? `bg-gray-700` : `bg-gray-100`}`}
                  rows="4"
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          <ContactPageLowerComponent/>
        </div>
      </div>
    </section>
  );
};

export default Contact