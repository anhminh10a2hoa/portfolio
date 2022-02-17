import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {resumeData.testimonials &&
                    resumeData.testimonials.map((item, index) => {
                      return (
                        <li key={index}>
                          <img
                            src={item.image}
                            alt={item.image}
                            className="card-img-top"
                            height="200px"
                            width="400px"
                          />
                          <blockquote>
                            <a href={item.link}>Check it out: </a>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>{' '}
              {/* div.flexslider ends */}
            </div>{' '}
            {/* div.flex-container ends */}
          </div>{' '}
          {/* row ends */}
        </div>{' '}
        {/* text-container ends */}
      </section>
    );
  }
}
