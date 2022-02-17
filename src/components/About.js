import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="./images/profilepic.JPG" alt="" />
          </div>

          <div className="seven columns main-col">
            <p>
              <b className="black-color">Name:</b> {resumeData.name} <br />
              <b className="black-color">D.O.B: </b> {resumeData.dob} <br />
              <b className="black-color">Nationality: </b> {resumeData.nationality} <br />
              <b className="black-color">Address: </b> {resumeData.address} <br />
              {resumeData.aboutme}
              <br />
              {resumeData.skill}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
