import Link from 'next/link';

function Footer() {
  return <>
    {/* <!-- Footer --> */}
  <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)",backgroundColor:"#0F2851",}}>
      <div className="footer-top">
          <div className="container">
              <div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                  <div className="row align-items-center">
                      <div className="col-xl-6 col-md-4">
                          <div className="footer-logo">
                              <a href="/"><img src="images/logo.png"  style={{width:'120px',height:'50px'}}  alt=""/></a> 
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                          <div className="icon-bx-wraper left m-b10">
                              <div className="icon-lg"> 
                                  <Link href="#" className="icon-cell">

                                      <i className="flaticon-email"></i>

                                  </Link>	
                              </div>
                              <div className="icon-content">
                                  <p>+91 987-654-3210<br/>info@example.com</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                          <div className="icon-bx-wraper left m-b10">
                              <div className="icon-lg"> 
                                  <Link href="#" className="icon-cell">

                                      <i className="flaticon-location"></i>

                                  </Link>	
                              </div>
                              <div className="icon-content">
                                  <p>Marmora Road Chi Minh City, Vietnam</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                      <div className="widget widget_about">
                          <h5 className="footer-title">About Us</h5>
                          <p>At DigitalSmith, our mission is to help small businesses succeed by providing them with the tools they need to streamline their operations, improve their performance, and achieve their goals.
</p>
                          <div className="dlab-social-icon">
                              <ul>
                                  <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                  <li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
                                  <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                      <div className="widget widget_services">
                          <h5 className="footer-title">Our links</h5>
                          <ul>
                              <li><Link href="#">Home</Link></li>
                              <li><Link href="#">About Us</Link></li>
                              <li><Link href="#">Services</Link></li>
                              <li><Link href="#">Team</Link></li>
                              <li><Link href="#">Blog</Link></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                      <div className="widget widget_services">
                          <h5 className="footer-title">Our Services</h5>
                          <ul>
                              <li><Link href="#">Strategy & Research</Link></li>
                              <li><Link href="#">Web Development</Link></li>
                              <li><Link href="#">Web Solution</Link></li>
                              <li><Link href="#">Digital Marketing</Link></li>
                              <li><Link href="#">App Design </Link></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                      <div className="widget widget_services">
                         <h5 className="footer-title">Other links</h5>
                         <ul>
                              <li><Link href="#">FAQ</Link></li>
                              <li><Link href="#">Portfolio</Link></li>
                              <li><Link href="#">Privacy Policy</Link></li>
                              <li><Link href="#">Terms & Conditions</Link></li>
                              <li><Link href="#">Support </Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- footer bottom part --> */}
      <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s" style={{backgroundColor:"#0F2851",borderTop:'1px solid #ccc'}}>
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 text-center"> 
                      <span className="copyright-text">Copyright © 2023 <a href="/" target="_blank">TheDigitalSmith</a>. All rights reserved.</span> 
                  </div>
              </div>
          </div>
      </div>
  </footer>
  {/* <!-- Footer End --> */}
  </>;
}

export default Footer;