import React, { useState, useEffect } from 'react';
import styles from './style/mystyle.module.css';
import Aboutme from './component/aboutme';
import Skills from './component/skills';
import ProjectAlbum from './component/ProjectAlbum';
import Services from './component/services';
import Projects from './component/projects';
import ProgressBar from 'react-scroll-progress-bar';
import img1 from './assets/images/Almuhasba 1.png';
import img2 from './assets/images/Servics-usa.png';
import img3 from './assets/images/FYP.png';
import img4 from './assets/images/Saudibank limited.png';
import img5 from './assets/images/stripePage.png';
import img6 from './assets/images/Apart-luxury.jpg';
import img7 from './assets/images/Mercurysolsnew.png';
import ieltsAiExpert from './assets/images/IELTS_AI_Expert_1.png';
import ieltsAiExpertSecond from './assets/images/IELTS_AI_Expert_2.png';
import ieltsAiExpertThird from './assets/images/IELTS_AI_Expert.png';
import nivessa from './assets/images/nivessa_1.png';
import nivessaSecond from './assets/images/nivessa_2.png';
import nivessaThird from './assets/images/nivessa_3.png';
import way2trip from './assets/images/WAY2TRIP_1.png';
import way2tripSecond from './assets/images/WAY2TRIP_2.png';
import way2tripThird from './assets/images/WAY2TRIP_3.png';
import aquaticExpress from './assets/images/Aquatic Express Shipping 1.png';
import ParticleField from './component/ParticleField';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';

