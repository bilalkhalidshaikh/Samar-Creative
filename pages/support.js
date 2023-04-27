import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from "../layout/header-3";
import Footer from "./../layout/footer";
import Counter from "./../element/counter";
import TeamSlider from '../component/teamSlider';
import Testimonial from '../element/testimonial';
import Blog from '../element/blog';
import Link from 'next/link';
import Quote from '../element/quote';

function AboutUs1() {
    const [isOpen, setOpen] = useState(false)
    return <>
        <Header />
        <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
    <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
        <div className="container">
            <div className="dlab-bnr-inr-entry">
                <h1>Support</h1>
                {/* <!-- Breadcrumb Row --> */}
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Support</li>
                    </ul>
                </nav>
                {/* <!-- Breadcrumb Row End --> */}
            </div>
        </div>
    </div>
    {/* <!-- Banner End --> */}
    
  {/* Main Content */}
<section className='content-inner'>
<div className='container'>
<h2 className="title">

Welcome to Digital Sharks LLC Support!
</h2>
<br/>
Our team is here to help you with any questions or issues you may encounter while using our platform. We strive to provide the best possible support to ensure you have a smooth and seamless experience with our products and services.
<br/>
<br/>
<h2 className="title">

Contacting Support:
</h2>
<ul className="list-arrow primary">
<li>
If you need assistance, please visit our support portal or email us at hello@thedigitalsharksllc.co.
    
</li>
<li>
Our support hours are Monday through Friday, 9:00 am to 5:00 pm EST.

</li>
<li>
For urgent matters outside of our support hours, please contact us via email and we will get back to you as soon as possible.

</li>
</ul>
<br/>
<br/>
<h2 className="title">

Frequently Asked Questions:
</h2>
<ul className="list-arrow primary">
<li>
    
Q: How do I access my Smart Prompts Library?
</li>
<li>
    
A: You will receive an email with login credentials after purchasing the Smart Prompts Library. Follow the instructions in the email to access your library.
</li>
<li>
Q: How do I use the Smart Prompts Library?
    
</li>
<li>
A: The library comes with a step-by-step guide to help you get started. Simply follow the instructions in the guide and start using the prompts to improve your marketing content.
    
</li>
<li>
    
Q: What is your refund policy?
</li>
<li>
A: We offer a 30-day money-back guarantee for the Smart Prompts Library. If you are not satisfied with the product, please contact us within 30 days of purchase for a full refund.
    
</li>
<li>
Q: Can I share my Smart Prompts Library with others?
    
</li>
<li>
A: No, the Smart Prompts Library is for personal use only and cannot be shared with others.

</li>







</ul>
<br/>
<br/>
<h4 className="title">

Thank you for choosing Digital Sharks LLC. We look forward to helping you achieve your marketing goals.
</h4>
</div>

</section>
  {/* Main Content */}
    
    
    {/* <!-- Team --> */}
    <section className="content-inner">
        <div className="container">
            <div className="section-head style-1 text-center">
                <h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
                <h2 className="title">Our Best Expertise</h2>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TeamSlider/>
                </div>
            </div>
        </div>
    </section>	
    
    {/* <!-- Testimonials --> */}
    <Testimonial/>
    
    {/* <!-- Blog --> */}
    <Blog/>
    
    {/* <!-- Get A Quote --> */}
    <Quote/>		
    
    {/* <!-- Call To Action --> */}
    <section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
        <div className="container">
            <div className="row action-box style-1 align-items-center">
                <div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="section-head style-1">
                        <h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
                        <h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                    <Link
                        href='/contact-us-1'
                        className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</Link>
                </div>
            </div>
        </div>
    </section>
        </div>
        <Footer />
    </>;
}

export default AboutUs1;
