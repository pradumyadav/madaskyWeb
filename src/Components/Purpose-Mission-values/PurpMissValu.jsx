import React from "react";
import CommanNavBar from "../CommanNavBar/CommanNavBar";
import "./PurpMissValu.css";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import img47 from "../../../src/assets/47.jpg";
import img48 from "../../../src/assets/48.jpg";
import img49 from "../../../src/assets/49.jpg";
import Footer from "../Footer/Footer";
export default function PurpMissValu() {
  return (
    <>
      <CommanNavBar />
      <div className="PurpMissValu_Parent">
        <div className="PurpMissValu_Sub_Parent">
          <div className="PurpMissValu_Left">
            <div className="PurpMissValu_Left_Wrapper">
              <div>
                <p className="first_p">Our purpose, mission, and values</p>
                <p className="first_p2">
                  To help our clients make distinctive, lasting, and substantial
                  improvements in their performance and to build a great firm
                  that attracts, develops, excites, and retains exceptional
                  people.
                </p>
                <p className="first_p3">
                  We are a values-driven organization. Our values reflect the
                  thinking of our founder, James O. Madasky, and Marvin Bower,
                  managing director from 1950 to 1967, who was a major force in
                  shaping the firm. Our values have been updated in small ways
                  to reflect the changing times. They inform both our long-term
                  strategy as a firm and the way we serve our clients on a daily
                  basis. We put aside one day a year to reflect as a group on
                  what our values mean to both our work and our lives.
                </p>
                <p className="first_p">Our purpose</p>
                <p className="first_p2">
                  MADASKY Consulting exists to bridge the gap between ambition
                  and achievement for organizations worldwide. We are committed
                  to harnessing the power of expert knowledge and innovative
                  strategies to tackle complex problems, optimize operations,
                  and unlock the full potential of our clients. Our purpose is
                  to create lasting value and positive impact, ensuring that
                  every client we serve experiences tangible, sustained success.
                </p>
                <p className="first_p">Our mission</p>
                <p className="first_p2">
                  MADASKY Consulting is committed to transforming 20,000
                  businesses and creating 100,000 jobs by providing unparalleled
                  consulting services. We deploy expert talent to tackle
                  critical challenges, drive measurable improvements, and build
                  long-term partnerships for continuous growth and excellence.
                </p>
                <p className="first_p">Our vision</p>
                <p className="first_p2">
                  {" "}
                  To be the premier provider of industry-leading expertise,
                  empowering organizations to achieve transformative success and
                  sustained excellence through innovative, impactful solutions.
                </p>
                <div className="p-6 md:p-12">
                  <p className="first_p">Our Values</p>
                  <h3 className="text-[30px] font-bold text-gray-900 mb-4">
                    Adhere to the highest professional standards
                  </h3>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li>Customer Centricity</li>
                    <li>Innovation</li>
                    <li>Integrity</li>
                    <li>Leadership</li>
                    <li>Accountability</li>
                    <li>Transparency</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Vision</li>
                    <li>Empowerment</li>
                    <li>Persistence</li>
                    <li>Resilience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="PurpMissValu_Right">
            <div>
              <div className="Our_Histopry">our history</div>
              <CCard style={{ width: "19rem" }}>
                <CCardImage orientation="top" src={img48} />
                <CCardBody>
                  <CCardTitle className="one">
                    History of our firm <span>&gt;</span>
                  </CCardTitle>
                  <CCardText className="text">
                    Learn more about Madasky nine decades of impact.
                  </CCardText>
                </CCardBody>
              </CCard>
              <CCard style={{ width: "19rem" }}>
                <CCardImage orientation="top" src={img49} />
                <CCardBody>
                  <CCardTitle className="one">
                    Our code of conduct <span>&gt;</span>
                  </CCardTitle>
                  <CCardText  className="text">
                    Our Code of Conduct (Our Code) is comprised of seven
                    principles. These principles are observable truths that set
                    the foundation...
                  </CCardText>
                </CCardBody>
              </CCard>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
