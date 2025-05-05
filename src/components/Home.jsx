import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import { ModeContext } from "./ModeContext";

function Home() {
  const { darkMode } = useContext(ModeContext);
  return (
    <div
    id="home"
      className={`container py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {/* Profile Section - Circular profile photo with Bootstrap */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-md-8">
          <div className="position-relative d-inline-block mb-4">
            {/* Circular image container */}
            <div
              className={`rounded-circle overflow-hidden mx-auto shadow-sm border border-3 ${
                darkMode ? "border-info" : "border-primary"
              }`}
              style={{ width: "250px", height: "250px" }}
            >
              <img
                src="src/assets/me.jpg"
                alt="Ritesh Prajapati"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <h1 className="display-4 fw-bold">Ritesh Prajapati</h1>
          <p className={`lead ${darkMode ? "text-info" : ""}`}>
            Passionate Developer, Loves building projects
          </p>
          <hr className="my-4 mx-auto w-50" />
        </div>
      </div>

      {/* About Section */}
      <div className="row justify-content-center mb-5" id="about">
        <div className="col-md-10">
          <div
            className={`card elevated-card ${
              darkMode ? "bg-dark text-light" : "bg-white text-dark"
            } border-0`}
          >
            <div className="card-body p-4">
              <h3
                className={`card-title text-center mb-4 ${
                  darkMode ? "text-info" : "text-primary"
                }`}
              >
                <i className="bi bi-person-circle me-2"></i>Who Am I?
              </h3>
              <p className="card-text">
                Hey there! I’m Ritesh, a tech enthusiast who’s had the privilege
                of living all over India thanks to my dad’s army career. From
                the cool winds of Jammu to the vibrant streets of Bengaluru,
                I've experienced a lot – and each place has shaped who I am
                today.
              </p>
              <p className="card-text">
                My journey into the world of computers started young, thanks to
                video games. But it wasn’t until I chose Computer Science in
                school that I really caught the programming bug. Ever since,
                I’ve been turning my ideas into reality and, let me tell you,
                it’s been a wild ride!
              </p>
              <p className="card-text">
                I’m always up for a challenge. Whether it’s learning a new tech
                stack, building an app, or overcoming distractions (looking at
                you, social media!), I tackle problems head-on. My goal is to
                constantly improve and push myself to learn new things – after
                all, progress is the real game!
              </p>
              <p className="card-text">
                When I’m not coding, you’ll probably find me playing games,
                watching tech videos or creating some as I am a content creator
                too, or daydreaming about my next big project. But, my ultimate
                passion lies in creating something that people can use and
                enjoy, whether it’s a cool app, a quirky website, or a brand-new
                game.
              </p>
              <p className="card-text">
                In the next few years, I’m looking forward to diving deeper into
                full-stack development, experimenting with AI and Data Science,
                and maybe even launching my own startup. Stay tuned – the
                adventure has just begun! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="row justify-content-center mb-5" id="projects">
        <div className="col-md-10">
          <div
            className={`card elevated-card ${
              darkMode ? "bg-dark text-light" : "bg-white text-dark"
            } border-0`}
          >
            <div className="card-body p-4">
              <h3
                className={`card-title text-center mb-4 ${
                  darkMode ? "text-info" : "text-primary"
                }`}
              >
                <i className="bi bi-code-slash me-2"></i>PROJECTS
              </h3>
              <p className="text-center mb-4">
                Here are some wild and wacky projects I’ve whipped up while
                stumbling through my learning journey.
              </p>

              <div className="row g-4">
                {[1, 2, 3, 4].map((id) => (
                  <div key={id} className="col-md-6 mb-4">
                    <div className="project-card-wrapper">
                      <ProjectCard ProjID={id} darkMode={darkMode} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="row justify-content-center mb-5" id="skills">
        <div className="col-md-10">
          <div
            className={`card elevated-card ${
              darkMode ? "bg-dark text-light" : "bg-white text-dark"
            } border-0`}
          >
            <div className="card-body p-4">
              <h3
                className={`card-title text-center mb-4 ${
                  darkMode ? "text-info" : "text-primary"
                }`}
              >
                <i className="bi bi-gear-fill me-2"></i>SKILLS
              </h3>
              <p className="text-center mb-4">
                A person without skills is like a phone without Wi-Fi – kinda
                useless. So, here’s a list of some I’ve managed to collect on my
                journey!
              </p>

              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className={`skill-card p-3 rounded text-center h-100 ${
                      darkMode
                        ? "bg-dark-subtle text-light"
                        : "bg-light text-dark"
                    }`}
                  >
                    <h5 className="fw-bold">Programming Languages</h5>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                      {["Python", "Java", "JavaScript", "C++"].map((lang) => (
                        <span
                          key={lang}
                          className={`badge ${
                            darkMode ? "bg-info" : "bg-primary"
                          } fs-6 p-2`}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className={`skill-card p-3 rounded text-center h-100 ${
                      darkMode
                        ? "bg-dark-subtle text-light"
                        : "bg-light text-dark"
                    }`}
                  >
                    <h5 className="fw-bold">Frontend Development</h5>
                    <div className="mt-2">
                      <p className="mb-1">HTML, CSS, JS</p>
                      <p className="mb-0">
                        <strong>Frameworks:</strong> React, Tailwind, Bootstrap
                        (Learning)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className={`skill-card p-3 rounded text-center h-100 ${
                      darkMode
                        ? "bg-dark-subtle text-light"
                        : "bg-light text-dark"
                    }`}
                  >
                    <h5 className="fw-bold">Data Structures & Algorithms</h5>
                    <p className="mb-0">
                      Problem solving and algorithm optimization
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className={`skill-card p-3 rounded text-center h-100 ${
                      darkMode
                        ? "bg-dark-subtle text-light"
                        : "bg-light text-dark"
                    }`}
                  >
                    <h5 className="fw-bold">Object-Oriented Programming</h5>
                    <p className="mb-0">OOPS in Java and Python</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="row justify-content-center mb-5" id="">
        <div className="col-md-10">
          <div
            className={`card elevated-card ${
              darkMode ? "bg-dark text-light" : "bg-white text-dark"
            } border-0`}
          >
            <div className="card-body p-4">
              <h3
                className={`card-title text-center mb-4 ${
                  darkMode ? "text-info" : "text-primary"
                }`}
              >
                <i className="bi bi-mortarboard-fill me-2"></i>EDUCATION
              </h3>
              <p className="text-center mb-4">
                Its a quest to unlock the real hero – your skills. Spoiler: The
                skills are the ones that save the day.
              </p>

              <div className="timeline">
                <div className="timeline-item">
                  <div
                    className={`timeline-marker ${
                      darkMode ? "bg-info" : "bg-primary"
                    }`}
                  ></div>
                  <div className="timeline-content">
                    <h5>BSc in Computer Science</h5>
                    <p>SST (affiliation with Bits Pilani)</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div
                    className={`timeline-marker ${
                      darkMode ? "bg-info" : "bg-primary"
                    }`}
                  ></div>
                  <div className="timeline-content">
                    <h5>12th from Kendriya Vidyalaya</h5>
                    <p>87.6% (School Topper)</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div
                    className={`timeline-marker ${
                      darkMode ? "bg-info" : "bg-primary"
                    }`}
                  ></div>
                  <div className="timeline-content">
                    <h5>10th from Kendriya Vidyalaya</h5>
                    <p>92.6%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-10">
          <div
            className={`card elevated-card ${
              darkMode ? "bg-dark text-light" : "bg-white text-dark"
            } border-0`}
          >
            <div className="card-body p-4">
              <h3
                className={`card-title text-center mb-4 ${
                  darkMode ? "text-info" : "text-primary"
                }`}
              >
                <i className="bi bi-controller me-2"></i>HOBBIES
              </h3>
              <p className="text-center mb-4">
                Staying sharp all day? Not happening. Here's how I treat my
                brain to a little vacation from the grind
              </p>

              <div className="row row-cols-2 row-cols-md-3 g-4 text-center">
                {[
                  "Content Creation (YouTube)",
                  "Video Editing",
                  "Basketball",
                  "Badminton",
                  "Gym",
                  "Reading (sometimes)",
                ].map((hobby, index) => (
                  <div key={index} className="col">
                    <div
                      className={`hobby-card p-3 rounded h-100 d-flex align-items-center justify-content-center ${
                        darkMode
                          ? "bg-dark-subtle text-light"
                          : "bg-light text-dark"
                      }`}
                    >
                      <p className="mb-0">{hobby}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Dark mode specific styling */
        .bg-dark-subtle {
          background-color: ${darkMode ? "#2a2a2a" : "#f8f9fa"} !important;
        }
        
        /* Elevated card effect */
        .elevated-card {
          box-shadow: ${
            darkMode
              ? "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)"
              : "0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)"
          };
          transform: translateY(0);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .elevated-card:hover {
          transform: translateY(-8px);
          box-shadow: ${
            darkMode
              ? "0 15px 35px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 15px rgba(13, 202, 240, 0.15)"
              : "0 15px 35px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 15px rgba(13, 110, 253, 0.15)"
          };
        }
        
        /* Project card wrappers for individual card elevation */
        .project-card-wrapper {
          transition: transform 0.3s ease;
        }
        
        .project-card-wrapper:hover {
          transform: translateY(-5px);
        }
        
        /* Override Bootstrap's default focus styling */
        :focus {
          box-shadow: 0 0 0 0.25rem ${
            darkMode ? "rgba(13, 202, 240, 0.25)" : "rgba(13, 110, 253, 0.25)"
          } !important;
        }
        
        /* Animated glow effect for profile image on hover */
        .rounded-circle:hover {
          box-shadow: 0 0 25px ${
            darkMode ? "rgba(13, 202, 240, 0.8)" : "rgba(13, 110, 253, 0.8)"
          } !important;
          transition: box-shadow 0.3s ease;
        }
        
        /* Card headers with subtle gradient */
        .card-title {
          position: relative;
          padding-bottom: 12px;
        }
        
        .card-title:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, 
            ${
              darkMode
                ? "rgba(13,110,253,0), rgba(13,202,240,1), rgba(13,110,253,0)"
                : "rgba(13,110,253,0), rgba(13,110,253,1), rgba(13,110,253,0)"
            });
          transform: translateX(-50%);
          border-radius: 3px;
        }
        
        /* Timeline styling */
        .timeline {
          position: relative;
          padding-left: 30px;
          margin-left: 20px;
          border-left: 2px solid ${darkMode ? "#495057" : "#dee2e6"};
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }
        
        .timeline-marker {
          position: absolute;
          left: -41px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        
        .timeline-content {
          padding-left: 10px;
        }
        
        /* Hover effects for hobby cards */
        .hobby-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hobby-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px ${
            darkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"
          };
        }
      `}</style>
    </div>
  );
}

export default Home;
