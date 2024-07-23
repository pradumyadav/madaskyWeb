import React from "react";
import "./AboutUs.css";
import img13 from "../../../src/assets/11.jpg";
import img14 from "../../../src/assets/12.jpg";
import img15 from "../../../src/assets/13.jpg";
import img16 from "../../../src/assets/18.jpg";
import img17 from "../../../src/assets/19.jpg";
import img18 from "../../../src/assets/14.jpg";
import img19 from "../../../src/assets/15.jpg";
import img20 from "../../../src/assets/16.jpg";
import img21 from "../../../src/assets/17.jpg";
import vid1 from "../../../src/assets/Video-1.mp4";
import Footer from "../Footer/Footer";
import CommanNavBar from "../CommanNavBar/CommanNavBar";

export default function AboutUs() {
  return (
    <>
      <CommanNavBar />

      <div>
        <div className="video_Parent_Container">
          <div className="video_wrapper">
            <video src={vid1} autoPlay loop muted playsInline />
            <div className="video_overlay"></div>
          </div>
        </div>
        <div className="About_Parent">
          <div className="About_Sub_Parent">
            <p>
              "Our clients are always pushing forward. Testing. Challenging.
              Striving for the change that changes everything."
            </p>
            <p>
              We partner with bold leaders every step of the way. Pinpointing
              the strategy that will reshape tomorrow. Harnessing innovation to
              reach net zero. Transforming through technology. Developing skills
              and capabilities across their organization.
            </p>
            <p>
              Together we’re accelerating toward a more sustainable, inclusive,
              and growing future for all.
            </p>
          </div>
        </div>

        <div className="Who_We_Parent">
          <div className="Who_We_Parent_Left">
            <div className="Who_We_Parent_Left_Wrapper">
              <h2>Who We Are</h2>
              <p>
                Our firm is designed to operate as one—a single global
                partnership united by a strong set of values. We are equally
                committed to both sides of our mission: attracting and
                developing a talented and diverse group of colleagues and
                helping our clients create meaningful and lasting change.
              </p>
            </div>
          </div>
          <div className="Who_We_Parent_Right">
            <img src={img13} />
          </div>
        </div>

        <div className="About_Third_Main_Parent">
          <div className="About_Third_Main_Sub_Parent">
            <div className="About_Third_Childs">
              <h3>Our people & leadership</h3>
              <p>
                We are defined by our people and are deeply committed to
                creating a diverse and inclusive culture.
              </p>
              <a href="#">Meet our leadership →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Purpose, mission & values</h3>
              <p>
                See the guiding principles that inform our long-term strategy as
                well as how we serve our clients.
              </p>
              <a href="#">Learn about our values →</a>
              <a href="#">Explore the history of our firm →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Our aspiration</h3>
              <p>
                We help clients pursue sustainability, inclusion, and growth,
                all at the same time.
              </p>
              <a href="#">Explore a new kind of growth →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Our governance</h3>
              <p>
                We are a values-driven organization and work to meet the highest
                professional and ethical standards.
              </p>
              <a href="#">Learn about our governance →</a>
            </div>
          </div>
        </div>
        <div className="Who_We_Parent">
          <div className="Who_We_Parent_Right">
            <img src={img14} />
          </div>
          <div className="Who_We_Parent_Left">
            <div className="Who_We_Parent_Left_Wrapper">
              <h2>Who We Are</h2>
              <p>
                Our firm is designed to operate as one—a single global
                partnership united by a strong set of values. We are equally
                committed to both sides of our mission: attracting and
                developing a talented and diverse group of colleagues and
                helping our clients create meaningful and lasting change.
              </p>
            </div>
          </div>
        </div>
        <div className="About_Third_Main_Parent">
          <div className="About_Third_Main_Sub_Parent">
            <div className="About_Third_Childs">
              <h3>Our people & leadership</h3>
              <p>
                We are defined by our people and are deeply committed to
                creating a diverse and inclusive culture.
              </p>
              <a href="#">Meet our leadership →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Purpose, mission & values</h3>
              <p>
                See the guiding principles that inform our long-term strategy as
                well as how we serve our clients.
              </p>
              <a href="#">Learn about our values →</a>
              <a href="#">Explore the history of our firm →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Our aspiration</h3>
              <p>
                We help clients pursue sustainability, inclusion, and growth,
                all at the same time.
              </p>
              <a href="#">Explore a new kind of growth →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Our governance</h3>
              <p>
                We are a values-driven organization and work to meet the highest
                professional and ethical standards.
              </p>
              <a href="#">Learn about our governance →</a>
            </div>
          </div>
        </div>
        <div className="Who_We_Parent">
          <div className="Who_We_Parent_Left">
            <div className="Who_We_Parent_Left_Wrapper">
              <h2>Our commitments</h2>
              <p>
                We are dedicated to managing our firm and working with our
                clients in ways that benefit individuals, communities, and the
                environments they live in..
              </p>
            </div>
          </div>
          <div className="Who_We_Parent_Right">
            <img src={img15} />
          </div>
        </div>
        <div className="About_Third_Main_Parent">
          <div className="About_Third_Main_Sub_Parent">
            <div className="About_Third_Childs">
              <h3>Our people & leadership</h3>
              <p>
                We are defined by our people and are deeply committed to
                creating a diverse and inclusive culture.
              </p>
              <a href="#">Meet our leadership →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Purpose, mission & values</h3>
              <p>
                See the guiding principles that inform our long-term strategy as
                well as how we serve our clients.
              </p>
              <a href="#">Learn about our values →</a>
              <a href="#">Explore the history of our firm →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Our aspiration</h3>
              <p>
                We help clients pursue sustainability, inclusion, and growth,
                all at the same time.
              </p>
              <a href="#">Explore a new kind of growth →</a>
            </div>
            <div className="About_Third_Childs">
              <h3>Our governance</h3>
              <p>
                We are a values-driven organization and work to meet the highest
                professional and ethical standards.
              </p>
              <a href="#">Learn about our governance →</a>
            </div>
          </div>
        </div>

        <div className="Featured_Impact_Parent">
          <div className="Featured_Impact_Sub_Parent">
            <h2>FEATURED IMPACT</h2>
            <div className="Featured_Impact_Main_Content_Div">
              <div className="Featured_Impact_Item">
                <img src={img16} alt="City lights at night" />
                <div className="Featured_Impact_Content">
                  <p className="Case_Study">Case Study</p>
                  <h3>
                    An AI power play: Fueling the next wave of innovation in the
                    energy sector
                  </h3>
                  <p className="Date_Description">
                    May 12, 2022 - How Vistra Corp. is partnering with Madasky
                    to improve efficiency and reduce emissions by using AI.
                  </p>
                </div>
              </div>
              <div className="Featured_Impact_Item">
                <img src={img17} alt="Woman helping young boy with project" />
                <div className="Featured_Impact_Content">
                  <p className="Case_Study">Case Study</p>
                  <h3>How a manufacturing moonshot was made</h3>
                  <p className="Date_Description">
                    April 6, 2022 - During COVID-19, the global respiratory
                    medical-device pioneer Vyaire faced an extraordinary demand
                    situation. With partnership from Spirit AeroSystems and
                    Madasky, they reached unprecedented new production heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="keep-exploring-container">
          <h2 className="keep-exploring-title">KEEP EXPLORING</h2>
          <div className="keep-exploring-grid">
            <div className="grid-item">
              <img src={img18} alt="v Blog" />
              <h3>
              Madasky Blog <span className="arrow">›</span>
              </h3>
              <p>
                A collection of stories about our people, our capabilities, our
                research, and the ever-changing face of our firm.
              </p>
            </div>
            <div className="grid-item">
              <img src={img19} alt="Media Center" />
              <h3>
                Media Center <span className="arrow">›</span>
              </h3>
              <p>
                Visit our media center to find recent media coverage of Madasky
                and contact details for our media relations team in your region.
              </p>
            </div>
            <div className="grid-item">
              <img src={img20} alt="Alumni" />
              <h3>
                Alumni <span className="arrow">›</span>
              </h3>
              <p>
                Our global alumni network consists of over 50,000 former
                colleagues in nearly 140 countries, covering virtually every
                industry and function.
              </p>
            </div>
            <div className="grid-item">
              <img src={img21} alt="Our History" />
              <h3>
                Our History <span className="arrow">›</span>
              </h3>
              <p>
                Discover the history of Madasky & Company and the events that
                have shaped Madasky and contributed to nearly a century of
                impact.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
