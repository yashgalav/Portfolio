import { Code, Globe, Palette, Smartphone } from 'lucide-react';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import ServiceCard from './ServiceCard';
import serviceAnime from '/src/animations/service-anime.json'
import SubHeading from './SubHeading';
import CustomLottie from './CustomLottie';
import webAnime from "/src/animations/web-anime.json"
import uxAnime from "/src/animations/ux-anime.json"
import mobileAnime from "/src/animations/mobile-anime.json"

const Service = () => {
  const darkMode = useRecoilValue(darkAtom);



  const service = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive and dynamic web applications using modern technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Crafting beautiful and functional user interfaces"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences"
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className=" container mx-auto">

        <CustomLottie data={serviceAnime} customClass={'md:w-[60%]'} />

        <SubHeading customClass={"text-center  mb-12"} text={"What I can offer to help your business grow"} />

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            anime={webAnime}
            headingSize={"text-center md:text-3xl "}
            heading={"Web Development"}
            description={
              <>
                <ul class="space-y-3 text-lg leading-relaxed">
                  <li>🔷 <span class="font-semibold">Front-end Magic:</span> Building responsive & high-performance UIs with <strong>React.js</strong> & <strong>Next.js</strong></li>
                  <li>🔷 <span class="font-semibold">Back-end Power:</span> Creating secure & scalable APIs using <strong>Node.js + Express</strong> & <strong>Spring Boot (Java)</strong></li>
                  <li>🔷 <span class="font-semibold">Data Mastery:</span> Handling relational & NoSQL databases — <strong>PostgreSQL</strong>, <strong>MySQL</strong> & <strong>MongoDB</strong></li>
                  <li>🔷 <span class="font-semibold">Versatile Apps:</span> From sleek single-page apps to robust enterprise-grade systems</li>
                  <li>🔷 <span class="font-semibold">Full Journey:</span> Design ➝ Development ➝ Deployment with efficiency & quality</li>
                </ul>
              </>
            }
          />

          <ServiceCard
            anime={mobileAnime}
            headingSize={"text-center md:text-3xl md:mt-10 "}
            heading={"Mobile Development"}
            imageClass={"md:mt-14"}
            description={<section class="max-w-3xl mx-auto p-6">
              <ul class="space-y-3 text-lg leading-relaxed">
                <li>🔷 <span class="font-semibold">Cross-Platform Power:</span> Building apps with <strong>Flutter</strong> from a single codebase for <strong>Android</strong> & <strong>iOS</strong></li>
                <li>🔷 <span class="font-semibold">Fast Development:</span> Leveraging Flutter’s hot reload & rapid iteration for quicker delivery</li>
                <li>🔷 <span class="font-semibold">Engaging UI:</span> Creating visually appealing & high-performance apps with expressive Flutter widgets</li>
                <li>🔷 <span class="font-semibold">Versatile Solutions:</span> From business apps & startup MVPs to feature-rich mobile products</li>
                <li>🔷 <span class="font-semibold">Robust Architecture:</span> Clean code, responsive design & efficient state management for scalability & reliability</li>
              </ul>
            </section>}
          />

          <ServiceCard
            anime={uxAnime}
            headingSize={"text-center md:text-3xl md:mt-10 mt-5"}
            heading={"🎨 UI/UX Design"}
            imageClass={"md:mt-14"}
            description={<ul class="space-y-3 text-lg leading-relaxed">
              <li>🔷 <span class="font-semibold">User-Centered Design:</span> Creating intuitive interfaces that enhance usability & deliver memorable digital experiences</li>
              <li>🔷 <span class="font-semibold">Behavior-Driven Approach:</span> Aligning user needs with business goals through thoughtful layouts & clear navigation</li>
              <li>🔷 <span class="font-semibold">Responsive Focus:</span> Designing adaptive screens that look great & work seamlessly on all devices</li>
              <li>🔷 <span class="font-semibold">End-to-End Process:</span> From wireframing & prototyping to polished final designs</li>
              <li>🔷 <span class="font-semibold">Modern Tools & Best Practices:</span> Leveraging the latest design systems & workflows for engaging user journeys</li>
            </ul>}
          />
        </div>
      </div>
    </div>
  );
};

export default Service