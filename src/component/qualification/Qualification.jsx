import React from 'react'

export const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Education and Experience</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button button--flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>
            <div className="qualification__button button--flex">
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Bachelor Of Electrical Engineering<br />
                  (Field of Interest: Computer) <br />
                  GPA: 3.43
                  </h3>
                  <span className="qualification__subtitle">Del Institute of Technology</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    Aug, 2018 - Oct, 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Electrical Engineering</h3>
                  <span className="qualification__subtitle">Lembaga Penerbangan dan Antariksa Nasional (LAPAN) <br />
                  Project: Building a sensor device as a communication system between earth data to satellites.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    Jun, 2021 - Aug, 2021
                  </div>
                  <span></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Software Engineering</h3>
                  <span className="qualification__subtitle">PT. Idea Kolaborasi Utama <br />
                  Building a prototype of a mobile banking application using Angular and accessing data through a database using phpMyAdmin.
                  Developing the backend of the Digital Society mobile application using Spring Boot and managing the database using phpMyAdmin.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    Oct, 2023 - Apr, 2024
                  </div>
                  <span></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">QA Engineering</h3>
                  <span className="qualification__subtitle">PT. Bank Negara Indonesia <br />
                  <ul>
                    <li>Conducted manual testing of applications and banking systems on Desktop, Web, and Mobile (Android & IOS) devices to track defects, inconsistencies, and bugs as well as application performance.</li>
                    <li>Contribute to process improvement discussions and implement best practices in testing workflows and ensure timely completion of testing tasks to meet project deadlines.</li>
                    <li>Create, maintain, and update test documentation, including test plans, cases, and scripts.</li>
                  </ul>
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    May, 2024 - Dec, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}