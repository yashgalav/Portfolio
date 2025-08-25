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
    window.open("https://github.com/yashgalav/payment-webapp", "_blank")
  }

  const navigateToDiwaliLux = () => {
    window.open("https://diwalilux.com/", "_blank")
  }

  const navigateToDiwaliLuxGit = () => {
    window.open("https://github.com/yashgalav/DiwaliLux", "_blank")
  }

  const navigateToMedium = () => {
    window.open("https://medium-lite.vercel.app/blogs", "_blank")
  }

  const navigateToMediumGit = () => {
    window.open("https://github.com/yashgalav/medium", "_blank")
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
            title={"🛒 E-commerce Website (Client Work)"}
            link={"https://www.youtube.com/embed/_w5dV1ofba8"}
            github={navigateToDiwaliLuxGit}
            description={
              <>
                <strong>✨ Key Features:</strong>
                <ul >
                  <li>🔐 <strong>Authentication:</strong> Secure login & signup</li>
                  <li>🛍️ <strong>Product Catalog:</strong> Browse & search products</li>
                  <li>🛒 <strong>Shopping Cart:</strong> Add, update & remove items</li>
                  <li>💳 <strong>Payments:</strong> Integrated checkout system</li>
                  <li>📦 <strong>Orders:</strong> Track purchases & history</li>
                  <li>📱 <strong>Responsive:</strong> Optimized for all devices</li>
                </ul>
              </>
            }
            onclick={navigateToDiwaliLux}
          />
           <WorkCard
            title={"📝 Medium Clone (Full-Stack Blog Platform)"}
            link={"https://www.youtube.com/embed/lBiszrn4Suo"}
            github={navigateToMediumGit}
            description={
              <>
                <strong>✨ Key Features:</strong>
                <ul>
                  <li>🔐 <strong>Authentication:</strong> Secure login with JWT</li>
                  <li>✍️ <strong>Publishing:</strong> Create & publish articles</li>
                  <li>📖 <strong>Explore:</strong> Browse & read blogs</li>
                  <li>👤 <strong>Profiles:</strong> Manage user accounts</li>
                  <li>📱 <strong>Responsive:</strong> Works on all devices</li>
                </ul>
              </>

            }
            onclick={navigateToMedium}
          />

          <WorkCard
            title={"💳 MERN Stack Payment App"}
            link={"https://www.youtube.com/embed/fmXTuLvFlRU"}
            github={navigateToPayMentApp}
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
            
          />

        </div>
      </div>
    </section>
  );
};

export default Work