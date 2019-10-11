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

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               <b>Name:</b> {resumeData.name} <br></br>
               <b>D.O.B: </b> {resumeData.dob} <br></br>
               <b>Nationality: </b> {resumeData.nationality} <br></br>
               {
                 resumeData.aboutme
               }
               </p>
            </div>
         </div>
      </section>
    );
  }
}