import React, { useState } from 'react';
import { SiReact, SiNodedotjs, SiJavascript, SiTailwindcss, SiMongodb, SiHtml5, SiCss3, SiRedux } from 'react-icons/si';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const skillList = [
  { name: 'React', icon: <SiReact color="#61dafb" size={56} /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" size={56} /> },
  { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" size={56} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" size={56} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47a248" size={56} /> },
  { name: 'HTML5', icon: <SiHtml5 color="#e44d26" size={56} /> },
  { name: 'CSS3', icon: <SiCss3 color="#2965f1" size={56} /> },
  { name: 'Redux', icon: <SiRedux color="#764abc" size={56} /> },
];

const projects = [
  
  {
    title: 'Gas Booking',
    desc: 'A simple LPG booking interface with payment status flow.',
    image: '/gas.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB','Bootstrap'],
    links: {
      frontend: 'https://github.com/kirubasar/gasbooking-frontend.git',
      backend: 'https://github.com/kirubasar/gasbooking-backend.git',
      live: 'https://gasfront.netlify.app/'
    }
  },
  {
    title: 'Weather App',
    desc: 'Weather dashboard showing conditions by city and country.',
    tech: ['HTML', 'CSS', 'Javascript'],
    image: '/weather.png',
    links: {
      code: 'https://github.com/kirubasar/Task-11.git',
      live: 'https://restweather.netlify.app/'
    }
  },
  {
    title: 'Setup Course Navigation with React Router',
    desc: 'Create a React web app using React Router DOM that includes navigation links for All pages.',
    tech: ['React', 'Bootstrap'],
    image: '/route.png',
    links: {
      code: 'https://github.com/kirubasar/React-Task04.git',
      live: 'https://react-router-dompage.netlify.app/'
    }
  },
  {
    title: 'Zen Class Project',
    desc: 'A collection of exercises and mini-apps built during Zen Class.',
    tech: ['MongoDB'],
    image: '/zen.jpg',
    links: {
      code: 'https://github.com/kirubasar/MongoDB-Task02.git',
      live: 'https://docs.google.com/document/d/1R_nDYTSm2ZcBNS5FLq8R_QpRaA_qK043CxVcptDc-1Q/edit?tab=t.0'
    }
  }

  
];

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will respond soon.");
  };

  return (
    <div className={darkMode ? 'bg-dark text-white min-vh-100' : 'bg-light text-dark min-vh-100'} style={{ fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-light bg-white border-bottom border-light'}`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">Srikiruba S</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item">
                <button className={`btn btn-sm ms-lg-3 ${darkMode ? 'btn-warning' : 'btn-outline-dark'}`} onClick={() => setDarkMode(v => !v)} aria-label="Toggle theme">
                  {darkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-5" style={{paddingTop: '5.5rem'}}> 
        <div className="container">
          <div className="text-center py-5">
            <img src="/profile.jpg" alt="srikiruba" className="rounded-circle border border-primary" style={{width:128, height:128,objectFit:'cover',borderWidth: '4px'}} />
            <h1 className="fw-bold mt-3" style={{fontSize: '3.2rem'}}>I'm <span className="text-primary">srikiruba</span></h1>
            <p className="text-primary fw-semibold mb-3" style={{fontSize:'1.25rem'}}>Full-Stack Developer</p>
            <p className={`mx-auto mb-4 ${darkMode ? 'text-light' : 'text-muted'}`} style={{ maxWidth: 760, fontSize:'1.05rem' }}>
              Passionate web developer focused on building innovative and scalable applications. I specialize in crafting clean, efficient, and maintainable code using modern web technologies.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
              <a href="/srikiruba.pdf" download className="btn btn-primary px-4"><i className="bi bi-download me-1"></i>Download Resume</a>
              <a href="#contact" className="btn btn-outline-primary px-4">Contact</a>
            </div>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <a href="https://github.com/kirubasar" target="_blank" rel="noopener noreferrer" className="fs-4 text-decoration-none text-dark-emphasis"><i className="bi bi-github me-1"></i></a>
              <a href="https://www.linkedin.com/in/srikiruba-s-a722b5368" target="_blank" rel="noopener noreferrer" className="fs-4 text-decoration-none text-primary"><i className="bi bi-linkedin me-1"></i></a>
              <a href="mailto:srikiruba999@gmail.com" target="_blank" rel="noopener noreferrer" className="fs-4 text-decoration-none text-danger"><i className="bi bi-envelope me-1"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={darkMode ? "bg-dark py-5" : "bg-light py-5"}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-5 text-center">
              <img src="/about.jpg" alt="About" className="img-fluid rounded-4 shadow-sm" style={{maxWidth:320}} />
            </div>
            <div className={`col-md-7 d-flex flex-column justify-content-center h-100 ${darkMode ? 'text-white' : 'text-dark'}`}>
              <h2 className="fw-bold mb-3 text-start" style={{fontSize: '2.4rem'}}>
                About <span className="text-primary fw-bold">Me</span>
              </h2>
              <p className={`fw-semibold text-start mb-2 ${darkMode ? 'text-light' : ''}`} style={{fontSize: '1.21rem'}}>
                MERN Stack Developer with Passion for Building Web Solutions
              </p>
              <p className={`mb-2 text-start ${darkMode ? 'text-light' : ''}`} style={{fontSize: '1.10rem'}}>
                I'm Srikiruba, a dedicated full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With a strong foundation in both frontend and backend technologies, I create seamless, responsive, and scalable web applications.
              </p>
              <p className={`mb-4 text-start ${darkMode ? 'text-light' : ''}`} style={{fontSize: '1.09rem'}}>
                I started exploring web development out of curiosity about how websites are built, and it quickly became a passion for creating interactive and seamless digital experiences. I focus on building clean, efficient solutions that are both functional and enjoyable to use.
              </p>
              <div className="row g-3 mt-2 mb-1">
                <div className="col-md-6 col-12">
                  <div style={{
                    background: darkMode ? '#23272F' : '#f4f5f7',
                    borderRadius: 18,
                    padding: '16px 20px',
                    minWidth:200,
                    fontSize:'.98rem',
                    boxShadow: darkMode ? '0 1px 10px rgba(0,0,0,.11)' : '0 2px 14px #e8ecf1',
                    border: 'none',
                    textAlign: 'left'
                  }}>
                    <span style={{color:'#2769d9', fontWeight: 700, fontSize:'1.08rem'}}>Frontend Focus</span><br/>
                    <span style={{color: darkMode ? '#dee2f3':'#49505c'}}>JavaScript, React.js, Redux, HTML, CSS, Tailwind CSS, Bootstrap</span>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div style={{
                    background: darkMode ? '#23272F' : '#f4f5f7',
                    borderRadius: 18,
                    padding: '16px 20px',
                    minWidth:200,
                    fontSize:'.98rem',
                    boxShadow: darkMode ? '0 1px 10px rgba(0,0,0,.11)' : '0 2px 14px #e8ecf1',
                    border: 'none',
                    textAlign: 'left'
                  }}>
                    <span style={{color:'#2769d9', fontWeight: 700, fontSize:'1.08rem'}}>Backend Focus</span><br/>
                    <span style={{color: darkMode ? '#dee2f3':'#49505c'}}>Node.js, Express, MongoDB, RESTful APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Icon Cards */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{letterSpacing: '.01em'}}>My <span className="text-primary">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Technologies I use to build modern and scalable web applications.
            </p>
         
          <div className="row g-4 justify-content-center">
            {skillList.map((skill) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={skill.name}>
                <div
                  className="card mx-auto w-100 h-100 text-center p-4"
                  style={{
                    background: '#fff',
                    borderRadius: 20,
                    border: '1.5px solid #f3f3f3',
                    color: '#222',
                    boxShadow: '0 2px 16px rgba(46, 51, 56, 0.07)',
                    transition: 'transform .2s, box-shadow .2s, border .2s',
                    cursor: 'pointer',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(13, 110, 253, 0.10)';
                    e.currentTarget.style.border = '1.5px solid #0d6efd';
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(46, 51, 56, 0.07)';
                    e.currentTarget.style.border = '1.5px solid #f3f3f3';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <div className="mb-3">{skill.icon}</div>
                  <div className="fw-bold fs-5" style={{ color: "#23272F" }}>{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`section-block pb-5${darkMode ? ' dark' : ''}`}>
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{letterSpacing: '.01em'}}>My <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Here are some of my recent projects showcasing my skills and expertise.
            </p>
          <div className="row g-4">
            {projects.map((p) => (
              <div className="col-md-4" key={p.title}>
                <div className={`card h-100 shadow-sm ${darkMode ? 'bg-secondary text-white' : 'bg-white'}`}
                  style={{
                    borderRadius: 20,
                    border: '1.5px solid #f3f3f3',
                    boxShadow: '0 2px 16px rgba(46, 51, 56, 0.07)',
                    transition: 'transform .2s, box-shadow .2s, border .2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(13, 110, 253, 0.10)';
                    e.currentTarget.style.border = '1.5px solid #0d6efd';
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(46, 51, 56, 0.07)';
                    e.currentTarget.style.border = '1.5px solid #f3f3f3';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <img src={p.image} className="card-img-top" alt={p.title} style={{height:200,objectFit:'cover', borderRadius:20, borderBottomLeftRadius:0, borderBottomRightRadius:0}} />
                  <div className="card-body d-flex flex-column align-items-center text-center px-4 py-3">
                    <h5 className="fw-bold mb-2 card-title">{p.title}</h5>
                    <p className={`card-text mb-2 ${darkMode ? 'text-light' : 'text-secondary'}`} style={{fontSize:'1rem'}}>{p.desc}</p>
                    <div className="flex-wrap mb-2 d-flex gap-2 justify-content-center">
                      {p.tech && p.tech.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            display: 'inline-block',
                            background: '#fff',
                            color: '#23272F',
                            border: '1.5px solid #E4E9F0',
                            borderRadius: 18,
                            padding: '0.6em 1.1em',
                            fontWeight: 500,
                            fontSize: '1em',
                            margin: '0 0.3em 0.3em 0',
                            transition: 'border-color 0.2s, box-shadow 0.2s',
                            cursor: 'default'
                          }}
                          onMouseOver={e => {
                            e.currentTarget.style.border = '1.5px solid #0d6efd';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,110,253,.14)';
                          }}
                          onMouseOut={e => {
                            e.currentTarget.style.border = '1.5px solid #E4E9F0';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2 mt-auto mb-0 pt-2 justify-content-center">
                      {p.links && p.links.frontend && (
                        <a href={p.links.frontend} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">Frontend Code</a>
                      )}
                      {p.links && p.links.backend && (
                        <a href={p.links.backend} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">Backend Code</a>
                      )}
                      {!p.links?.frontend && !p.links?.backend && p.links?.code && (
                        <a href={p.links.code} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">Code</a>
                      )}
                      {p.links && p.links.live && (
                        <a href={p.links.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Live</a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with icons */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{letterSpacing: '.01em'}}>Get In <span className="text-primary">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3"><MdLocationOn size={32} color="#0d6efd" className="me-2" /><span className="fw-semibold">Location:</span>
                  <span className="ms-2">Chennai, India</span>
                </div>
                <div className="d-flex align-items-center"><MdEmail size={28} color="#0d6efd" className="me-2" /><span className="fw-semibold">Email:</span>
                  <span className="ms-2">srikiruba999@gmail.com</span>
                </div>
              </div>
              <form className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-12">
                  <textarea rows="5" className="form-control" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12 d-grid">
                  <button type="button" className="btn btn-primary" onClick={handleSendMessage}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-4 border-top ${darkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container text-center text-secondary">
          © {new Date().getFullYear()} Srikiruba. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;