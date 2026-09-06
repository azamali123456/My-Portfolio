import React, { useState } from "react";
import styles from "../style/mystyle.module.css";
import img1 from "../assets/images/Almuhasba 1.png";
import img2 from "../assets/images/Servics-usa.png";
import img4 from "../assets/images/Saudibank limited.png";
import aquaticImg1 from "../assets/images/Aquatic Express Shipping 1.png";
import aquaticImg2 from "../assets/images/Aquatic Express Shipping 2.png";
import psusa from "../assets/images/Servics-usa.png";
import bookluxury from "../assets/images/Apart-luxury.jpg";
import ieltsAiExpert from "../assets/images/IELTS_AI_Expert_1.png";
import ieltsAiExpertHover from "../assets/images/IELTS_AI_Expert_2.png";
import nivessa from "../assets/images/nivessa_1.png";
import nivessaHover from "../assets/images/nivessa_2.png";
import way2trip from "../assets/images/WAY2TRIP_1.png";
import way2tripHover from "../assets/images/WAY2TRIP_2.png";

const projectItems = [
  {
    id: 7,
    title: "IELTS AI Expert",
    year: "2025 - 2026",
    status: "Link",
    statusClass: styles.projectDraft,
    link: "https://ieltsaiexpert.com/",
    shortDesc: "AI-powered IELTS test preparation tool for students.",
    longDesc:
      "IELTS_AI_Expert is an AI-powered learning tool that helps students prepare for the IELTS test with guided practice, feedback, and personalized preparation support.",
    image: ieltsAiExpert,
    hoverImage: ieltsAiExpertHover,
    technologies: ["React", "AI", "Education"],
  },
  {
    id: 8,
    title: "Nivessa",
    year: "2025 - 2026",
    status: "Link",
    statusClass: styles.projectDraft,
    link: "https://nivessa.com/",
    shortDesc:
      "A music and collectibles store for vinyl, CDs, movies, and more.",
    longDesc:
      "Nivessa lets visitors explore one of the largest collections of new and used vinyl, CDs, movies, and collectibles in Los Angeles, available at Hollywood Blvd and Mid-City stores or shipped anywhere.",
    image: nivessa,
    hoverImage: nivessaHover,
    technologies: ["React", "E-commerce", "Responsive"],
  },
  {
    id: 9,
    title: "WAY2TRIP",
    year: "2025 - 2026",
    status: "Link",
    statusClass: styles.projectDraft,
    link: "#",
    shortDesc: "Trip planning website for discovering and organizing travel.",
    longDesc:
      "WAY2TRIP is a travel website designed to help users discover destinations and plan their trips through a clear, engaging browsing experience.",
    image: way2trip,
    hoverImage: way2tripHover,
    technologies: ["React", "Travel", "UI/UX"],
  },
  {
    id: 1,
    title: "Almuhasba",
    year: "2022 - 2023",
    status: "",
    statusClass: styles.projectLive,
    link: "#",
    shortDesc: "Backend company website built with MERN stack.",
    longDesc:
      "This project was developed as a backend system for a company website. It includes user management, authentication, and service tracking built with Node.js, Express.js, and MongoDB.",
    image: img1,
    technologies: ["React", "Node", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "SVB Training App",
    year: "2022 - 2023",
    status: "Link",
    statusClass: styles.projectDraft,
    link: "#",
    shortDesc:
      "Training platform frontend app with multi-user task pages.",
    longDesc:
      "A training application to manage company staff tasks. It supports multiple user roles, custom task pages, and a polished frontend experience built with React.",
    image: img4,
    technologies: ["React", "Bootstrap", "UI/UX"],
  },
  {
    id: 3,
    title: "Fasto",
    year: "2022 - 2023",
    status: "Link",
    statusClass: styles.projectDraft,
    link: "https://github.com/azamali123456/You-Servics-backend",
    shortDesc: "Home services backend app built with Express.js.",
    longDesc:
      "Fasto is a backend app for home service requests, including water pump repair, pipe repair, and home maintenance workflows. The backend is built using Express.js and MongoDB.",
    image: img2,
    technologies: ["Express", "MongoDB", "REST API"],
  },
  {
    id: 4,
    title: "Aquatic Express",
    year: "2022 - 2023",
    status: "Link",
    statusClass: styles.projectLive,
    link: "https://www.aquaticxpressshipping.com/",
    shortDesc: "Shipping frontend application with admin and local user workflows.",
    longDesc:
      "Aquatic Express is a frontend web application for shipping services. It includes separate admin and local user workflows where users can set their ship item details and pricing.",
    image: aquaticImg1,
    hoverImage: aquaticImg2,
    technologies: ["React", "Frontend", "UI/UX"],
  },
  {
    id: 5,
    title: "Service Now USA",
    year: "2024",
 
    statusClass: styles.projectDraft,
    link: "#",
    shortDesc:
      "A job finder platform connecting employers and applicants.",
    longDesc:
      "Service Now USA is a job hunting and job providing web application built with MERN. It includes secure authentication, dynamic job listings, and employer/job seeker interactions.",
    image: psusa,
    technologies: ["MERN", "AWS", "MongoDB"],
  },
  {
    id: 6,
    title: "Apart Luxury",
    year: "2024",
    statusClass: styles.projectDraft,
    link: "#",
    shortDesc: "Premium real estate application with luxury listings.",
    longDesc:
      "Apart Luxury is a premium real estate app showcasing high-end properties, apartments, and shops. The interface is designed for luxury browsing and easy property discovery.",
    image: bookluxury,
    technologies: ["React", "CSS", "Responsive"],
  },
  
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  const openProjectLink = (link) => {
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className={styles.projectsSection} aria-labelledby="projects-heading">
      <div className={styles.projectsContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}><svg width="8" height="8" viewBox="0 0 8 8" fill="#3FFF00"><circle cx="4" cy="4" r="4"/></svg>Portfolio</div>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            A modern showcase of my recent frontend, backend, and full-stack
            builds designed with responsive layouts, clean UX, and production
            ready architecture.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projectItems.map((project, idx) => (
            <button
              key={project.id}
              type="button"
              className={styles.projectCard}
              onClick={() => setSelectedProject(project)}
              aria-label={`Open details for ${project.title}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.projectCardOrbital} />
              <div className={styles.projectCardInner}>
              <div className={styles.projectImageWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                {project.hoverImage && (
                  <img
                    src={project.hoverImage}
                    alt={`${project.title} hover preview`}
                    className={styles.projectImageSecondary}
                  />
                )}
                <div className={styles.projectStatus}>
                  <span className={project.statusClass}>{project.status || 'Draft'}</span>
                </div>
              </div>
              <div className={styles.projectBody}>
                <div className={styles.projectMetaRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDate}>{project.year}</p>
                </div>
                <p className={styles.projectDescription}>{project.shortDesc}</p>
                <div className={styles.projectFooter}>
                  <ul className={styles.projectTechList}>
                    {project.technologies.map((tech, index) => (
                      <li key={index} className={styles.projectTech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.projectAction}>
                    <span className={styles.projectArrow}>↗</span>
                  </div>
                </div>
              </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalCard}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close project details"
            >
              ×
            </button>
            <div className={styles.modalHeader}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={styles.modalImage}
              />
              <div className={styles.modalHeadings}>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <div className={styles.modalMeta}>
                  <span className={styles.modalMetaItem}>
                    {selectedProject.year}
                  </span>
                  <span className={styles.modalMetaItem}>
                    {selectedProject.status}
                  </span>
                </div>
                <p className={styles.modalText}>{selectedProject.longDesc}</p>
                <ul className={styles.modalTechList}>
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index} className={styles.modalTech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.modalActions}>
              <button
                type="button"
                className={`${styles.modalButton} ${styles.modalButtonPrimary}`}
                disabled={
                  !selectedProject.link || selectedProject.link === "#"
                }
                onClick={() => openProjectLink(selectedProject.link)}
              >
                {selectedProject.link && selectedProject.link !== "#"
                  ? "Open Link"
                  : "No Live Link"}
              </button>
              <button
                type="button"
                className={`${styles.modalButton} ${styles.modalButtonSecondary}`}
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
