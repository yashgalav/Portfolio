import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import WorkCard from './WorkCard';
import CustomLottie from './CustomLottie';
import Heading from './Heading';
import SubHeading from './SubHeading';

const Work = () => {
  const darkMode = useRecoilValue(darkAtom);

  const navigateToPayMentApp = () => {
    window.open("", "_blank")
  }

  // 
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Social Media App",
      category: "Mobile Development",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Portfolio Website",
      category: "Frontend Development",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Dashboard Design",
      category: "UI/UX Design",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto ">
        <h1 className=" text-5xl  text-purple-700 md:text-6xl font-bold text-center mb-4">My Work</h1>

        <SubHeading customClass={"text-center mb-12"} text={"Check out some of my latest projects"} />

        <div className="grid  md:grid-cols-3 gap-8">
          <WorkCard
            title={"💳 MERN Stack Payment App"}
            description={
              <>✨ <strong>Key Features:</strong>
                  <ul>
                    <li>🔐 <strong>User Authentication</strong> (JWT-based)</li>
                    <li>💸 <strong>Send & Receive Payments</strong> instantly</li>
                    <li>👤 <strong>Profile & Wallet Management</strong></li>
                    <li>📱 <strong>Responsive Design</strong> for mobile & desktop</li>
                  </ul>
              </>
            }
          onclick={navigateToPayMentApp}
          />
        </div>
      </div>
    </section>
  );
};

export default Work