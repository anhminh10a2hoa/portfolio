import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              <h2>Contact me: </h2>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  Gmail: {resumeData.gmail}<br></br>
                  Phone number: {resumeData.phonenumber}<br></br>
                  Address: {resumeData.address}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}