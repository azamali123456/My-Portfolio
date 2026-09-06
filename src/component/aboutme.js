import React from "react";
import styles from "../style/mystyle.module.css";
import me from "../assets/images/profile-image-2.jpeg";

function Aboutme() {
  return (
    <section className="container-fluid" style={{ background: 'var(--cyber-bg)' }}>
      <div className={`${styles.aboutMeSection} container my-5 p-4 p-md-5`}>
        <div className="row align-items-center no-gutters">
          <div className="col-lg-4 mb-5 mb-lg-0 pr-lg-5">
            <div className={styles.aboutMeProfile}>
              <div className={styles.aboutMeImage}>
                <img src={me} alt="Azam Ali" className="img-fluid w-100" />
              </div>
             
            </div>
          </div>

          <div className="col-lg-8 pl-lg-4">
            <div className={styles.aboutMeKicker}>About me</div>
            <h2 className={styles.aboutMeTitle}>I build digital products that make complex work feel simple.</h2>
            <p className={styles.aboutMeLead}>
              I&apos;m Azam Ali, a full-stack developer focused on dependable web experiences for ambitious teams.
            </p>
            <p className={styles.aboutMeBody}>
              With 5+ years across React, Next.js, Node.js, and MongoDB, I turn product ideas into responsive, production-ready applications. I care about clear architecture, thoughtful interfaces, and the small details that make software easier to use.
            </p>

            <div className={styles.aboutMeSkills}>
              <span>Product-minded development</span>
              <span>API &amp; system design</span>
              <span>Responsive UI</span>
              <span>Long-term support</span>
            </div>

            <div className={styles.aboutMeStats}>
              <div className={styles.aboutMeStat}>
                <strong>5+</strong>
                <span>Years building</span>
              </div>
              <div className={styles.aboutMeStat}>
                <strong>MERN</strong>
                <span>Core stack</span>
              </div>
              <div className={styles.aboutMeStat}>
                <strong>Global</strong>
                <span>Client work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
