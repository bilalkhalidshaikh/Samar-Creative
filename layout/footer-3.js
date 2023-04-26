

function Footer3() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-3" id="footer" style={{"backgroundImage":"url(images/background/bg11.png), var(--gradient-sec)","backgroundSize":"cover, 200%",backgroundColor:"#0F2851",}}>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" style={{width:'120px',height:'70px'}} alt=""/></a> 
							</div>
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
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services style-1">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><a href="javascript:void(0);">Home</a></li>
								<li><a href="javascript:void(0);">About Us</a></li>
								<li><a href="javascript:void(0);">Services</a></li>
								<li><a href="javascript:void(0);">Team</a></li>
								<li><a href="javascript:void(0);">Blog</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services style-1">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="javascript:void(0);">Strategy & Research</a></li>
								<li><a href="javascript:void(0);">Web Development</a></li>
								<li><a href="javascript:void(0);">Web Solution</a></li>
								<li><a href="javascript:void(0);">Digital Marketing</a></li>
								<li><a href="javascript:void(0);">App Design </a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services style-1">
						   <h5 className="footer-title">Other links</h5>
							<ul>
							<li><Link href="/gdpr">GDPR</Link></li>
								<li><a href="javascript:void(0);">FAQ</a></li>
								<li><a href="javascript:void(0);">Portfolio</a></li>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
								<li><a href="javascript:void(0);">Terms & Conditions</a></li>
								<li><a href="javascript:void(0);">Support </a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="widget widget_getintuch">
							<h5 className="footer-title">Contact Us</h5>
							<ul>
								<li>
									<i className="fa fa-phone gradient"></i>
									<span>+12544624447<br/>+12544624447</span> 
								</li>
								<li>
									<i className="fa fa-envelope gradient"></i> 
									<span>hello@thedigitalsmith.co <br/>hello@thedigitalsmith.co</span>
								</li>
								<li>
									<i className="fa fa-map-marker gradient"></i>
									<span>Killeen, Texas United States of America</span>
								</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
		</div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 text-center"> 
					<span className="copyright-text">Copyright © 2023 <a href="/" target="_blank">TheDigitalSmith</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer3;