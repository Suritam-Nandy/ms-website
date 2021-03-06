import React from "react";

const Home = () => {
  return (
    <div>
      {/* <!-- navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="list.html">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- ////////////////////////////////////////////////////// --> */}
      {/* <!-- top cover jumbotron section--> */}
      {/* <!-- ///////////////////////////////////////////////////// --> */}

      {/* <!-- number-counter --> */}
      <div className="databox">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6 datainnerbox">
              <span className="counter-count">100</span>
              <span>+</span>
              <div className="datahead">Projects</div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 datainnerbox">
              <span className="counter-count">100</span>
              <span>+</span>
              <div className="datahead">Contractors</div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 datainnerbox">
              <span className="counter-count">100</span>
              <span>+</span>
              <div className="datahead">Carpenters</div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-6 datainnerbox"
              style={{ "border-right": "none" }}
            >
              <span className="counter-count">100</span>
              <span>+</span>
              <div className="datahead">Interior Designers</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- service section --> */}
      <div className="container servicewrapper">
        <div
          className="col-md-3 ab3"
          data-aos="zoom-in-right"
          data-aos-offset="-500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <i className="fas fa-medal ab3icon"></i>
          <p className="ab3text">Quality Assured</p>
        </div>
        <div
          className="col-md-3 ab3"
          data-aos="zoom-in-up"
          data-aos-offset="-500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <i className="fas fa-user-tie ab3icon"></i>
          <p className="ab3text">Professional Team</p>
        </div>
        <div
          className="col-md-3 ab3"
          data-aos="zoom-in-up"
          data-aos-offset="-500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <i className="fas fa-boxes ab3icon"></i>
          <p className="ab3text">Highly Experienced</p>
        </div>
        <div
          className="col-md-3 ab3"
          data-aos="zoom-in-left"
          data-aos-offset="-500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <i className="fas fa-award ab3icon"></i>
          <p className="ab3text">Impecable Reputation</p>
        </div>
      </div>

      {/* <!-- ////////////////////////////////////////////////////// --> */}
      {/* <!-- why choose us section --> */}
      {/* <!-- ///////////////////////////////////////////////////// --> */}

      {/* <!-- project section --> */}
      <div className="projectwrapper">
        <div className="projectheadbox">
          <div className="cover cover2"></div>
          <h1 className="projecthead">Projects</h1>
        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src="Images/ba.jpg" className="gallery__img" alt=" 1" />
            <div className="cover cover3"></div>
            <div className="projectinfo">
              <div className="projecttitle">Lorem Ipsum</div>
              <div className="projecttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do.
              </div>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/Images/ba2.jpg"
              className="gallery__img img-fuild"
              alt=""
            />
            <div className="cover cover3"></div>
            <div className="projectinfo">
              <div className="projecttitle">Lorem Ipsum</div>
              <div className="projecttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do.
              </div>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src="Images/ba3.jpg" className="gallery__img" alt="Image 3" />
            <div className="cover cover3"></div>
            <div className="projectinfo">
              <div className="projecttitle">Lorem Ipsum</div>
              <div className="projecttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do..
              </div>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src="Images/ba4.jpg" className="gallery__img" alt="Image 4" />
            <div className="cover cover3"></div>
            <div className="projectinfo">
              <div className="projecttitle">Lorem Ipsum</div>
              <div className="projecttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do.
              </div>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src="Images/ba.jpg" className="gallery__img" alt="Image 5" />
            <div className="cover cover3"></div>
            <div className="projectinfo">
              <div className="projecttitle">Lorem Ipsum</div>
              <div className="projecttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do.
              </div>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src="Images/ba2.jpg" className="gallery__img" alt="Image 6" />
            <div className="cover cover3"></div>
            <div className="projectinfo">
              <div className="projecttitle">Lorem Ipsum</div>
              <div className="projecttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do.
              </div>
            </div>
          </figure>
        </div>
      </div>

      {/* <!-- aboutus section --> */}
      <div className="aboutwrapper">
        <div
          className="aboutbox"
          data-aos="flip-up"
          data-aos-offset="-500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="aboutimg"></div>
          <h1 className="abouthead">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <span className="servelink">Learn more</span>
        </div>
      </div>

      {/* <!-- testimonials --> */}
      <div className="testbox">
        <div className="container">
          <h1 className="testhead partnerhead">Testimonials</h1>

          <div className="carousel testcarousel">
            <div className="carousel-cell 1 carousel-cell-test">
              <div className="card">
                <div className="card-body testcard">
                  <div className="testiconbox">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="card-text testp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <p className="card-text testp testname">-Matthew Richards</p>
                </div>
              </div>
            </div>
            <div className="carousel-cell 2 carousel-cell-test">
              <div className="card">
                <div className="card-body testcard">
                  <div className="testiconbox">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="card-text testp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <p className="card-text testp testname">-Matthew Richards</p>
                </div>
              </div>
            </div>
            <div className="carousel-cell 3 carousel-cell-test">
              <div className="card">
                <div className="card-body testcard">
                  <div className="testiconbox">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="card-text testp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <p className="card-text testp testname">-Matthew Richards</p>
                </div>
              </div>
            </div>
            <div className="carousel-cell 4 carousel-cell-test">
              <div className="card">
                <div className="card-body testcard">
                  <div className="testiconbox">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="card-text testp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <p className="card-text testp testname">-Matthew Richards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ////////////////////////////////////////////////////// --> */}
      {/* <!-- Partner section --> */}
      {/* <!-- ///////////////////////////////////////////////////// --> */}

      {/* <!-- footer section --> */}
      <div className="footerwrapper">
        <h1 className="foothead">Contact Us</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 contactbox">
              <h1>Logo</h1>
            </div>
            <div className="col-md-4 col-sm-4 contactbox">
              <p className="contacttext">+91 98xxxxxxx0</p>
              <p className="contacttext">sample@gmail.com</p>
              <p className="contacttext">xx sample address, India</p>
            </div>
            <div className="col-md-4 col-sm-4 contactbox">
              <p className="foottext">Connect</p>
              <p className="connectbox">
                <i className="fab fa-twitter connecticon"></i>
              </p>
              <p className="connectbox">
                <i className="fab fa-facebook-f connecticon"></i>
              </p>
              <p className="connectbox">
                <i className="fab fa-linkedin connecticon"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
