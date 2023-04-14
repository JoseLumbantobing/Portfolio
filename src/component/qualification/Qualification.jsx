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
                  (Specialization: Computer)</h3>
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
                  <span className="qualification__subtitle">Lembaga Penerbangan dan Antariksa Nasional (LAPAN)</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    Jun, 2021 - Aug, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}