import { useState } from 'react';
import Slider from "react-slick";


function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:true,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        dots:false,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings} 
                
            >
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
					
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                            "Digital Sharks LLC has completely transformed the way we manage our business operations. Its user-friendly interface and advanced features have made it incredibly easy to streamline our processes and improve our efficiency. I highly recommend this product to anyone."
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/cak.jfif"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Cak Dikin
                                </strong>
                                <span className="testimonial-position">
                                    CEO & Founder{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                            "As a small business owner, I was struggling to keep up with the demands of running my business. Digital Sharks LLC has been a lifesaver! Its simple and intuitive design has made managing my finances, inventory, and customers a breeze. I couldn't be happier with this product." 
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/lora.jfif"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Lora Price
                                </strong>
                                <span className="testimonial-position">
                                    Owner{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                            "Digital Sharks LLC has saved us countless hours of work and made our marketing campaigns more effective and productive than ever before. Its advanced analytics and reporting tools have helped us better understand our customers and improve our messaging." 
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Sara John,
                                </strong>
                                <span className="testimonial-position">
                                Marketing Manager{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                            "Digital Sharks LLC has been a game-changer for our team collaboration and productivity and efficiently. Its project management tools have helped us stay organized and on track, while its communication features have improved our team's ability to work together efficiently."
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Tom Williams,
                                </strong>
                                <span className="testimonial-position">
                                Project Manager{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;
