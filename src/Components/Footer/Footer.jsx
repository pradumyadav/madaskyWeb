import React from 'react'
import "./Footer.css";
import img10 from "../../../src/assets/logo.png";
import img11 from "../../../src/assets/9.png";
import img12 from "../../../src/assets/10.png";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../../../src/assets/madasky-trans.png";

import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
         <div className="Footer_Parent">
          <div className="Footer_Sub_Parent">
          <Link to="/">
  <div className="flex items-center footer_Logo">
    <img src={Logo} alt="logo" className="md:cursor-pointer h-10 change" />
    <div className="ml-3">
  <div className="flex items-baseline space-x-2">
    <h1 className="text-xl font-bold font-baskerville">MADASKY</h1>
    <span className=" text-xl font-baskerville-old-face">Consulting</span>
  </div>
  <p className="text-sm italic font-valencia-serial">Redefining Excellence</p>
</div>

  </div></Link>

            <div className="Footer_Middle_Div">
              <div className="Footer_Middle_Div_Left">
                <p className="Footer_Middle_Div_Left_First_Div">Subscribe</p>
                <p className="Footer_Middle_Div_Left_Second_Div">
                  Select topics and stay current with our latest insights
                </p>
                <div>
                  <input
                    className="footer_Inp"
                    type="email"
                    placeholder="Email address"
                  />
                  <button className="Footer_Button">Submit</button>
                </div>
              </div>
              <div className="Footer_Middle_Div_Right">
                <ul className="Footer_Fitrst_Ul">
                  <li>Contact us</li>
                  <li>FAQ</li>
                  <li>Privacy policy</li>
                  <li>Cookie preferences</li>
                  <li>Terms of use</li>
                </ul>
                <ul className="Footer_Second_Ul">
                  <li>Local language information</li>
                  <li>Accessibility statement</li>
                </ul>
                <ul className="Footer_Icons">
                  <IoLogoWhatsapp />
                  <IoLogoWhatsapp />
                  <IoLogoWhatsapp />
                  <IoLogoWhatsapp />
                </ul>
              </div>
            </div>

            <div className="Footetr_Last_div">
              <div className="Footetr_Last_div_Left">
                <div>
                  <p className="Footetr_Last_div_Left_First_P">
                    McKinsey Insights - Get our latest thinking on your
                  </p>
                  <p className="Footetr_Last_div_Left_Second_P">
                    iPhone, iPad, or Android device.
                  </p>
                </div>
                <button className="Footer_Google_Play_btn">
                  <img src={img11} />
                </button>
                <button className="Footer_Google_Play_btn">
                  <img src={img12} />
                </button>
              </div>
              <div>
                <div>© 1996-2024 McKinsey & Company</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
