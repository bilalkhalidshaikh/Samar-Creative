import { useState } from "react";
import ModalVideo from "react-modal-video";
import Header from "../layout/header-3";
import Footer from "./../layout/footer";
import Counter from "./../element/counter";
import TeamSlider from "../component/teamSlider";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Link from "next/link";
import Quote from "../element/quote";

function AboutUs1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>GDPR</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    GDPR
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* Main Content */}
        <section className="content-inner">
          <div className="container">
            <h2 className="title"> Introduction:</h2>
            At Digital Shark LLC , we are committed to ensuring the privacy and
            security of the personal data we collect, use, and disclose.
            <br />
            This privacy policy explains how we use and protect your personal
            data, and outlines your rights regarding your personal data.
            <br />
            Please read this policy carefully to understand how we handle your
            personal data.
            <br />
            <br />
            <br />
            <h2 className="title">Personal Data We Collect:</h2>
            We may collect personal data from you when you use our products or
            services, visit our website, or interact with us in other ways.
            <br />
            This may include your name, email address, phone number, and other
            contact information, as well as information about your use of our
            products or services.
            <br />
            We may also collect information about your device, such as your IP
            address and browser type.
            <br />
            <br />
            <br />
            <h2 className="title">How We Use Your Personal Data:</h2>
            We use your personal data to provide you with our products and
            services, to communicate with you about our products and services,
            and to improve our products and services.
            <br />
            We may also use your personal data for marketing purposes, such as
            to send you promotional materials about our products and services.
            <br />
            <br />
            <br />
            <h2 className="title">How We Protect Your Personal Data:</h2>
            We take appropriate technical and organizational measures to protect
            your personal data from unauthorized access, use, or disclosure.
            <br />
            We also require our service providers and business partners to take
            appropriate measures to protect your personal data.
            <br />
            <br />
            <br />
            <h2 className="title">Your Rights Regarding Your Personal Data:</h2>
            You have the right to access, rectify, or erase your personal data.
            <br />
            You also have the right to object to the processing of your personal
            data or to request that we restrict the processing of your personal
            data. You may also have the right to data portability.
            <br />
            If you have any questions or concerns regarding your personal data,
            please contact us using the contact information provided below.
            <br />
            <br />
            <br />
            <h2 className="title">Contact Information:</h2>
            If you have any questions or concerns regarding this privacy policy
            or the processing of your personal data, please contact us at
            <a href="mailto:hello@thedigitalsmith.co">
              hello@thedigitalsmith.co
            </a>
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
                <TeamSlider />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <Testimonial />

        {/* <!-- Blog --> */}
        <Blog />

        {/* <!-- Get A Quote --> */}
        <Quote />

        {/* <!-- Call To Action --> */}
        <section
          style={{
            backgroundImage: "url(images/background/bg5.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    More With Us
                  </h6>
                  <h2 className="title">
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link
                  href="/contact-us-1"
                  className="btn btn-link d-inline-flex align-items-center"
                >
                  <i className="fa fa-angle-right m-r10"></i>Join Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs1;
