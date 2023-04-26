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
                <h1>Privacy Policy</h1>
                {/* <!-- Breadcrumb Row --> */}
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
<h2 className="title">Privacy Policy</h2>
<p>

Effective date: April 26, 2023

DigitalSmith ("us", "we", or "our") operates the digitalsmith.com website (the "Service").

This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.

Information Collection And Use
We collect several different types of information for various purposes to provide and improve our Service to you.

Types of Data Collected
Personal Data
While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
</p>
<ul className="list-arrow primary">
<li>
    
Email address
</li>
<li>
First name and last name

</li>
<li>

Phone number
</li>
<li>

Address, State, Province, ZIP/Postal code, City
</li>
<li>
Cookies and Usage Data

</li>
<li>

Usage Data
</li>
</ul>
<br/>
<br/>
<p>
We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
</p>
<br/>
<br/>
<h2 className="title">Tracking & Cookies Data</h2>
<p>
We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.

Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
</p>
<br/>
<br/>
<h2 className="title">Examples of Cookies we use:</h2>
<p>
Session Cookies. We use Session Cookies to operate our Service.
Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
Security Cookies. We use Security Cookies for security purposes.
Use of Data

</p>
<br/>
<h4 className="title">DigitalSmith uses the collected data for various purposes:</h4>
<br/>
<ul className="list-arrow primary">
<li>

To provide and maintain the Service
</li>
<li>

To notify you about changes to our Service
</li>
<li>

To allow you to participate in interactive features of our Service when you choose to do so
</li>
<li>

To provide customer care and support
</li>
<li>
To provide analysis or valuable information so that we can improve the Service

</li>
<li>
To monitor the usage of the Service

</li>
<li>
To detect, prevent and address technical issues

</li>
<li>

Transfer of Data
</li>
</ul>
<br/>
<br/>

Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
<br/>
<br/>

If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
<br/>
<br/>
Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
<br/>
<br/>
DigitalSmith will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.

Disclosure of Data
Business Transaction
If DigitalSmith is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is safe.

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
