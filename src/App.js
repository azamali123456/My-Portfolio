import React, { useState, useEffect, useRef } from "react";
import styles from "./mystyle.module.css";
import Aboutme from "./aboutme";
import { Progress, Modal, notification } from "antd";
import emailjs from "@emailjs/browser";
import image from "./me.png";
function App() {
  const form = useRef();
  const [api, contextHolder] = notification.useNotification();
  const [darkMode, setDarkMode] = useState(true);
  const [modelData, setmodelData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (item) => {
    setIsModalOpen(true);
    setmodelData(item);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Appication",
      detail:
        "I can developed different types of websites like Portfolio , E-commerence , Banking , Management systems and introductory website. ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-code-slash"
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
        </svg>
      ),
      image:
        "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
      detailMore:
        "Different type of management system which i can build such as (Shop, hospital, school and collage etc) I can developed both frontend and backend in Next.js/React and express.js/Nest.js ",
      rank: { "React.js": 91, "Next.js": 87, "Express/Nest.js": 80 },
    },
    {
      id: 2,
      title: "Mobile Application",
      detail:
        "I can developed different types of Mobile Application in react Native. I can developed restorent , banking and hotel apps. ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-phone-flip"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
          />
        </svg>
      ),
      image:
        "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg",
      detailMore:
        "Different type of mobile apps which i can build such as (Attendance system, music or movie apps  etc) I can developed both frontend and backend in React native and Express.js ",
      rank: { "React.Native": 80, "Express/Nest.js": 80 },
    },
    {
      id: 3,
      title: "Cross Platform Application",
      detail:
        "I can developed different types of Hybird and Cross Platform Appications for both mobile snd web. ",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-laptop"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-phone"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </>
      ),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD02kGxKsQu32jvATGml2ZBO6MZk0JPq_N3mvNIGctkiE4qBitSGp9r0vwXfR8NYiphQg&usqp=CAU",
    },
  ]);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openNotification = (topVal) => {
    var element = document.createElement("a");
    var file = new Blob(["./azam.pdf"], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "./azam.pdf";
    element.click();

    api.open({
      message: "Resume has been download!",
      style: {
        width: 300,
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
      ),
      topVal,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_es7gy41",
        "template_4j28ysi",
        form.current,
        "UrR8OS3JjUBMKVWNf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className={
        darkMode ? `container-fluid bg-dark ` : `container-fluid bg-white `
      }
    >
      <Modal
        title="Basic Modal"
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        width={700}
        onCancel={handleCancel}
      >
        <div className="row" id="top">
          <div className="col-sm-4">
            <img
              width={200}
              height={200}
              src={modelData.image}
              alt="Image is not loaded"
            />
          </div>
          <div className="col-sm-8 row text-center">
            <h4 className="mt-1">{modelData.title}</h4>
            <h6>
              {modelData.detail}
              {modelData.detailMore}
            </h6>
            {modelData?.rank ? (
              <div className="row mt-2 mb-2">
                <h4
                  className="bg-success text-light  rounded p-1 "
                  style={{ marginLeft: "12px" }}
                >
                  Performance States
                </h4>
                <div className="col-sm-4  mt-1">
                  <span className="m-2 ">
                    {Object.keys(modelData?.rank)[0]}
                  </span>
                  <Progress
                    type="circle"
                    percent={Object.values(modelData?.rank)[0]}
                    size={70}
                  />
                </div>
                <div className="col-sm-4  mt-1">
                  <span className="m-2">{Object.keys(modelData?.rank)[1]}</span>
                  <Progress
                    type="circle"
                    percent={Object.values(modelData?.rank)[1]}
                    size={70}
                  />
                </div>
                {Object.keys(modelData?.rank)[2] ? (
                  <div className="col-sm-4 p-1 mt-1">
                    <span className="m-2">
                      {Object.keys(modelData?.rank)[2]}
                    </span>
                    <Progress
                      type="circle"
                      percent={Object.values(modelData?.rank)[2]}
                      size={70}
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </Modal>
      {/* Nevbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a
          className={`navbar-brand mt-4 display-2 font-weight-bold ml-4 ${styles.navbarText}`}
          href="#"
        >
          <h5 className={darkMode ? "text-white" : "text-dark"}>
            Portfolio.com
          </h5>
        </a>
        <button
          class="navbar-toggler mt-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={`${darkMode}` ? { color: "white" } : { color: "black" }}
        >
          <span
            class={`${darkMode} ? navbar-toggler-icon bg-white  rounded : navbar-toggler-icon bg-black rounded `}
          ></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="col-sm-8"></div>
          <div className="col-sm-1">
            {darkMode === true ? (
              <svg
                onClick={() => setDarkMode(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill={darkMode ? "white" : "black"}
                className="bi bi-moon-stars mt-4 stretched-link"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
              </svg>
            ) : (
              <svg
                onClick={() => setDarkMode(true)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill={darkMode ? "white" : "black"}
                class="bi bi-brightness-high mt-4 stretched-link"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            )}
          </div>
          {contextHolder}
          <div
            className={`${styles.navbarButton} mt-4`}
            onClick={() => openNotification("top")}
          >
            RESUME
          </div>

          <div className="col-sm-2"></div>
        </div>
      </nav>
      {/* Header */}
      <div className={`   row mt-3  ${styles.animatedText}`}>
        <div className={`mt-5  mb-2 ${styles.topTextDiv} col-sm-7`}>
          <div
            className={
              darkMode
                ? `text-white ${styles.staticText}`
                : `text-dark ${styles.staticText}`
            }
          >
            I'am
          </div>
          <ul style={{ position: "relative", left: "-20px" }}>
            <h1 className="h1"></h1>
          </ul>
          <div
            className={
              darkMode
                ? `text-white ${styles.staticText}`
                : `text-dark ${styles.staticText}`
            }
          >
            Developer{" "}
          </div>
          <h4 className={`${styles.topDivText} mt-3 text-muted`}>
            A passionate Frontend + Backend developer from Pakistan , Panjab
            ,RYK.
          </h4>
          {/* Social Media */}
          <div className={`${styles.socialMedia} mt-4 `}>
            <a
              href="https://www.facebook.com/profile.php?id=100030632889504&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill={darkMode ? "white" : "black"}
                style={{ margin: "7px" }}
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/azamali7030?igshid=ZDdkNTZiNTM="
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                style={{ margin: "7px" }}
                fill={darkMode ? "white" : "black"}
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+923327387008?text=Hello,%20how%20are%20I%20you%20?%20"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                style={{ margin: "7px" }}
                fill={darkMode ? "white" : "black"}
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/azam-ali-455402255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                style={{ margin: "7px" }}
                fill={darkMode ? "white" : "black"}
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-sm-5 ">
          {/* Background animation icons */}
          <div style={{ position: "relative", top: "100px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill={darkMode ? "white" : "black"}
              className={`${styles.moveUpDown1} bi bi-braces-asterisk m-4 offset-3 `}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={darkMode ? "white " : "black  "}
              class={`${styles.moveUpDown2} bi bi-balloon-fill m-4 `}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={darkMode ? "white " : "black  "}
              class={`${styles.moveUpDown1} bi bi-balloon-fill m-5 `}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill={darkMode ? "white " : "black  "}
              class={`bi bi-code m-4 ${styles.moveUpDown2}`}
              viewBox="0 0 16 16"
            >
              <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={darkMode ? "white " : "black  "}
              class={`bi bi-bootstrap m-4 ${styles.moveUpDown2}`}
              viewBox="0 0 16 16"
            >
              <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
              <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
            </svg>
          </div>
          <div className={`${styles.image} mb-4`}>
            <div className={` mt-5 ${styles.name}`}>
              Hello,it's me <h4 className="display-5">Azam Ali</h4>
            </div>
          </div>
        </div>
      </div>
      {/* About Me  */}
      <Aboutme darkMode={darkMode} />
      {/* My SERVICES */}
      <div className="mt-5 row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 mb-5" style={{ textAlign: "center" }}>
          <span
            className={
              darkMode
                ? `text-white mt-5  ${styles.servicestext} `
                : `text-dark mt-5 ${styles.servicestext}  `
            }
          >
            <strong>Services</strong>
          </span>
          <div className="row mt-5">
            {services.map((item, id) => {
              return (
                <div
                  key={id}
                  class={
                    darkMode
                      ? ` m-3 row rounded  ${styles.cardAfter}`
                      : ` m-3 mb-5 row rounded ${styles.card}`
                  }
                  style={{
                    width: "18rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="mt-4">{item.icon}</div>

                  <div class="card-body mt-4  text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text mb-5 text-white">{item.detail}</p>
                    <div className="row justyfy-content-center align-item-center">
                      <div className="col-4"></div>
                      <div onClick={() => showModal(item)} className="col-4">
                        <div
                          className={`${styles.navbarButton} mt-2 mb-2  border`}
                        >
                          MORE
                        </div>
                      </div>
                      <div className="col-4"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-2 fixed-top" style={{ top: "90%", left: "90%" }}>
          <div className={`${styles.bottomToTop} top-to-btm`}>
            {showTopBtn && (
              <span className={` icon-position icon-style`} onClick={goToTop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill={darkMode ? "white" : "black"}
                  class="bi bi-arrow-up-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
      {/* My PROJECT */}
      <div className={`${styles.timeLine} mb-5 text-center`}>
        <span
          className={
            darkMode
              ? `text-white mt-5 mb-5  ${styles.servicestext} `
              : `text-dark mt-5 mb-5 ${styles.servicestext}  `
          }
        >
          <strong
            className="mb-5 p-5"
            style={{ position: "relative", top: "-50px" }}
          >
            Projects
          </strong>
        </span>
        {/* Container 1 */}
        <div className={`${styles.container} ${styles.leftContainer} mt-5 `}>
          <img src="data:image/jpeg;base64,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" />

          <div
            className={
              darkMode ? `${styles.textBox} ` : `${styles.textBoxAfter}`
            }
          >
            <h2>Mercurysole</h2>
            <small>2022 - 2023</small>

            <small className="p-1 m-1 text-white bg-success rounded ">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://mercurysols.org/"
              >
                Live
              </a>
            </small>
            <p>
              In 2022 I join Mercurysole as Interney for learnig purpose. After
              my interniship in MERN stack. I developed my first Backend Project
              Which was capmany website backend.
            </p>
            <span
              className={
                darkMode
                  ? `${styles.leftContainerArrow}`
                  : `${styles.leftContainerArrowAfter}`
              }
            ></span>
          </div>
        </div>
        {/* Container 2 */}

        <div className={`${styles.container} ${styles.rightContainer}`}>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSEhIREhESEhEREhAREhESEhEZFBISGRQZGRgUHBocIzwzHCE4IBkYJjomLC8xODU1HyU7QDszPy81NTQBDAwMEA8QHxISHzQrJCQ1NDY2ND09NDo0NDYxNDo0ND0xNDQ1MTc0Njo0NDQ0MTQ0NDE0NDQ0NjU0NDE0NzQ0NP/AABEIAK4BIQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwYHBQj/xABCEAACAgIBAgMFBQQHBQkAAAABAgADBBESBSEGEzEHIkFRYRQycYGRI0JysRU1UnSCocEkYqKz4RYXNDZDdZLw8f/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMFBAb/xAAjEQEBAAIBBAIDAQEAAAAAAAAAAQIRAxIhMUEEUQUTYfAy/9oADAMBAAIRAxEAPwDqqruZFrioSQqwMHlR5Uk8Y4wI3lR5Uk8Y4wI/lyxqpM4yhWWJULy48uSSkcZWUby48uSeMcYEby48uSeMcYEby48uSeMcYEby48uSeMcYEby48uSeMcYEby48uSeMcYEby48uSeMcYEby48uSeMcYEby5eqTNxgLCysXlR5UkASvGZaRvKjypJ4xxgRvKjypJ4xxgRTXMbLqTWWR7FgYYiIGaqSVkaqSVgXxEQEREBERAsYSkvImMiWM2KxESoREQEREBERAREQEREBERAREQEREADLwZjlymSrKviIkaIiIFrSPbJDSPbAjxEQM1UkrI1UkrAviIgIiICIiAlpEulISrIgiJpkiIgIiICIiAiIgIiICIiAiIgIiICIiBVTLpj3LwZKsq6IiRpa0j2yQ0j2wI8REDNVJKyNVJKwL4iICIiAiIgUieN4m6/X0+j7RaljpzRONQQtybej7zAa7fOef4W8bUdSssqprvRq0FjG1awNFtaHFj3l1dbTc3ptBEtl8sYREsIiJUIiICIiAiIgIiICIiAiIgIiICIiAlAZWIFwMrLAZeDI1Ko0j2yQ0j2yKjxEQM1UkrI1UyZGQtVb2WMqVorO7sdKqgbJJgZ4nK+re11VYri4xsQb1bc5Tl9QgBOvxIP0EhY3tgs5e/h1Mvbfl2srAfPuDub/Xl9Mfsx+3YJXU1XE8Y1ZODkZmKpsfGrZ3xXPB1KqW4nQPqAdEbB1r1B1rnQ/ap9pyaMd8MVLfYtfmDILcWbsvu8BvbFR6/GSY1erH78umxE5/4w9ov2DKOKmML+FaMzm4pxZtnjrgf3eJ3v4ySXK6hcpJusnth/q0f3mn+TTVvYp/4vK/u6/8AMEm+MuuPn9DTKekUCzLRUQWF9qvJeWyo/eB7a+E8X2WdTrxbMzIvbjXXjKWOtkk2KAoHxJOgBOsl6LHLKz9kruUoZyPL9r78z5OGgrB7ebY3Nh8yFGlP02fxmx+FPaNTmutFtZxr3OkBblXYf7Kvoab6EfQEmc7hlO+nScmNutttz8taUaxt6XXoNkknQH/7PF6X4kFtpR1CKxArO/j8ifmfh+k9/JpWxGRhtWBUj6Gc2zsRqbHrb1U9j819VP6T7PicXHyzLG+Xlfkfkc3x88c8f+fcdNlZr/hvrHmjy3P7VB6n99fn+Pz/AFnvz5eTjuGVxvmPQ4ebHmwmePionUc6vHqe+5wlVa8mY77DegND47IAA7kmal/3lY+vM+ydQ+z719p+zr5Wt65b5en+f0nr+NuivnYVuNWwWwlHXkSFZkYNxJHpv5/A6mvY3jB8SlcfqXTMilERamtrRbMcqF47OuwGvgC0kksbtu2zZnifGqwx1A2l8U8NPWpYks3HWvgd9iDrWtesyv4gqGXRh6sNuRUb624jhwAY9yTsH3T21NQysynp/RrMjpNvOs3Iym3b8WZkVlKsAQdAdiN99/GSs5i3X+nE+pwLCfxK2xo22novXKcwWtQWIoufHfkhX9out636jvPTmgYfjGyvE6nlXhXOJm3Y9KKoTl3VUUkfVtlvXQMq69ZTHOacqhnFYuPTlxQV465GsOPfL6+G/Xts+saNt+iaV1jxVeUwKcWny83qAJCZCsBjKo98spAJI97Xb0UnR7AxOp5/UOlCvJysqvPxGsVLwMdKrKQ3YOnD735/QfHYapt0GJo3Ves5rdU+w4b0qjYi3c7E2K9v71g13c60Avpttn0lvS+q5uL1Kvp+bemXXlVPZTetSVMrKGYqVXtrSN8/VTv1EaNtgzfEVVOZRg2LaLMheVdnFfKP3vdLb2Dtda1+8vznp52WtNVlznSVI9jn5Kqlj/kJpvtUwm+zU51Y/bdPvS5T3+4WUH0/3gh/AGW+0Lq3m9Norxzt+qPj11AHuUfix/L7qn+KJN6N622noPV0zMdMmtLESwtxFqqG0rFSdKT22D8Z6U0zNozK3x8DBK4mJRjLzz7K1sHJfdCKrHW/Qkn12e413x+FevXHPu6fflU53Cnz0yqlRCCGUNW6r237w9PTX17NG/tOPjnHGG+fwv8AJruNDLwXnz7dwOWtd/nNoE4hZ/5cyf8A3Bv5JN+8QdcvfMXpuHZVRZ5Pn5GVaAwqrJ0FRT2Zu6nv8x9SLZ9Ev23KVUzQaOsZWHl4+LlZVOZTml668hK667Kru3EMi9iNso/P6aPqeCut25AyqMsp9rw72qsKqFVqzvg+vgDxb8gD8ZLFlbYZHtmu+Cus3Zoysl2X7Mchq8RQgB8pCduW/e3sD6EGbFbM2aum5dxHiIkVmqmre1QMel3cN6D0F9f2PMX1+m+M2mqYOq5uPTX/ALXZTXVZusi5kCPsHaHl2Pbfb8ZZdXaZTc04Z7PurY2Jlm3MTacCqWeWXFT8gefEDfoCNgEjf1M6f4htwOrYzY6ZeIb2G6HNiCxHB9Qp97XqCPkZ4j+z3p2abHwMwrxOmWqxLqq2OyOxOx+HL9JrniP2aZGLS96W15NdSs9gCsjhB3LBSSCANk+9vt8Z1tmV3vVcJMsZrW43HwT4DuwMh7XyK7KrKXpetVYctlSD3/A/qZyTqeI+Hl21AkPi3sEY+p4NtH/MBW/Obh7KvEV1eXVhM7Pj3hwqMSRU6oXBTf3R7pBUdu+5b7YOm+VnpeBpcqoMT87K9I3/AA+XLjuZavtMtXDc9Oz9Py1upquT7ttddq/wsoYfznzh4kzTl52Tcvv+bewr16sgPCsD/CFnTvDHiDh4ett5ftMRL8cH5WE/sR+llYmgezzpn2nqWKpG0qb7Q/0Wscl/4+A/OTCdO79LyXq6ZPbfvaL08YvRMfHH/ovjIT82Ctyb8zs/nNF8A+Hf6QyTU7MuPWotvCkjmAdKn0JJPf4ANrRnSfbD/Vw/vNP8mmrexbKVcnKqJ01tVbrv48GbkB9ffB/Ixjb0WmUl5JK367wJ096/L+x1qNaDptbB8jzB2T+JP13OGeIelNhZd2NzJNLjg47MVIDo3b0biV9PjPpqfPftLylt6pklCCE8uokfFkRQ35htr+UnFbbpebGSbdr8K9ROVg42Q2i1lS8yPQ2D3XP/AMlMheLenc6/OUe9V976p8f09f1mP2b0FOlYgb1ZLHH8L2u6/wCTCez1fMWmpnbR7aVT+8x9F/8Avw3LxXLDllx87c/lYY8nBZn2mvP05zTayMGUlWU7Uj4GdB6N1NchNjQddB1+R+Y+h+H/AEnPBNr8JdNYf7Q21DAhR/aB9WP0+X6/Kep87DC4dV7WeH5/8Ty8mPN0YzeN8/z+s/jbDybcU/YbXryanWxVrbibVAIavZ7fHY322AJ49XtHqVQmRh5teTx02P5BPJ9dwvIjY/ECbL4l60uDi2ZTo1i1msFFIBPN1T1P8W5rq+PLSof+h+oFCAwZa2IKkb5DQ7jU8iTt4fprdXy1Gzot6dEz3bHes5WVTdViqrFq6/MXXuAbX5a16KPSbZlUt/TnTn4PwXBdWfi3FTxt7E+gM2Pw74gpz6fPoLcQxV1cAOjAA8WAOvQg7BI7z2ItvsknpyfH6BbldP6vQiMLT1K66pXBXzOJU6BbXqOQB9N67z2W8fbx/LTGyh1MoFGK2NYeF2tcj27py7/A6+Am/wApuN7NOedexsqmzpnVbKjkW4qOmbVjrtlWxWBZFB94LzcfiAfTZGDxP1odXqXp+BXdYbbK/Puep0rx1Vgx5FvjsDt9CBskCbhj9fV8+7p4rYPRStxs2OLBuHugfP3v8p7W43o1tpGNisniAkI/lr0taw/FuOxaul5em9D0jrVLHr3THCOUWjJDOFYqpNV2gW9B8JvERtdIvUMRb6rKHG0uret/4WUqf5zl3gnp+RbmYtOVW619HTJVGZWC2WtaVXRI7gDWtfBAfjOtxEuuyWbcv8TGsdVsPVkvfAFdf2JVS5qPM0vLkqer8uf+W+3GXeHWVetLYmFbiYt2E9WMpxygfThizKo0hPBz72jriT94Tpu4jfY04rZh2f8AZ/ITyrOZ6gzCvy35FdJ3C63r6zYPFvSEq6kudlYjZeDfQK7eKM5x7l0FsKjvrioG/q3x0D0rcR1GnNei04eRmUf0f0tPIrIttzbKrUVGU7QV7+82x8fnv0Exe0JLcPKOTjKSep474DqDo+eeIrcf73HQH8J+c6fNWr8LO+YuXl5j5S02WPi45qVEoLEkb0TzIGgDoHsDLL3LOz1+hdMXExaMZdaprVSR+8/q7fmxY/nJbGZSJjcTNbxYIiJlpmqni+OPD56hhtShC21sttJb7vmKCOJ+QKsw38Ng/Ce1VJKyy6u0s3NV89dI6vmdEvcPSU8zS2U3qwSzjvTKw9SNnTKSO/xnq9d9pt+XS+NXRXUL1NTFWax2VhplXsNbGx6H1/OdvZAw0QCPkQDLK8dV7qir9VUD+U31y3dndznHZNS9nKfZf4PuS9c7Jrapa1byEfYdndSpcqfuqFLDR7kkH4d/e9sHTPNwFuA97GtRydbPlv7jD9Sh/wAM36Jm525dTUwkx0+ZKOqsmJfhjfC+7HtPyHANyH5nyz/hnRPYr03tlZZHqVx0P4e+/wDNP0nV9RNZcm5rTGPFqy78ND9sP9Wj+80/yac+8LeEcm/GfqGKzJfTYv2UKQpt478zRPp6gDfYkMDO+xJM7Jpq8cuW64Hne0TqQVqLLFpdRwc+SqXg677B+6fwUfTUgeE/Cl/UbV0rrj8t3ZLA8eO/eCsfvOe/pvR7mfQl2MjkF60Yj0LKpI/Dcya0O3YDtoS/s1O0S8e7u3bDTStaJWihVrUKoHoqgaAH5CaT4n6h5tvBT7lWx9C/7x/0/X5zberu4pc1KWs1oAa2N+pHzIHwmidM6a19nlgEAH3yR90A99/X4an2fCxxm+TK+HkfleTky6eDCXv/ALSX4f6T9ofkw/ZIfe/3j/ZH+v8A1m+KNDQGgOwA9AJixcZa0VFGlUaA/wBT9ZnnD5HPeXLfr0+34XxMfjcep5vmtP8Aar/VWR/Hjf8APSQen+Iuorj1KnRWdVprCWfbKtOoQBW48d9x31PW9o2FZf02+qlGssZqOKINsQLkJ7fgCZ5OF4ozaqq6h0PKY111py8zQYqoXf3O3pOXp9N8sPs7fjhZrY58zPNtlluPYnlirIIISsgn7vIHvv4EdiJ5nVc2zHx2vu6846kq8vslbUNULN7FXlKD+HI9vj6SRieGs44nVr2UVZvUSrLQrjaorszJyB0Cysyjv+OtnWPHR26e+FidEvpyWxmruuupWtSQmnZXb3rGbRCj5kb0BL23s9aT/EHiDJanotmPYtNue9IcaBrZnWvswPfjtj2B3qWddGZ0yzEyT1G7KS7Krx76rUQKwcEkoo7J2B9PQ69RsTE/T77aPD2sa9Ti30i9XQhqxWyKXYfBTxJBPwnue0bAtvpxFprexkzqLHCKSVQLZtj9O4jt2h37vC6h1yrA611DIvJ4jDoVEX71jnytKB8+3r8B3m1eFBk2qczKuB+0hXpxqippoqIBUcgPfYjWzvXynlV9C8zreXdfjc8dsRUSx02hcqiuoJ+PEuPw3M3hHFvwbrunulj4alrcPJ0SqIx2aGPwI7638QfmBJdaWb23OIiZaIiICIiAiIgIiVUQRTUw2yQ0j2zLaPERAzVSSsjVSSsC+IiAiIgIiICIiBSYyZcxlJYzaSwIASQACdbIA2dem/nL4lZIiIUiIgIiICIiAiIgIiICIiAiIgIiAIBRL4AiZakUaR7ZIaR7YVHiIgZqpJWRqpJWBfERAREQERECkGJaTCVaTKxE0yREQEREBERAREQEREBERAREQEREBERAoBMgEoBKyVqRWIiRVrSPbJDSPbAjxEQM1UkrI1UkrAviIgIiICIiBQmYzKsYljNpERKhERAREQEREBERAREQEREBERAREQEqohRLpLVkViIkaIiIFrSPbJDSPbAjxEQMlbTOryIDLw8CVzjnI3OOcCTzleUi845wJXKWs8wc5jNksSpPOOcjc45yspPOOcjc45wJPOOcjc45wJPOOcjc45wJPOOcjc45wJPOOcjc45wJPOOcjc45wJPOOcjc45wJPOOcjc5TnAlc5VWkQPMgeKsiSHjnI3OOcy0k845yNzjnAk845yNzjnAkM8wWNLS8sJgIiIH/2Q==" />
          <div
            className={
              darkMode ? `${styles.textBox} ` : `${styles.textBoxAfter}`
            }
          >
            <h2>SVB Traning App</h2>
            <small>2022 - 2023</small>
            <small className="p-1 m-1 text-white bg-primary rounded stretched-link">
              Not Deployed
            </small>
            <p>
              It is Frontend web application which is about to train company
              staff. It have different types of user. Here user can create his
              own page where he can list there tasks.
            </p>
            <span
              className={
                darkMode
                  ? `${styles.rightContainerArrow}`
                  : `${styles.rightContainerArrowAfter}`
              }
            ></span>
          </div>
        </div>
        {/* Container 3 */}

        <div className={`${styles.container} ${styles.leftContainer}`}>
          <img src="data:image/jpeg;base64,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Vr0lYUWU1OgCQXBAzWudRLZ+laHf0f8AMT8ZG/VU7un8Kx6qnd0/hWRKunbNUeXGm7rHwW5lge0RrDqKjuyMSybS2tihlKNzKUyT1ioRcyjeyjTUaHdeS/kztNq2YvkGXQW+1rxO7Tsmn6ond0/hWfPVE7un8KzVU01Re/W1XDAR6uQjn2hbm2MBmqQCfavnqw7FLudX6y+8TXxj0zTYMwy21sRf2eMjPqqd3T+FYGFp/UT4Vmt2l6JBGqezt4b1gWRwMytKnu4+HVmatj2oYevVGXoUqhAYqAbA2XtuTYDzmzzC/VT3CfDhkO9E+ETnrLSZSqNe5xIG4AE9M3KfVJc0i5URjtvYyq7O1euC31WZFHgqjQCdjbHLHFYhUUMaYUC/NkguwFixIsba9XcPGW96qnd0/hWPVU7un8KzqTpuyEtOxPq/Vwu5ZZKu8zqQRr448eaqDYOOqVGZaj1HNgylizHTeAT57vOTXkvRTnHaplBUDLmNtTcaA7zJX6qnd0/hWBhk+onwiarTpihXY5uq4TuIURuh4tAryDF8RdMeDzWeJ8iczBV8kRE9rCREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQi//2Q==" />
          <div
            className={
              darkMode ? `${styles.textBox} ` : `${styles.textBoxAfter}`
            }
          >
            <h2>Fasto</h2>
            <small>2023</small>
            <small className="p-1 m-1 text-white bg-primary rounded stretched-link">
              In Progress
            </small>
            <p>
              It is Home service Backend app. Which is developed in Express.js.
              Main idea of this app is to serve peopleat there own home solve
              there home defacts such as water pump repairing ,water pipe
              repairing.
            </p>
            <span
              className={
                darkMode
                  ? `${styles.leftContainerArrow}`
                  : `${styles.leftContainerArrowAfter}`
              }
            ></span>
          </div>
        </div>
        {/* Container 4 */}
        <div className={`${styles.container} ${styles.rightContainer}`}>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAQAEADASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAwQABgIFB//EACsQAAIBAwMDBAEEAwAAAAAAAAECAwQFEQASIRMxQSIyUWEGFSMzcYGx4f/EABcBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAlEQABAwIEBwEAAAAAAAAAAAABAAIRA7EiQYHBBBITITFxoeH/2gAMAwEAAhEDEQA/AOc2q1V95neG3Ro7ou9w0ioFUEAsST2Gcn6BPjS0lMdwVWBIGXJ8f80S1XOrs9Yay3zGOo2FAdoIIPcHPjj/AD27E6BFUwROry07dRTkNHIQc/OmmRzYxI12lFFnDGlBMOP7oJ93RUt1VPD1I43aPON6IWUEZPJHHj/ej2mO11EgpatSJnZlExlCInp4zn755+APOQtU3YVMiNULUzsntaWdiR3PBJPknWFKwNUkkixdHqBmWZS64zn1Ackf1q63TIAZc7gLCrTYyINlZWstlM4IrKFIAntW4DcTu8sRj28fZJPgDUitljUpLHPC8Ow4hSvXqMcjHOMZ9wxkdx2xksSfksY67RXKmhaSQOxSKfD4EfJBQjP7YAPO3J45zpR7tE1wFwF1pxK9N0G6InRlJySynadpzxwDwx+dcYa/MfVPnKykds/HpJpTJW0u0OoA/UEUcqMgE8kAhufsd9aC6LbImZLekuUdg8zSblYdhtxjzk5wM51am/K5RJuN5pU2rIVCQVP8jlssfSPDY+T3zqnVEpkqpqgsZWkkYmQ5Ikyfd6uee/PPOlrXTiEapPYL/9k=" />
          <div
            className={
              darkMode ? `${styles.textBox} ` : `${styles.textBoxAfter}`
            }
          >
            <h2>Aquatic Express</h2>
            <small>2022 - 2023</small>
            <small className="p-1 m-1 text-white bg-success rounded ">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.aquaticxpressshipping.com/"
              >
                Live
              </a>
            </small>
            <p>
              It is Frontend web application with purpose of shipping.In this
              site there are two type of user where one is admin other is local
              user. User can set there ship item and also can set its prize.
            </p>
            <span
              className={
                darkMode
                  ? `${styles.rightContainerArrow}`
                  : `${styles.rightContainerArrowAfter}`
              }
            ></span>
          </div>
        </div>
      </div>
      {/* Contact Me */}
      <div
        className="mt-5 row bg-primary"
        style={{
          textAlign: "center",
          background:
            " linear-gradient(to right, #4070f4, rgba(239, 242, 244, 1.893))",
        }}
      >
        <span
          className={
            darkMode
              ? `text-white mt-5 mb-5  ${styles.servicestext} `
              : `text-dark mt-5 mb-5 ${styles.servicestext}  `
          }
        >
          <strong
            className="mb-5 p-2 text-white"
            style={{ position: "relative", top: "-50px" }}
          >
            Contact Me
          </strong>
        </span>
        <div className="col-sm-4 d-flex">
          <img
            className={`${styles.footerImage} rounded shadow`}
            width={300}
            height={300}
            src={image}
          />
        </div>
        <div className="col-sm-2 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={darkMode ? "white" : "black"}
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <h6 className="text-white">aazam7246@gmail.com</h6>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={darkMode ? "white" : "black"}
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <h6 className="text-white">+92327387008</h6>
          </div>
        </div>
        <div className="col-sm-6 mb-5" style={{ textAlign: "center" }}>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className={`${styles.contactInput} rounded m-2`}
              name="user_name"
              placeholder="Your Name"
            />
            <input
              type="email"
              className={`${styles.contactInput} rounded m-2`}
              placeholder="Your Email"
              name="user_email"
            />
            <textarea
              className={`${styles.contactInput} rounded m-2`}
              placeholder="Query You Have"
              name="message"
            />

            <input
              className={`${styles.submitButton} d-block p-2 mt-2 text-white`}
              type="submit"
              value="Submit"
            />
          </form>
        </div>

        <div className="footer text-center mt-3 mb-3">
          <h5 className={darkMode ? "text-white" : "text-dark"}>
            Azam Ali © 2023
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
