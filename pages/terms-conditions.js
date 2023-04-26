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
                <h1>Terms & Conditions</h1>
                {/* <!-- Breadcrumb Row --> */}
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
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
<h2 className="title">Terms & Conditions of DigitalSmith</h2>

<p className="title">Welcome to DigitalSmith. By accessing our website, you agree to be bound by the following Terms and Conditions. Please read them carefully before using our website.</p>
<br/>
<h2 className="title">

Acceptance of Terms
</h2>
These Terms and Conditions apply to all visitors, users, and others who access or use the DigitalSmith website. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these Terms and Conditions, you may not access our website.
<br/>
<br/>
<br/>
<h2 className="title">

Use License
</h2>
Permission is granted to temporarily download one copy of the materials on DigitalSmith's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
<br/>
<br/>
<ul className="list-arrow primary">
<li>
Modify or copy the materials;
    
</li>
<li>

Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
</li>
<li>

Attempt to decompile or reverse engineer any software contained on DigitalSmith's website;
</li>
<li>
Remove any copyright or other proprietary notations from the materials; or

</li>
<li>
Transfer the materials to another person or "mirror" the materials on any other server.

</li>
</ul>
<br/>
This license shall automatically terminate if you violate any of these restrictions and may be terminated by DigitalSmith at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

<br/>
<br/>
<br/>
<h2 className="title">

Disclaimer
</h2>
The materials on DigitalSmith's website are provided on an 'as is' basis. DigitalSmith makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
<br/>
<br/>
Further, DigitalSmith does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
<br/>
<br/>
<h2 className="title">

Limitations
</h2>
In no event shall DigitalSmith or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DigitalSmith's website, even if DigitalSmith or a DigitalSmith authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
<br/>
<br/>
<br/>
<h2 className="title">

Revisions and Errata
</h2>
The materials appearing on DigitalSmith's website could include technical, typographical, or photographic errors. DigitalSmith does not warrant that any of the materials on its website are accurate, complete, or current. DigitalSmith may make changes to the materials contained on its website at any time without notice. DigitalSmith does not, however, make any commitment to update the materials.
<br/>
<br/>
<br/>
<h2 className="title">

Links
</h2>
DigitalSmith has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DigitalSmith of the site. Use of any such linked website is at the user's own risk.
<br/>
<br/>
<br/>
<h2 className="title">

Site Terms of Use Modifications
</h2>
DigitalSmith may revise these Terms and Conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions.
<br/>
<br/>
<br/>
<h2 className="title">

Governing Law
</h2>
Any claim relating to DigitalSmith's website shall be governed by the laws of the State of California without regard to its conflict of law provisions.
<br/>
<br/>
<br/>

<h2 className="title">

Entire Agreement
</h2>
These Terms and Conditions constitute the entire agreement between you and DigitalSmith regarding your use of our website and supersede all
<br/>
<br/>
<br/>
<h2 className="title">

User Conduct
</h2>
Users agree to use the DigitalSmith website and services in a lawful and appropriate manner. Users may not use the services for any unlawful or fraudulent activities, or to harm or harass others. Users may not attempt to gain unauthorized access to the DigitalSmith website or services, or interfere with the operation of the site.
<br/>
<br/>
<br/>
<h2 className="title">

Intellectual Property
</h2>

All intellectual property rights related to DigitalSmith, including but not limited to trademarks, copyrights, and patents, are the property of DigitalSmith or its respective owners. Users may not use or reproduce any part of DigitalSmith's intellectual property without prior written permission.
<br/>
<br/>
<br/>
<h2 className="title">

Disclaimer of Warranties
</h2>
DigitalSmith makes no warranty or representation, express or implied, regarding the website or services. DigitalSmith does not warrant that the website or services will be error-free or uninterrupted, or that defects will be corrected. DigitalSmith shall not be liable for any damages arising out of or in connection with the use of the website or services.
<br/>
<br/>
<br/>
<h2 className="title">

Limitation of Liability
</h2>
DigitalSmith shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of the website or services, including but not limited to damages for loss of profits, goodwill, use, or data.
<br/>
<br/>
<br/>
<h2 className="title">

Indemnification
</h2>
Users agree to indemnify and hold DigitalSmith harmless from any claims, damages, losses, or expenses arising out of or in connection with the use of the website or services, including but not limited to any claims or damages resulting from the user's violation of these terms and conditions.
<br/>
<br/>
<br/>
<h2 className="title">

Governing Law and Jurisdiction
</h2>
These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which DigitalSmith is located. Any disputes arising out of or in connection with these terms and conditions shall be resolved through arbitration in accordance with the rules of the American Arbitration Association.
<br/>
<br/>
<br/>
<h2 className="title">

Changes to Terms and Conditions
</h2>
DigitalSmith reserves the right to modify these terms and conditions at any time, without prior notice. Users are responsible for reviewing the terms and conditions regularly for any changes.
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
