"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero= () => {
  return (
    <div className="grid grid-cols-1 font-serif md:grid-cols-2  bg-black text-white p-6 md:p-12 gap-8 items-center">
      
      {/* Left Side - Image */}
      <div className="flex justify-center">
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
          <Image
            src="/IMAGE.PNG"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
        <h1 className="text-3xl font-semibold ">
          Hi! <span className=" font-serif font-bold ">I am Abdullah</span>
        </h1>
        <p className="text-gray-400 mt-4">
          I am a Front-End Developer with a passion for building clean, efficient, 
          and engaging websites. Specializing in HTML, CSS, JavaScript, TypeScript, 
          and modern frameworks like React and Next.js, I enjoy transforming design ideas 
          into interactive, responsive web experiences.
        </p>

        {/* Social Icons - Centered on Mobile, Right Aligned on Desktop */}
        <div className="flex space-x-6 mt-6 ">
          <a href="https://www.facebook.com/share/1DfDJn7bV1/" className="text-gray-400 hover:text-blue-500 transition duration-300 text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl"><FaTwitter /></a>
          <a href="https://www.instagram.com/muhammadabdullah6156?igsh=MW04bWc1YnV4N3Fsbg==" className="text-gray-400 hover:text-pink-500 transition duration-300 text-xl"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-608284302/" className="text-gray-400 hover:text-blue-700 transition duration-300 text-xl"><FaLinkedinIn /></a>
        </div>
      </div>
    
      
    </div>
  );
};

export default Hero;
