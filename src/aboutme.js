import React from "react";
import styles from "./mystyle.module.css";
function Aboutme({ darkMode }) {
  return (
    <div
      className={
        darkMode ? `container-fluid bg-dark ` : `container-fluid bg-white `
      }
    >
      <div className="row mt-5  ">
        <div className="col-sm-2"></div>
        <div className=" col-sm-8 mt-5 d-flex  p-5">
          <h5 className={`  ${styles.aboutMeHead}`}>
            <span
              className={darkMode ? `text-white mt-5  ` : `text-dark mt-5  `}
            >
              <strong> About Me</strong>
            </span>
            <div className="d-flex">
              <h6
                className={
                  darkMode
                    ? `text-white mt-4 mb-4 w-75`
                    : `text-dark mt-4 mb-4 w-75 `
                }
              >
                A passionate Frontend + Backend developer from Pakistan , Panjab
                ,RYK. Last year i have been certified MERN stack from{" "}
                <a href="https://mercurysols.org/">MercurySole.</a> After that i
                have worked on Clint project. Now i am working as MERN Stack
                developer at MercurySole.In this company i am working on client
                project M-Learning.
              </h6>
              <div className={`${styles.aboutMeIconDiv}`}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill={darkMode ? "white" : "black"}
                  class="bi bi-file-person-fill m-2 stretched-link "
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                </svg>
              </div>
            </div>
          </h5>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

export default Aboutme;
