"use client";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "ATM Machine",
    description: "An ATM simulation project with user authentication.",
    image: "/project1.png",
    link: "https://updated-atm.vercel.app/",
  },
  {
    id: 2,
    title: "Simple Calculator",
    description: "A basic calculator for arithmetic operations.",
    image: "/project2.png",
    link: "https://calculator-neon-five-60.vercel.app/",
  },
  {
    id: 3,
    title: "Number Guessing Game",
    description: "A fun game where you guess a random number.",
    image: "/project3.png",
    link: "https://number-game-bice.vercel.app/",
  },
  {
    id: 4,
    title: "Quiz App",
    description: "An interactive quiz application.",
    image: "/project4.png",
    link: "https://quize-sage.vercel.app/",
  },
  {
    id: 5,
    title: "Word Counter",
    description: "A tool to count words and characters in text.",
    image: "/project5.png",
    link: "https://word-counter-eight-chi.vercel.app/",
  },
  {
    id: 6,
    title: "To-Do List",
    description: "A simple to-do list application.",
    image: "/project6.png",
    link: "https://todo-list-eta-ecru.vercel.app/",
  },
  {
    id: 7,
    title: "My Bank",
    description: "A personal banking simulation app.",
    image: "/project7.png",
    link: "https://my-bank-nu.vercel.app/",
  },
  {
    id: 8,
    title: "Student Management System",
    description: "A system for managing student records.",
    image: "/project8.png",
    link: "https://student-manegment-system.vercel.app/",
  },
  {
    id: 9,
    title: "Currency Converter",
    description: "A tool to convert currencies in real-time.",
    image: "/project9.png",
    link: "https://currency-converter-tawny-zeta.vercel.app/",
  },
  {
    id: 10,
    title: "Countdown Timer",
    description: "A simple countdown timer application.",
    image: "/project10.png",
    link: "https://countdown-timer-iota-neon.vercel.app/",
  },
  {
    id: 11,
    title: "My Resume",
    description: "An online resume showcase.",
    image: "/project11.png",
    link: "https://milestone-1-sage.vercel.app/",
  },
  {
    id: 12,
    title: "Resume Builder",
    description: "An app to create professional resumes.",
    image: "/project12.png",
    link: "https://milestone-5-eta-two.vercel.app/",
  },
  {
    id: 13,
    title: "Blog Website",
    description: "A blog platform for sharing ideas.",
    image: "/project13.png",
    link: "https://blogwebsitemilestone3.vercel.app/",
  },
  {
    id: 14,
    title: "E-Commerce Website",
    description: "An online shopping platform.",
    image: "/project14.png",
    link: "https://ecomer-wesite-3.vercel.app/",
  },
  {
    id: 15,
    title: "Solar Tech Solutions",
    description: "An e-commerce site for solar tech solutions.",
    image: "/project15.png",
    link: "https://solar-tech-solutionsnext-js-website.vercel.app/",
  },
  {
    id: 16,
    title: "Car Rental E-Commerce",
    description: "A car rental booking platform.",
    image: "/project16.png",
    link: "https://hacaton-3-nhjy.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <div id="projects" className="bg-black text-white  px-6 font-serif">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-full h-40 bg-gray-600 rounded-lg flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={150}
                className="rounded-lg h-40 w-full"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Visit Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
