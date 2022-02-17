import React from 'react';
const Resume = ({resumeData}) => {

  const goToCompanyLink = (link) => {
    window.open(link,'_blank')
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization + ' - ' + item.Gpa}
                      <span>&bull;</span>{' '}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Experience</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.experience &&
            resumeData.experience.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3 className="company" onClick={() => goToCompanyLink(item.Link)}>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="list-inline">
              {resumeData.skillLinks.map((item, index) => {
                return (
                  <li key={index} className={`list-inline-item ${item.name}`}>
                    <img src={item.className} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;