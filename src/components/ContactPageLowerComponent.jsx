import React from 'react'
import { darkAtom } from '../store/atoms/DarkAtom';
import { useRecoilValue } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, } from 'react-router-dom';
import { Mail, PhoneCall } from 'lucide-react';

export default function ContactPageLowerComponent() {
    const darkMode = useRecoilValue(darkAtom);
     const navigateToGitHub = () => {
        window.open("https://github.com/yashgalav", "_blank")
      }
    
      const navigateToLinkedIn = () => {
        window.open("https://linkedin.com/in/yash-kumar-78b8041b7", "_blank")
      }
      const navigateToTwitter = () => {
        window.open("https://x.com/thenameisyaashh", "_blank")
      }


  return (
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
  )
}
