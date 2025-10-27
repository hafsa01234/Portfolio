// App.js
import React, { useEffect } from 'react';
import './App.css'; // Assuming Tailwind is configured in index.css or here

// Components
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-blue-900 text-white p-4 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Ummey Hafsa</a>
        <ul className="flex space-x-6">
          <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-300">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-300">About</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="hover:text-blue-300">Skills</button></li>
          <li><button onClick={() => scrollToSection('education')} className="hover:text-blue-300">Education</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-300">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-blue-900 text-white pt-20">
    <div className="container mx-auto text-center px-4 animate-fadeIn">
      <img src="profile.jpeg" alt="Ummey Hafsa" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
      <h1 className="text-5xl font-bold mb-2">Ummey Hafsa</h1>
      <p className="text-xl mb-6">Computer Science Student | AI & ML Enthusiast</p>
      <a href="cv.pdf" download className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">Download CV</a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4 animate-fadeIn">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-700">
        Passionate Computer Science student with a strong interest in Artificial Intelligence and Machine Learning. Skilled in Python, data analysis, and building AI-based solutions. Eager to apply problem-solving and teamwork skills in innovative hackathon projects and learn from real-world challenges.
      </p>
    </div>
  </section>
);

const Skills = () => {
  useEffect(() => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900 animate-fadeIn">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="skill-item animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Technical Skills</h3>
            <div className="mb-4">
              <p className="font-medium">Python (Numpy, pandas, Matplotlib, Data Visualization)</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="90%" style={{ width: 0 }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">SQL</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="85%" style={{ width: 0 }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">HTML, CSS, JS</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="80%" style={{ width: 0 }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">Git and GitHub</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="75%" style={{ width: 0 }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">Collab</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="70%" style={{ width: 0 }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">Teamwork & Communication</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="95%" style={{ width: 0 }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Languages</h3>
            <div className="mb-4">
              <p className="font-medium">Bangla (Native)</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="100%" style={{ width: 0 }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">English (Fluent)</p>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-1000 ease-in-out" data-width="90%" style={{ width: 0 }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => (
  <section id="education" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-900 animate-fadeIn">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold text-blue-900">Bachelor of Computer Science and Engineering</h3>
          <p className="text-gray-600">Shanto Mariam University of Creative Technology</p>
          <p className="text-gray-500">Present</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold text-blue-900">HSC Higher Secondary Certificate (Science)</h3>
          <p className="text-gray-600">Akij Foundation School and College</p>
          <p className="text-gray-500">2020</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-semibold text-blue-900">SSC Secondary School Certificate (Science)</h3>
          <p className="text-gray-600">Dakshinkhan Girls Ideal High School and College</p>
          <p className="text-gray-500">2018</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-blue-900 text-white">
    <div className="container mx-auto px-4 text-center animate-fadeIn">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <p className="text-lg mb-4"><i className="fas fa-phone mr-2"></i> +8801973839368</p>
      <p className="text-lg mb-4"><i className="fas fa-envelope mr-2"></i> ummeummehafsa55@gmail.com</p>
      <p className="text-lg mb-8"><i className="fas fa-map-marker-alt mr-2"></i> Sector-14, Road-20(A), House-03, Uttara, Dhaka</p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:ummeummehafsa55@gmail.com" className="text-3xl hover:text-blue-300"><i className="fas fa-envelope"></i></a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2025 Ummey Hafsa. All rights reserved.</p>
  </footer>
);

const App = () => {
  useEffect(() => {
    // Any global effects if needed
  }, []);

  return (
    <div className="bg-gray-100 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;