"use client";

import { useEffect, useState } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Next.js", level: 70 },

];

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div id="about" className="grid grid-cols-1 font-serif md:grid-cols-2 gap-12  bg-black text-white p-8 md:p-16">
      
      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="text-lg">{skill.name}</p>
              <div className="w-full h-4 bg-gray-700 rounded-lg overflow-hidden">
                <div
                  className={`h-full bg-blue-500 transition-all duration-1000 ease-in-out`}
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Me Section */}
    {/* About Me Section */}
<div>
  <h2 className="text-3xl font-semibold mb-6">About Me</h2>
  <p className="text-gray-400 leading-relaxed">
  I am a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, TypeScript, 
  and modern frameworks like React and Next.js. I specialize in building clean, scalable, 
  and user-friendly web applications that enhance user experience. With a strong foundation 
  in responsive design and performance optimization, I ensure that every project is both 
  functional and visually appealing.
  <br /><br />
  My skill set includes Tailwind CSS, Bootstrap, and Material UI, allowing me to craft 
  sleek, efficient UI components. I focus on writing maintainable, structured code while 
  prioritizing accessibility, cross-browser compatibility, and mobile-first design. Problem-solving 
  is at the core of my development process, whether it’s debugging issues or optimizing website speed.
  <br /><br />
  Beyond coding, I am committed to continuous learning and staying updated with industry trends. 
  I actively engage with developer communities, contribute to open-source projects, and explore 
  emerging technologies. My goal is to build innovative digital experiences that not only meet 
  business needs but also provide users with seamless and engaging interactions.
</p>

</div>


    </div>
  );
};

export default About;
