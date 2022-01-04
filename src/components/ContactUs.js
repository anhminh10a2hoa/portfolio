import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
          <h2 className="lead">Contact me: </h2>
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                Gmail:
                <a className="hl-text" href={`mailto:${resumeData.gmail}`}> {resumeData.gmail}</a>
                <br />
                Phone number: <p className="hl-text">{resumeData.phonenumber}</p>
                <br />
                Address: <p className="hl-text">{resumeData.address}</p>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
