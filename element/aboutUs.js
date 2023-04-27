import Link from 'next/link';

function AboutUs() {
    return <>  
        <section className="content-inner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="dz-media">
                            <img src="images/about/img4.png" className="move-1" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="section-head style-1 mb-4">
                            <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                            <h2 className="title">How Digital Shark LLC  can leverage your potential with Artificial intelligence.</h2>
                        </div>
                        <p>Discover our wide range of AI-based digital products designed to revolutionize the way you work and live. At AI Emporium, we are proud to present our latest digital product, Smart AI Prompts, a groundbreaking tool designed to optimize your interactions with ChatGPT. Built on cutting-edge AI algorithms, Smart AI Prompts generates high-quality.</p>
                        <p className="m-b30">Contextually relevant prompts to improve the quality of your ChatGPT responses and elevate your overall experience.</p>
                        <img src="images/sign.png" alt=""/>
                        <h4 className="m-b30">CEO Aarish Tinwala</h4>
                       <Link
                           href="/about-us-1"
                           className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</Link> 
                    </div>
                </div>
            </div>
        </section>
    </>;
  }
  
  export default AboutUs;