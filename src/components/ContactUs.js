import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h2 className="lead">Contact me: </h2>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                Gmail:
                <a href={`mailto:${resumeData.gmail}`}> {resumeData.gmail}</a>
                <br />
                Phone number: {resumeData.phonenumber}
                <br />
                Address: {resumeData.address}
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
