
import Link from 'next/link';
import { useEffect, useState } from 'react';
function Header() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
	 /* for class fixed  */
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
	
    return <>
      {/* <!-- Header --> */}
      <header className="site-header header-transparent text-black mo-left" id="fix-header">
          {/* <!-- Main Header --> */}
          <div className={`sticky-header main-bar-wraper navbar-expand-lg ${scroll ? "is-fixed" : ""}`}>
              <div className="main-bar clearfix ">
                  <div className="container clearfix">
                      {/* <!-- Website Logo --> */}
                      <div className="logo-header mostion logo-dark">
                         <Link href="/"><img src="images/logo.png" alt=""/></Link>
                      </div>
                      {/* <!-- Nav Toggle Button --> */}
                      <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                          <span></span>
                          <span></span>
                          <span></span>
                      </button>
                      {/* <!-- Extra Nav --> */}
                      <div className="extra-nav">
                          <div className="extra-cell">
                              <Link
                                  href="/contact-us-1"
                                  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Get A Quote</Link>
                          </div>
                      </div>
                      <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                          <div className="logo-header">
                              <Link href="/"><img src="images/logo.png" alt=""/></Link>
                          </div>
                          <ul className="nav navbar-nav navbar">	
                              <li><Link href="/">Home</Link></li>
                              <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                  <ul className="sub-menu">
                                      <li><Link href="/about-us-1">About Us</Link></li>
                                      <li><Link href="/faq-1">Faq</Link></li>
                                      <li><Link href="/pricing-table-1">Pricing Table</Link></li>
                                      <li><Link href="/team-1">Team</Link></li>
                                      <li><Link href="/coming-soon">Coming Soon</Link></li>
                                      <li><Link href="/error-404">Error 404</Link></li>
                                      <li><Link href="/sitedown">Site Down</Link></li>
                                  </ul>
                              </li>
                              <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
                                  <ul className="sub-menu">
                                                  
                                      <li><Link href="/services-1">Services</Link></li>
                                      <li><Link href="/services-details-1">Services Details</Link></li>
                                  </ul>
                              </li>
                              <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                  <ul className="sub-menu">
                                      <li><Link href="/blog-large-right-sidebar">Large Right Sidebar</Link></li>
                                      <li><Link href="/blog-details-1">Blog Details</Link></li>
                                  </ul>
                              </li>
                              <li><Link href="/contact-us-1">Contact Us</Link></li>
                          </ul>
                          <div className="dlab-social-icon">
                              <ul>
                                  <Link href="https://en-gb.facebook.com/" className="fa fa-facebook"></Link>
                                  <Link href="https://twitter.com/login?lang=en" className="fa fa-twitter"></Link>
                                  <Link href="https://www.linkedin.com/login" className="fa fa-linkedin"></Link>
                                  <Link href="https://www.instagram.com/" className="fa fa-instagram"></Link>
                              </ul>
                          </div>		
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
      
    </>;
  }
  
  export default Header;

  