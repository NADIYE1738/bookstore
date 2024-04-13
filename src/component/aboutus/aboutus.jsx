import React from "react";
import "./aboutus.css";


const AboutUs = () => {
  return (
    <div>
      <div className="text-secondary p-2 ">
        
          <div className="titleabout fw-bold text-center">
            <h2>
              About <b>PAMEJA Book Store </b>
            </h2>
          </div>
          </div>
            <div className="about mx-auto">
              <div className="about-item">
                <h4 className="mx-3">PAMEJA</h4>
                <p className="mx-auto pt-5">Pameja book store is a user friendly online book store for all your East African cultural books. </p>
              </div>
              
              <div className="about-item">
                <h4 className="mx-3">Follow me on</h4>
                <section className="mx-auto" >
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/NADIYE1738/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/NADIYE1738/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                </section>
              </div>

              <div className="about-item">
                <h4 className="mx-3">My portfolio</h4>
              </div>
            </div>
        </div>

  
  );
}


export default AboutUs;