function App() {
  const [activeHeroProject, setActiveHeroProject] = useState(0);
  const heroProjects = [
    { title: 'IELTS AI Expert', image: ieltsAiExpert },
    { title: 'Nivessa', image: nivessa },
    { title: 'WAY2TRIP', image: way2trip },
    { title: 'Aquatic Express', image: aquaticExpress },
  ];

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveHeroProject((current) => (current + 1) % heroProjects.length);
    }, 3500);

    return () => clearInterval(rotation);
  }, [heroProjects.length]);

  const photos = [
    { src: img1, width: 800, height: 600 },
    { src: img2, width: 1000, height: 600 },
    { src: img3, width: 900, height: 600 },
    { src: img4, width: 800, height: 600 },
    { src: img6, width: 800, height: 600 },
    { src: img7, width: 800, height: 600 },
    { src: img5, width: 800, height: 600 },
    { src: img4, width: 600, height: 600 },
    { src: img1, width: 800, height: 600 },
    { src: ieltsAiExpertSecond, width: 800, height: 600 },
    { src: ieltsAiExpertThird, width: 800, height: 600 },
    { src: nivessa, width: 800, height: 600 },
    { src: nivessaSecond, width: 800, height: 600 },
    { src: nivessaThird, width: 800, height: 600 },
    { src: way2trip, width: 800, height: 600 },
    { src: way2tripSecond, width: 800, height: 600 },
    { src: way2tripThird, width: 800, height: 600 },
  ];

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const openCertificate = () => {
    const a = document.createElement('a');
    a.href = 'https://drive.google.com/drive/folders/1YZvqG7g2PUk8va_BUGfben1k8J3v1vGV';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };

  return (
    <>
      <ParticleField />
      <div className='w-[50px] mx-auto overflow-hidden'>
        <ProgressBar bgcolor='#3FFF00' />
        <div className='container-fluid' style={{ background: 'var(--cyber-bg)' }}>
          {/* Navbar */}
          <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
            <a className={`navbar-brand mt-4 ml-4 ${styles.navbarText}`} href='#'>
              <h5 className={styles.navbarWordmark}>
                <span className={styles.navbarFirstName}>Azam</span>
                <span className={styles.navbarLastName}>Ali</span>
              </h5>
            </a>
            <button
              className='navbar-toggler mt-4'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              style={{ color: 'white' }}
            >
              <span className='navbar-toggler-icon bg-white rounded'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <div className='col-sm-7'></div>
            </div>
          </nav>

          {/* Hero */}
          <div className={`row mt-3 ${styles.animatedText}`}>
          </div>
          {/*
                  <svg width='18' height='18' fill='#94a3b8' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'/></svg>
                </a>
                <a href='https://instagram.com/azamali7030' target='_blank' rel='noopener noreferrer' className={styles.navSocialIcon}>
                  <svg width='18' height='18' fill='#94a3b8' viewBox='0 0 16 16'><path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'/></svg>
                </a>
                <a href='https://wa.me/+923327387008' target='_blank' rel='noopener noreferrer' className={styles.navSocialIcon}>
                  <svg width='18' height='18' fill='#94a3b8' viewBox='0 0 16 16'><path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'/></svg>
                </a>
                <a href='https://www.linkedin.com/in/azam-ali-455402255/' target='_blank' rel='noopener noreferrer' className={styles.navSocialIcon}>
                  <svg width='18' height='18' fill='#94a3b8' viewBox='0 0 16 16'><path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'/></svg>
                </a>
              </div>
            </div>
          </nav>
          */}

          {/* Hero */}
          <div className={`row mt-3 ${styles.animatedText}`}>
            <div className={`mt-5 mb-2 ${styles.topTextDiv} col-sm-7`}>
              <div className={`text-white ${styles.staticText}`}>I'am</div>
              <ul style={{ position: 'relative', left: '-20px' }}>
                <h1 className='h1' aria-label="React.js, Next.js, Express Nest"></h1>
              </ul>
              <div className={`text-white ${styles.staticText}`}>Developer</div>
              <h4 className={`${styles.topDivText} mt-3`} style={{ color: '#94a3b8' }}>
                I build fast, scalable web experiences that turn ambitious ideas into real products.
              </h4>
              <div className={`${styles.navbarButton} mt-3`} style={{ marginLeft: '180px', display: 'inline-flex', width: '130px', justifyContent: 'center' }} onClick={openCertificate}>
                Certificate
              </div>

            </div>
            <div className='col-sm-5'>
              <div className={styles.heroProjectShowcase} aria-label="Featured projects">
                {heroProjects.map((project, index) => {
                  const position = (index - activeHeroProject + heroProjects.length) % heroProjects.length;

                  return (
                    <div
                      key={project.title}
                      className={`${styles.heroProjectCard} ${styles[`heroProjectCard${position}`]}`}
                    >
                      <img src={project.image} alt={project.title} />
                      <span>{project.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* About Me */}
          <div id="about"><Aboutme /></div>

          {/* Experience */}
          <div className={`${styles.experienceSection} orbital-section mt-5`}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}><svg width="8" height="8" viewBox="0 0 8 8" fill="#3FFF00"><circle cx="4" cy="4" r="4"/></svg>Career</div>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <p className={styles.sectionSubtitle}>
                My professional journey building scalable web applications for startups and agencies.
              </p>
            </div>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineCardHeader}>
                    <div>
                      <h3 className={styles.timelineCompany}>Mercurysole</h3>
                      <p className={styles.timelineRole}>MERN Stack Developer</p>
                    </div>
                    <span className={styles.timelineDate}>2022 – 2025</span>
                  </div>
                  <p className={styles.timelineText}>Built dynamic web applications, optimized backend architecture, and improved user engagement with scalable MERN solutions.</p>
                  <div className={styles.timelineTags}>
                    <span className={styles.timelineTag}>React</span>
                    <span className={styles.timelineTag}>Node.js</span>
                    <span className={styles.timelineTag}>Express</span>
                    <span className={styles.timelineTag}>MongoDB</span>
                    <span className={styles.timelineTag}>REST API</span>
                  </div>
                  <ul className={styles.timelineList}>
                    <li><span className={styles.timelineListIcon}>▹</span>Delivered responsive interfaces and API-driven workflows.</li>
                    <li><span className={styles.timelineListIcon}>▹</span>Improved performance with clean architecture and caching.</li>
                  </ul>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineCardHeader}>
                    <div>
                      <h3 className={styles.timelineCompany}>G-Teach Solution</h3>
                      <p className={styles.timelineRole}>MERN Stack Developer</p>
                    </div>
                    <span className={styles.timelineDate}>2025 – Present</span>
                  </div>
                  <p className={styles.timelineText}>Contributing to scalable and high-performance web applications while collaborating with a high-performing team to deliver modern business solutions.</p>
                  <div className={styles.timelineTags}>
                    <span className={styles.timelineTag}>React</span>
                    <span className={styles.timelineTag}>Node.js</span>
                    <span className={styles.timelineTag}>TypeScript</span>
                    <span className={styles.timelineTag}>PostgreSQL</span>
                    <span className={styles.timelineTag}>AWS</span>
                  </div>
                  <ul className={styles.timelineList}>
                    <li><span className={styles.timelineListIcon}>▹</span>Led feature delivery across React, Node.js, and MongoDB.</li>
                    <li><span className={styles.timelineListIcon}>▹</span>Enabled fast, secure applications for real users.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Skills />
          <Services />
          <div id="projects"><Projects /></div>

          {/* Project Album */}
          <div className='mt-5 orbital-section' style={{ padding: '2rem 0' }}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}><svg width="8" height="8" viewBox="0 0 8 8" fill="#3FFF00"><circle cx="4" cy="4" r="4"/></svg>Gallery</div>
              <h2 className={styles.sectionTitle}>Project Album</h2>
              <p className={styles.sectionSubtitle}>
                A visual showcase of projects I have designed and developed.
              </p>
            </div>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
              <ProjectAlbum photos={photos} />
            </div>
          </div>
          <div className='fixed-top' style={{ top: '90%', left: '90%', zIndex: 999 }}>
            <div className={`${styles.bottomToTop} top-to-btm`}>
              {showTopBtn && (
                <span className='icon-position icon-style' onClick={goToTop}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#3FFF00' className='bi bi-arrow-up-circle-fill' viewBox='0 0 16 16'>
                    <path d='M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z' />
                  </svg>
                </span>
              )}
            </div>
          </div>

          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
