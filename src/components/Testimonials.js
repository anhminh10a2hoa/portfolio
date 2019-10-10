import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Projects</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <img src={item.image} class="card-img-top" height="200px" width="400px"></img>
                          <blockquote>
                            <a href={item.link}>Check it out: </a>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}

{/* <div class="col col-md-6 col-sm">
      <div class="card" style="width: 18rem;"><img src="img/pi.jpg" class="card-img-top" alt="rasberry-pi">
<div class="card-body">
  <h5 class="card-title">Sound</h5>
  <p class="card-text">
    This project is to run a Raspberry Pi as an audio device. The device is able to do 2 functions: as
a sound collector and as a test-tone generator.</p>
  <a target="_blank" href="https://github.com/phungxuanton/appdev" class="btn btn-warning">Check it out</a>
</div>
</div>
    </div> */}