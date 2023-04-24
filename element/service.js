import { useEffect, useState } from "react";
import Link from 'next/link';
// import { WOW } from "wowjs";

function Service() {
  const [open, setOpen] = useState("p2");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return <>
    <section
      className="content-inner-2 wow fadeInUp"
      style={{ backgroundImage: "url(images/background/bg1.png)" }}
    >
      <div className="container">
        <div className="section-head style-1 text-center">
          <h6 className="sub-title bgl-primary m-b20 text-primary">
            OUR TOOLS
          </h6>
          <h2 className="title"> BOOST YOUR CREATIVITY WITH OUR RESULTS DRIVEN AI TOOLS</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div
              className={`${
                open === "p1"
                  ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                  : "icon-bx-wraper style-1 box-hover text-center m-b30"
              }`}
              onMouseOver={() => setOpen("p1")}
            >
              <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <Link href="#" className="icon-cell">

                    <i className="flaticon-office"></i>

                  </Link>  
              </div>
              <div className="icon-content">
                <h4 className="dlab-title">Smart AI Prompts </h4>
                <p>
                Smart AI Prompts enhances ChatGPT with refined prompts for clear, accurate responses, perfect for information seeking, problem-solving, or brainstorming, upgrading your experience.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div
              className={`${
                open === "p2"
                  ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                  : "icon-bx-wraper style-1 box-hover text-center m-b30"
              }`}
              onMouseOver={() => setOpen("p2")}
            >
              <div className="icon-bx-md radius bg-red shadow-red">
                  <Link href="#" className="icon-cell">

                    <i className="flaticon-website"></i>

                  </Link>	
              </div>
              <div className="icon-content">
                <h4 className="dlab-title">Journey to midjourney</h4>
                <p>
                Master stellar results with our digital course, Journey to Midjourney, providing midjourney enthusiasts with valuable insights, strategies, and tips to overcome challenges and achieve success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div
              className={`${
                open === "p3"
                  ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                  : "icon-bx-wraper style-1 box-hover text-center m-b30"
              }`}
              onMouseOver={() => setOpen("p3")}
            >
              <div className="icon-bx-md radius bg-green shadow-green">
                  <Link href="#" className="icon-cell">

                    <i className="flaticon-pie-charts"></i>

                  </Link>	
              </div>
              <div className="icon-content">
                <h4 className="dlab-title">Design and development</h4>
                <p>
                We provide services that cover all aspects of the digital world in order to help you not only create a seamless business process but also reach your target audience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Service;
