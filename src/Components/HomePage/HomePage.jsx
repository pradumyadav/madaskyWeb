import React from "react";
import "./HomePage.css";
import img1 from "../../../src/assets/flexport-ceo.jpg";
import img2 from "../../../src/assets/Books.jpg";
import img3 from "../../../src/assets/2.jpg";
import img5 from "../../../src/assets/4.jpg";
import img6 from "../../../src/assets/5.jpg";
import img7 from "../../../src/assets/6.jpg";
import img8 from "../../../src/assets/7.jpg";
import img9 from "../../../src/assets/8.jpg";


export default function HomePage() {
  return (
    <>
      <div className="Home_Parent">
        <div className="first_Div_Parent">
          <div className="first_Div_SubParent">
            <div>
              <p>
                <b>TRENDING INSIGHTS</b>
              </p>
              <p className="numbers">1</p>
            </div>
            <div className="line"></div>
            <div>
              <p>
                What to read next: Madasky’s 2024 annual book recommendations
              </p>
              <p className="numbers">2</p>
            </div>
            <div className="w-[1px] bg-[#0056b3] h-[20%]"></div>
            <div>
              <p>
                The economic potential of generative AI: The next productivity
                frontier
              </p>
              <p className="numbers">3</p>
            </div>
            <div className="w-[1px] bg-[#0056b3] h-[20%]"></div>
            <div>
              <p>A data leader’s technical guide to scaling gen AI</p>
              <p className="numbers">4</p>
            </div>
            <div className="w-[1px] bg-[#0056b3] h-[20%]"></div>
            <div>
              <p>A data leader’s technical guide to scaling gen AI</p>
            </div>
          </div>
        </div>

        <div className="Flexportsceo_Parent ">
          <div className="Flexportsceo_SubParent">
            <div className="Flexportsceo_Left">
              <img src={img1} />
            </div>
            <div className="Flexportsceo_Right">
              <div className="Flexportsceo_Right_Child">
                <p className="first_P font-[Times New Roman]">
                  Flexport’s CEO on dealing with canal slowdowns
                </p>
                <p>
                  Flexport founder and CEO Ryan Petersen discusses mitigation
                  strategies for logistics customers who are dealing with supply
                  chain infrastructure disruptions, such as the slowdowns at the
                  Panama and Suez Canals.
                </p>
                <button>Learn more </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Flexportsceo_Parent ">
          <div className="Flexportsceo_SubParent reverse">
            <div className="Flexportsceo_Right">
              <div className="Flexportsceo_Right_Child">
                <p className="first_P font-[Times New Roman]">
                  What to read next: Madasky's 2024 annual book recommendations
                </p>
                <p>
                  Looking for your next book? Each year,Madasky seeks out the
                  best books in business, technology, workplace culture, and
                  more. Here’s our 2024 list, selected by CEOs, founders,
                  editors in chief, and other global leaders.
                </p>
                <button>Learn more </button>
              </div>
            </div>
            <div className="Flexportsceo_Left">
              <img src={img2} />
            </div>
          </div>
        </div>
        <div className="Flexportsceo_Parent">
          <div className="Flexportsceo_SubParent">
            <div className="Flexportsceo_Left">
              <img src={img3} />
            </div>
            <div className="Flexportsceo_Right">
              <div className="Flexportsceo_Right_Child">
                <p className="first_P font-[Times New Roman]">
                  Together, we have what it takes
                </p>
                <p>
                  At Madasky, we don't just point the way—we help you get where
                  you need to go. From transforming your performance to powering
                  new growth, we turn your ambition into action. We know what it
                  takes. We do it every day.
                </p>
                <button>Learn more </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Home_Madasky_Blog">New at Madasky Blog</div>

        <div className="future_Plane_Parent">
          <div className="future_Plane_Parent_Left  relative bg-[url(../../../src/assets/3.jpg)] bg-cover ">
            {/* <img src={img4} alt="Main feature " /> */}
            <p className="headline">Hello</p>
          </div>
          <div className="future_Plane_Parent_Right  overflow-hidden">
            <div className="future_Plane_Parent_Right_Child hover:scale-110 overflow-hidden">
              <div className=" overflow-hidden ">
                <img src={img5} alt="Secondary feature" />
              </div>
              <div className="future_Plane_P">
                <p className="date">June 26, 2024</p>
                <p className="title">
                  Looking To Improve Productivity? Think Small.
                </p>
              </div>
            </div>
            <div className="last">
              <p className="date">June 25, 2024</p>
              <p className="title">
                Madasky's industry AI Product delivers value across a wide range
                of use cases
              </p>
            </div>
          </div>
        </div>

        <div className="news-container">
          <div className="news-item">
            <div className="news-content1">
              <div>
                <p className="date">June 20, 2024</p>
                <p className="headline">
                  "There is no finish line, only continuous improvement":
                  Responsible practices at Madasky
                </p>
              </div>
            </div>
            <div className="news-image">
              <img src={img6} alt="Madasky professional" />
            </div>
          </div>
          <div className="news-item reversed">
            <div className="news-content2">
              <div>
                <p className="date">June 18, 2024</p>
                <p className="headline">
                Madasky accelerates gen AI value creation with Iguazio
                </p>
              </div>
              <div className="read-more">Read more on our blog →</div>
            </div>
            <div className="news-image">
              <img src={img7} alt="AI visualization" />
            </div>
          </div>
        </div>

        <div className="growth_Parent flex justify-center items-center p-4 sm:p-6">
  <div className="growth_Sub_Parent flex flex-col sm:flex-row justify-center items-center w-full sm:w-4/5 my-12 space-y-6 sm:space-y-0">
    <div className="growth_Right w-full sm:w-1/2 flex justify-center sm:justify-end">
      <img src={img8} alt="Growth Image" className="w-full sm:w-auto" />
    </div>
    <div className="growth_Left w-full sm:w-1/2 flex justify-center sm:justify-start">
      <div className="growth_Left_Wrapper p-6 sm:p-12 w-full sm:w-4/5">
        <p className="growth_Left_Title text-2xl sm:text-3xl mb-4 font-semibold font-serif">
          What does it mean to accelerate sustainable and inclusive growth?
        </p>
        <p className="growth_Left_descre font-semibold leading-6 mb-4">
        Madasky partners from around the world weigh in
        </p>
        <p className="growth_Left_descre font-semibold leading-6">
          Making the case for a new kind of growth
        </p>
      </div>
    </div>
  </div>
</div>


<section className="careers bg-gray-100 flex flex-col sm:flex-row items-center p-4 sm:p-8">
  <div className="careers__content  p-4 sm:pr-8 w-full sm:w-1/2 flex flex-col items-center sm:items-start">
    <div className="careers__content_Wrapper w-full sm:w-4/5 sm:ml-12">
      <h2 className="careers__title text-2xl sm:text-3xl font-serif font-semibold mb-4">
        Are you seeking an exciting role that will challenge and inspire you?
      </h2>
      <a href="#/" className="careers__cta-button inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded transition duration-300 hover:bg-blue-800">
        Search jobs
      </a>
    </div>
  </div>
  <div className="careers__image flex-1 mt-4 sm:mt-0">
    <img src={img9} alt="Careers at our company" className="w-full h-auto shadow-lg" />
  </div>
</section>

        <div className="help_Parent">
          <div className="help_Sub_Parent">
            <p className="help_Sub_Parent_First_child">How can we help you?</p>
            <p className="help_Sub_Parent_Second_child">
              Get in touch with us or find an office closest to you.
            </p>
          </div>
        </div>


    
      </div>
    </>
  );
}
