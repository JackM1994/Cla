
import { Link } from 'react-router-dom';
import './styles/styles.css';


function App() {
  return (
    <div className="App">
      <body>
      <div className="mobile-container">
        <div className="topnav">
            {/* <Link to="#home"  id="logos" className="active">CLA</Link>
            <div id="menuItems">
                <Link to="#aboutus">About Us</Link>
                <Link to="#services">Services</Link>
                <Link to="#projects">Projects</Link>
                <Link to="#contact">Contact Us</Link>
            </div> */}
            {/* <Link to="javascript:void(0);" className="icon" onclick="openMenu()"><i className="fa fa-bars"></i></Link> */}
        </div>

      <div className="desktop-nav">
         <li className="desktop-items"><div id="cla" className="active"><img className="iconic"src="images/cla-logo.PNG" alt="logo"/></div></li> 
          <ul className="nav-menu">
              <li className="desktop-items"><div >About Us</div></li>
              <li className="desktop-items"><div>Services</div></li> 
              <li className="desktop-items"><div>Projects</div></li>
              <li className="desktop-items"><div>Contact Us</div></li>
          </ul> 
        </div>
        <div className="home">
            <h3 className="company-title">CLA Landscaping</h3>
            <p className="tel">Tel: 555-555-5555</p>
            {/* <Link className="explore" href="/aboutus"><button className="explored">Learn More </button></Link>  */}
        </div>
        
        <div id="app">
            <div className="home">
                <div className="titles">
                    <div className="titles-inner">
                        <div className="cla">
                            <div className="clainner">CLA</div>
                        </div>
                        <div className="landscaping">
                            <div className="landscapinginner">Landscaping</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="bimage">
                    <img src="images/digging.gif" alt="" />
                </div>  
            
        </div>
                            
      </div>

      {/* <!-- About Us --> */}
      <div className="about" id="aboutus">
          <div className="about-img-container">
              <img src="images/about.jpeg" alt="about" className="about-img"/>
          </div>
          <div className="about-intro">
            <h3 className="about-header" data-aos="fade-down">About Us</h3>
              <p className="intro"data-aos="fade-down">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
          </div>
      </div>

      {/* <!-- Services --> */}
      <div className="service" id="services">
          <h3 className="service-header" data-aos="fade-down">Services</h3>
          <p className="service-details" data-aos="fade-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div className="cards" data-aos="zoom-in-right" data-aos-delay="300"  data-aos-easing="ease-in-back"  data-aos-duration="1000">
              <div className="card">
                    <h5 className="number">01</h5>
                    <div className="card-img-container">
                    </div>
                    <h3 className="service-title">Maintenance</h3>
                    <p className="service-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
              <div className="card">
                    <h5 className="number">02</h5>
                    <div className="card-img-container" id="service2">
                    </div>
                    <h3 className="service-title">Tree and Shrub Planting</h3>
                    <p className="service-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className="card">
                    <h5 className="number">03</h5>
                    <div className="card-img-container" id="service3">
                    </div>
                    <h3 className="service-title">Construction</h3>
                    <p className="service-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
          </div>
      </div>

      {/* <!-- Projects --> */}
      <div className="project" id="projects">
          <h3 className="projects-header" data-aos="fade-down">Projects</h3>
          <p className="projects-details" data-aos="fade-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="project-slider">
            <div className="project-div mySlides fade" >
                <div className="img-project">
                    <div className="number-div">
                        <p className="number-project">01</p>
                    </div>
                    <img src="images/home.jpeg" alt="" className="project-image" />
                </div>
                <div className="project-details">
                  <div className="project-name-div">
                      <h3 className="project-name">Project 01</h3>
                  </div>
                  <h5 className="area">St. Albert</h5>
                  <p className="project-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="project-div mySlides fade">
              <div className="img-project">
                  <div className="number-div">
                      <p className="number-project">02</p>
                  </div>
                  <img src="images/home.jpeg" alt="" className="project-image" />
              </div>
              <div className="project-details">
                <div className="project-name-div">
                    <h3 className="project-name">Project 02</h3>
                </div>
                <h5 className="area">St. Albert</h5>
                <p className="project-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
          </div>
          <div className="project-div mySlides fade">
              <div className="img-project">
                  <div className="number-div">
                      <p className="number-project">03</p>
                  </div>
                  <img src="images/home.jpeg" alt="" className="project-image" />
              </div>
              <div className="project-details">
                <div className="project-name-div">
                    <h3 className="project-name">Project 03</h3>
                </div>
                <h5 className="area">St. Albert</h5>
                <p className="project-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
          </div>
          <div className="project-div mySlides div">
              <div className="img-project">
                  <div className="number-div">
                      <p className="number-project">04</p>
                  </div>
                  <img src="images/home.jpeg" alt="" className="project-image" />
              </div>
              <div className="project-details">
                <div className="project-name-div">
                    <h3 className="project-name">Project 04</h3>
                </div>
                <h5 className="area">St. Albert</h5>
                <p className="project-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
          </div>
          {/* <Link className="prev" onclick="plusSlides(-1)">&#10094;</Link>
          <Link className="next" onclick="plusSlides(1)">&#10095;</Link> */}
          {/* <!-- The dots/circles --> */}
        <div>
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
            <span className="dot" onclick="currentSlide(4)"></span>
        </div>
        </div>
      </div>

      {/* <!-- Footer Section --> */}
      <footer id="footer">
          <div className="div-footer">
              <div className="top-half">
                <div className="about-footer">
                    <h3 className="footer-heading">About Us</h3>
                    <p className="about-us-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="footer-nav">
                  <h3 className="footer-heading">Extra Navigation</h3>
                  {/* <ul className="nav-list">
                      <li className="footer-list"><Link to="#home">Home</Link></li>
                      <li className="footer-list"><Link to="#aboutus">About</Link></li>
                      <li className="footer-list"><Link to="#services">Services</Link></li>
                      <li className="footer-list"><Link to="#projects">Projects</Link></li>
                  </ul> */}
                </div>
                <div className="working-hours">
                  <h3 className="footer-heading">Working Hours</h3>
                  <ul className="hours-list">
                      <li className="workdays">Monday
                          <span className="right">07:30-18:00</span>
                      </li>
                      <li className="workdays">Tuesday
                          <span className="right">07:30-18:00</span>
                      </li>
                      <li className="workdays">Wednesday
                          <span className="right">07:30-18:00</span>
                      </li>
                      <li className="workdays">Thursday
                          <span className="right">07:30-18:00</span>
                      </li>
                      <li className="workdays">Friday
                          <span className="right">07:30-18:00</span>
                      </li>
                      <li className="workdays">Saturday
                          <span className="right">07:30-14:00</span>
                      </li>
                      <li className="workdays">Sunday
                          <span className="right">Closed</span>
                      </li>
                  </ul>
                </div>
              </div>
              
              <div className="contact-info" id="contact">
                  <div className="company-logo">
                      <img src="images/Capture.PNG" alt="company-logo" className="cLogo" />
                      <span className="company-name">CLA Landscaping</span>
                      <span className="company-number">+555 555 5555</span>
                  </div>
                  <div className="email-contact">
                      <span className="email-text">Email us at</span>
                      <h5 className="emailAddress">hello@clalandscaping.com.ca</h5>
                  </div>
                  <div className="social">
                      <ul className="socialMedia">
                          <li className="socialIcons"><img src="images/facebook.png" alt="facebook" className="facebook" /></li>
                          <li className="socialIcons"><img src="images/instagram.png" alt="instagram" /></li>
                          <li className="socialIcons"><img src="images/twitter.png" alt="twitter" /></li>
                      </ul>
                  </div>
                  <h6 className="copyright">&#169; CLA Landscaping 2021</h6>
              </div>
            </div>
      </footer>
    </body>
    </div>
  );
}

export default App;
