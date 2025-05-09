import React from 'react';
import { Download, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import Heading from './Heading';
import { TypeAnimation } from 'react-type-animation';
import SubHeading from './SubHeading';
import { textColor } from '../store/atoms/CustomColor';
import Banner from './Banner';
import Footer from './Footer';
import NormalButton from './NormalButton';

const Home = () => {
  const navigate = useNavigate();
  const darkMode = useRecoilValue(darkAtom);
  const customTextColor = useRecoilValue(textColor);
  const navigateToGitHub = () =>{
    window.open("https://github.com/yashgalav","_blank")
  }


  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className='flex flex-col overflow-x-hidden relative'>
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <Heading text={"Hi there!"} />
            <div className='flex flex-row gap-2  ' >
              <Heading text={`I'm`} /> <Heading size={'font-bold'} text={"YASH KUMAR"} color={customTextColor} />
            </div>

            <TypeAnimation
              sequence={
                [
                  'Software Developer',
                  3000,
                  'MERN Stack Developer',
                  3000,
                  'Java Full Stack Developer',
                  3000,
                  'Open Source Contributor',
                  3000,
                  'Freelancer',
                  3000,
                ]
              }
              speed={20}
              repeat={Infinity}
              wrapper="div"
              className={`mt-28 text-3xl md:text-4xl ${customTextColor} font-`}
            />


            <SubHeading text={`Software Engineer with 3+ years of experience in building exceptional digital experiences`} />

            <div className="flex space-x-4">
              
              <NormalButton
                icon={<Github size={20} />}
                buttonName={"GitHub"}
                onclick={navigateToGitHub}
              />
              <button onClick={handleClick} className={`px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:text-white hover:bg-purple-600 }`}>
                Contact Me
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="/src/assets/yash_hero.png"
              alt="Professional headshot placeholder"
              className=" w-64 h-auto md:w-96 md:h-auto object-cover mx-auto "
            />
          </div>
        </div>

      </div>
      <div >
        <Banner />
      </div>
    </div>
  );
};

export default Home;