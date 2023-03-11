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
          <div className="seven columns main-col about-me-text">
            <div>
              {resumeData.aboutme}
              <br /><br />
              {resumeData.skill}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
