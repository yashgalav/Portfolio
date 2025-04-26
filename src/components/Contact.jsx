import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';

const Contact = () => {
  const darkMode = useRecoilValue(darkAtom);
  

  const navigate = useNavigate();

  const navigateToGitHub = () =>{
    window.open("https://github.com/yashgalav","_blank")
  }

  const navigateToLinkedIn = () =>{
    window.open("https://linkedin.com/in/yash-kumar-78b8041b7","_blank")
  }
  const navigateToTwitter= () =>{
    window.open("https://linkedin.com/in/yash-kumar-78b8041b7","_blank")
  }
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ?`bg-gray-700` :`bg-gray-100`}`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ?`bg-gray-700` :`bg-gray-100`}`}
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className={`w-full px-4 py-2 rounded-lg ${darkMode ?`bg-gray-700` :`bg-gray-100`}`}
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>yashgalav12345@gmail.com</span>
            </div>
            <div className="flex space-x-4">
              <Link  className={`${darkMode ? `text-gray-300`:`text-gray-600`} hover:text-blue-600`} >
                <Github onClick = {navigateToGitHub} className="w-6 h-6" />
              </Link>
              <Link  className={`${darkMode ? `text-gray-300`:`text-gray-600`} hover:text-blue-600`} >
                <Linkedin onClick = {navigateToLinkedIn} className="w-6 h-6" />
              </Link>
              <Link className={`${darkMode ? `text-gray-300`:`text-gray-600`} hover:text-blue-600`} >
                <Twitter onClick = {navigateToTwitter}  className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact