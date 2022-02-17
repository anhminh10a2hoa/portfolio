import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="./images/penguin-ava.jfif" alt="" />
          </div>

          <div className="seven columns main-col">
            <h2>About Me</h2>
            <p>
              <b>Name:</b> {resumeData.name} <br />
              <b>D.O.B: </b> {resumeData.dob} <br />
              <b>Nationality: </b> {resumeData.nationality} <br />
              {resumeData.aboutme}
              <br />
              {resumeData.aboutme1}
              <br />
              {resumeData.aboutme2}
              <br />
              {resumeData.aboutme3}
              <br />
              {resumeData.aboutme4}
              <br />
              {resumeData.aboutme5}
              <br />
              {resumeData.aboutme6}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
