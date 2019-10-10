import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contact me: 
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4><a href={resumeData.gmail}>Email me</a><br></br>
                  Phone number : {resumeData.phonenumber}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}