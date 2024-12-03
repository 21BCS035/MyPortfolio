import "./App.css";
import React, { useState } from "react";
import { GitHub, Linkedin, Mail, Code, Award, Menu, X } from "react-feather";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "BetterMart",
      description: "Full-stack E-Commerce Platform",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      imageUrl:
        "https://t3.ftcdn.net/jpg/10/73/69/20/240_F_1073692084_4FUjX2hfQwsxTsTgTjbLVUqfGVWigFhh.jpg",
       
      githubLink: "https://github.com/21BCS035/BetterMart-Frontend",
      liveLink : "https://bettermart-ecom.netlify.app/",
    },
    {
      title: "Social Media Backend",
      description: "Social Media Application Backend",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
      githubLink: "https://github.com/21BCS035/socialvista",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683488869706-4152826ca919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Fusion HR Module",
      description: "HR Management System",
      technologies: ["Django", "HTML", "CSS", "Bootstrap"],
      githubLink: "https://github.com/21BCS035/Fusion",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMxrg2X3_kKpyuz1ZHCzQVplxOtQCOHAK0g&s",
    },
  ];

  const skills = [
    "C++",
    "HTML",
    "CSS",
    "Redux",
    "JavaScript",
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "MongoDB",
    "AWS",
    "Linux",
    "Git",
    "SQL",
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      name: "GitHub",
      url: "https://github.com/21BCS035",
    },
    {
      icon: <Linkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arpit-yadav-253bab248",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-between items-center p-4">
          <div className="text-red-600 text-2xl font-bold">ARPIT YADAV</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-red-600">
              About
            </a>
            <a href="#skills" className="hover:text-red-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-red-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-red-600">
              Contact
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 absolute top-full left-0 right-0">
            <div className="flex flex-col items-center space-y-4 p-4">
              <a href="#about" className="hover:text-red-600">
                About
              </a>
              <a href="#skills" className="hover:text-red-600">
                Skills
              </a>
              <a href="#projects" className="hover:text-red-600">
                Projects
              </a>
              <a href="#contact" className="hover:text-red-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <header className="relative pt-24 pb-16 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Arpit Yadav</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Development Engineer | Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="py-16 px-4 bg-black/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300">
            Hi, I'm Arpit Yadav, a passionate Software Developer! I'm a
            final-year Computer Science and Engineering student at IIITDM
            Jabalpur with a strong foundation in full-stack development and
            problem-solving. My journey in tech has been fueled by curiosity,
            persistence, and the joy of building impactful solutions. I strive
            to build scalable, user-friendly applications that solve real-world
            problems. With a keen interest in backend development and system
            design, I aim to grow as a software engineer and contribute to
            impactful projects.
          </p>
        </div>
      </section>

      <section id="skills" className="py-16 px-4 bg-black/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
             
              
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-red-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-600 flex items-center"
                      >
                        <GitHub className="mr-2" size={20} /> GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-600 flex items-center"
                      >
                        <Code className="mr-2" size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 px-4 bg-black/90">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="text-red-600 mr-4" size={40} />
                <h3 className="text-xl font-bold">Coding Platforms</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Solved 900+ coding questions on LeetCode and GFG</li>
                <li>• CodeChef Rating: 1500+</li>
                <li>• CodeForces Rating: 1250+ (Pupil)</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="text-red-600 mr-4" size={40} />
                <h3 className="text-xl font-bold">Professional Experience</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Amazon SDE Intern (May 2024 - July 2024)</li>
                <li>• Selected in HackOn with Amazon</li>
                <li>• Advanced to Round 3 out of 12,000+ teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-black/90">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Mail className="text-red-600" />
              <a
                href="mailto:ar5136874yadav@gmail.com"
                className="hover:text-red-600"
              >
                ar5136874yadav@gmail.com
              </a>
            </div>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://drive.google.com/file/d/13D3ERIK7bu5RD-ylxYme9omYWVoWmZRD/view?usp=drivesdk"
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black/90 py-6 text-center">
        <p className="text-gray-500">
          © 2024 Arpit Yadav. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
