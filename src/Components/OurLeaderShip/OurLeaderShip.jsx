import React from "react";
import "./OurLeaderShip.css";
import CommanNavBar from "../CommanNavBar/CommanNavBar";
import img20 from "../../../src/assets/20.jpg";
import img21 from "../../../src/assets/21.jpg";
import img22 from "../../../src/assets/22.jpg";
import img23 from "../../../src/assets/23.jpg";
import img24 from "../../../src/assets/24.jpg";
import img25 from "../../../src/assets/25.jpg";
import img26 from "../../../src/assets/26.jpg";
import img27 from "../../../src/assets/27.jpg";
import img28 from "../../../src/assets/28.jpg";
import img29 from "../../../src/assets/29.jpg";
import img30 from "../../../src/assets/30.jpg";
import img31 from "../../../src/assets/31.jpg";
import img32 from "../../../src/assets/32.jpg";
import img33 from "../../../src/assets/33.jpg";
import img34 from "../../../src/assets/34.jpg";
import img35 from "../../../src/assets/35.jpg";
import img36 from "../../../src/assets/36.jpg";
import img37 from "../../../src/assets/37.jpg";
import img38 from "../../../src/assets/38.jpg";
import img39 from "../../../src/assets/39.jpg";
import img40 from "../../../src/assets/40.jpg";
import img41 from "../../../src/assets/41.jpg";
import img42 from "../../../src/assets/42.jpg";
import img43 from "../../../src/assets/43.jpg";
import img44 from "../../../src/assets/44.jpg";
import img45 from "../../../src/assets/45.jpg";
import img47 from "../../../src/assets/47.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import Footer from "../Footer/Footer";
export default function OurLeaderShip() {
  const imageArr = [
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,

    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
  ];
  return (
    <>
      <CommanNavBar />
      <div className="page-wrapper">
        <div className="leadership-container">
          <p className="leader_Ship_p">Our Leadership</p>
          <div className="leadership-grid">
            {imageArr.map((img, index) => (
              <div key={index} className="leader-item">
                <img src={img} alt={`Leader ${index + 1}`} />
              </div>
            ))}
          </div>
          <p className="description">
            McKinsey is led globally by our managing partner; our elected board
            of directors, known as the Shareholders Council; our global
            leadership team, known as the Enablement Team; and the leaders of
            our offices and practices.
          </p>
          <div className="social-icons">
            <a href="#" className="icon linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" className="icon twitter">
              <RiTwitterXFill />
            </a>
            <a href="#" className="icon facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="leadership-categories_Parent">
          <div className="leadership-categories">
            <div className="category">
              <h2>
                About Amit Mittal <span>&gt;</span>
              </h2>
              <p>
                Amit has over 26 years of business & professional experience in
                go-to-market strategies, business growth, performance
                improvement, international supply chain and product sourcing,
                and operations excellence roles with international retail,
                brand, and manufacturing-centric businesses....
              </p>
              <a href="#" className="see-members">
                See About Amit Mittal <span>→</span>
              </a>
            </div>

            <div className="category">
              <h2>
                Enablement Team <span>&gt;</span>
              </h2>
              <p>
                Our Enablement Team is a global leadership body that accelerates
                the delivery of our client service and people mission. The team
                connects leaders of regions and key capabilities, such as People
                & Diversity, Risk & Resilience, and Finance, to support our
                firm's performance and health.
              </p>
              <a href="#" className="see-members">
                See members <span>→</span>
              </a>
            </div>

            <div className="category">
              <h2>
                Our Leadership <span>&gt;</span>
              </h2>
              <p>
                Amit has over 26 years of business & professional experience in
                go-to-market strategies, business growth, performance
                improvement, international supply chain and product sourcing,
                and operations excellence roles with international retail,
                brand, and manufacturing-centric businesses.During these years,
                Amit has developed a passion for and played an important role in
                defining key business strategies to help companies aggressively.
              </p>
              <a href="#" className="see-members">
                See members <span>→</span>
              </a>
            </div>

            <div className="category">
              <h2>
                Practice Leadership <span>&gt;</span>
              </h2>
              <p>
                Our practices serve clients across most capabilities and
                industries. The global leaders of each are responsible for
                delivering client impact, developing knowledge and capabilities,
                innovating, and developing our people. They work closely with
                regional leaders and many others to deliver positive, enduring
                change to our clients and stakeholders.
              </p>
              <a href="#" className="see-members">
                See members <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="Our_Aspireion_Parent">
          <div className="Our_Aspireion_Parent_Top">
            <p>Our Aspiration</p>
          </div>
          <div className="Our_Aspireion_Sub_Parent">
            <div className="Our_Aspireion_Parent_Left">
              <img src={img47} />
            </div>
            <div className="Our_Aspireion_Parent_Right">
              <div className="Our_Aspireion_Parent_Right_wrapper">
                <div>
                  <p className="Our_Aspireion_Parent_Right_wrapper_p1">
                    Accelerating Sustainable and Inclusive Growth{" "}
                    <span>&gt;</span>
                  </p>
                </div>
                <div>
                  <p className="Our_Aspireion_Parent_Right_wrapper_p2">
                    Accelerating Sustainable and Inclusive Growth We’ve always
                    been big believers in the growth potential of our clients.
                    Today, we’re privileged to work with organizations that are
                    on a new growth journey, one that pursues sustainability,
                    inclusion, and economic growth, all at the same time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="policy-card_Parent">
          <div className="policy-card">
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src={img47} />
              <CCardBody>
                <CCardTitle>
                  Client Service Policies <span>&gt;</span>
                </CCardTitle>
                <CCardText>
                  We have strengthened our governance and compliance processes
                  as part of our ambition to lead our industry.
                </CCardText>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src={img47} />
              <CCardBody>
                <CCardTitle>
                  Client Service Policies <span>&gt;</span>
                </CCardTitle>
                <CCardText>
                  We have strengthened our governance and compliance processes
                  as part of our ambition to lead our industry.
                </CCardText>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src={img47} />
              <CCardBody>
                <CCardTitle>
                  Client Service Policies <span>&gt;</span>
                </CCardTitle>
                <CCardText>
                  We have strengthened our governance and compliance processes
                  as part of our ambition to lead our industry.
                </CCardText>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src={img47} />
              <CCardBody>
                <CCardTitle>
                  Client Service Policies <span>&gt;</span>
                </CCardTitle>
                <CCardText>
                  We have strengthened our governance and compliance processes
                  as part of our ambition to lead our industry.
                </CCardText>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
