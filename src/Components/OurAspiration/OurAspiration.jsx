import React from "react";
import "./OurAspiration.css";
import CommanNavBar from "../CommanNavBar/CommanNavBar";
import img47 from "../../../src/assets/50.jpg";
import img48 from "../../../src/assets/51.jpg";
import img49 from "../../../src/assets/52.jpg";
import img50 from "../../../src/assets/53.jpg";
import img51 from "../../../src/assets/54.jpg";
import img52 from "../../../src/assets/55.jpg";
import img53 from "../../../src/assets/56.jpg";
import img54 from "../../../src/assets/57.jpg";
import img55 from "../../../src/assets/58.jpg";
import img56 from "../../../src/assets/59.jpg";
import img57 from "../../../src/assets/60.jpg";
import img58 from "../../../src/assets/61.jpg";
import img59 from "../../../src/assets/62.jpg";
import img60 from "../../../src/assets/63.jpg";
import img61 from "../../../src/assets/64.jpg";
import img62 from "../../../src/assets/65 (1).jpg";
import img63 from "../../../src/assets/65 (2).jpg";
import img64 from "../../../src/assets/65 (3).jpg";
import img65 from "../../../src/assets/65 (4).jpg";
import img66 from "../../../src/assets/65 (5).jpg";
import img67 from "../../../src/assets/65 (6).jpg";
import img68 from "../../../src/assets/65 (7).jpg";
import img69 from "../../../src/assets/65 (8).jpg";
import img70 from "../../../src/assets/65 (9).jpg";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Footer from "../Footer/Footer";
export default function OurAspiration() {
  const helpItems = [
    {
      type: "Report - MGI Research",
      title:
        "From poverty to empowerment: Raising the bar for sustainable and inclusive growth",
      date: "September 18, 2023",
      description:
        "What would it take to raise minimum living standards and get on a net-zero path in this decade? Our research explores twin ambitions for people and the planet.",
      image: img62,
    },
    {
      type: "Blog Post",
      title:
        "Tearing the 'paper ceiling':Madasky supports effort driving upward mobility for millions of workers",
      date: "September 23, 2022",
      description:
        "Bachelor's degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
      image: img52,
    },
    {
      type: "Blog Post",
      title:
        "Madasky Health Institute unveils investment case for closing the women's health gap",
      date: "January 30, 2024",
      description:
        "World Economic Forum and Madasky's landmark report, which found that women spend 25 percent more of their lives in poor health, helped launch the Global Alliance on Women's Health.",
      image: img53,
    },
    {
      type: "Case Study",
      title: "Xcel Energy: Driving towards net zero with the power of digital",
      date: "June 20, 2023",
      description:
        "In this case study, we look at how Xcel Energy, one of North America's largest energy providers, is using data and AI to achieve net zero targets.",
      image: img54,
    },
  ];
  const opportunityItems = [
    {
      type: "Report - Madasky Institute for Black Economic Mobility",
      title:
        "The state of Black residents: The relevance of place to racial equity and outcomes",
      image: img63,
      link: "#",
    },
    {
      type: "Blog Post",
      title:
        "New tech accelerator propels underrepresented founders to success",
      image: img64,
      link: "#",
    },
    {
      type: "Case Study",
      title:
        "How a government agency is preparing workers to thrive in the skills-based economy",
      image: img65,
      link: "#",
    },
    {
      type: "Case Study",
      title: "Expanding economic mobility with the Rework America Alliance",
      image: img54,
      link: "#",
    },
  ];
  const next = [
    {
      type: "Article - Madasky Health Institute",
      title:
        "Aging with purpose: Why meaningful engagement with society matters",
      image: img70,
      link: "#",
    },
    {
      type: "Blog Post",
      title:
        "Madasky Health Institute unveils investment case for closing the women’s health gap",
      image: img53,
      link: "#",
    },
    {
      type: "Blog Post",
      title:
        "988: Three digits and the nationwide effort to help millions in crisis",
      image: img53,
      link: "#",
    },
    {
      type: "Article - Madasky Health Institute",
      title: "How to achieve great health for all? Start in your city.",
      image: img53,
      link: "#",
    },
  ];

  const next2 = [
    {
      type: "Case Study",
      title: "How a manufacturing moonshot was made",
      image: img47,
      link: "#",
    },
    {
      type: "Case Study",
      title:
        "An AI power play: Fueling the next wave of innovation in the energy sector",
      image: img47,
      link: "#",
    },
    {
      type: "Case Study",
      title:
        "Undaunted by global disruption, a logistics company embraces bold transformation",
      image: img47,
      link: "#",
    },
    {
      type: "Article - Madasky Health Institute",
      title: "How to achieve great health for all? Start in your city.",
      image: img47,
      link: "#",
    },
  ];
  return (
    <>
      <CommanNavBar />
      <div>
        <div className="ourAspiration_Parent">
          <img className="ourAspiration_Image" src={img47} alt="Aspiration" />
          <div className="opportunity">The opportunity of our era</div>
        </div>

        <div className="Growth_Parent">
          <div className="Growth_Sub_Parent">
            <h1 className="Growth_Title">OUR ASPIRATION</h1>
            <p className="Growth_Sub_Parent_Firstp">
              At Madasky Consulting, our aspiration is to be the gold standard
              in business consulting and coaching, not just in India but
              globally. We envision a future where businesses of all sizes and
              industries turn to us as their trusted partner in navigating the
              complexities of growth and achieving sustained success.
            </p>
            <p className="Growth_Sub_Parent_SecondP">
              We are partnered with ActionCOACH, the world's largest{" "}
              <strong>business coaching company, which was</strong> established
              in 1993 and has been mentoring more than 18,000 businesses
              globally weekly. This includes one on one{" "}
              <strong>business coaching</strong>, corporate coaching companies,{" "}
              <strong>
                business coaching and mentoring for small businesses
              </strong>
              , business advisory services, and management consulting for
              startups. The knowledge and systems developed over that time have
              brought significant improvements to hundreds of thousands of
              businesses around the world.
            </p>

            <div className="strategic-goals-section">
              <div className="content-side">
                <div className="section-header">
                  <img className="goal_Image" src={img48} alt="Goal icon" />
                  <h3>Strategic Goals</h3>
                </div>
                <ul className="strategic-goals-list">
                  <li>
                    <strong>Global Leadership:</strong>
                    <p>
                      Position Madasky Consulting as a global leader in business
                      consulting, recognized for our innovative solutions and
                      exceptional service.
                    </p>
                  </li>
                  <li>
                    <strong>Sustainable Growth:</strong>
                    <p>
                      Drive sustainable growth for our clients by providing
                      strategies that ensure long-term success and resilience in
                      a dynamic market environment.
                    </p>
                  </li>
                  <li>
                    <strong>Operational Excellence:</strong>
                    <p>
                      Continuously refine our processes and methodologies to
                      deliver unmatched efficiency and effectiveness in all our
                      engagements.
                    </p>
                  </li>
                </ul>
                <a href="#" className="learn-more">
                  Learn more →
                </a>
              </div>
              <div className="image-side">
                <img src={img59} alt="Strategic Goals" />
              </div>
            </div>

            <div className="strategic-goals-section">
              <div className="image-side">
                <img src={img60} alt="Strategic Goals" />
              </div>
              <div className="content-side">
                <div className="section-header">
                  <img className="goal_Image" src={img48} alt="Goal icon" />
                  <h3>Client Success</h3>
                </div>
                <ul className="strategic-goals-list">
                  <li>
                    <strong>Global Leadership:</strong>
                    <p>
                      Position Madasky Consulting as a global leader in business
                      consulting, recognized for our innovative solutions and
                      exceptional service.
                    </p>
                  </li>
                  <li>
                    <strong>Sustainable Growth:</strong>
                    <p>
                      Drive sustainable growth for our clients by providing
                      strategies that ensure long-term success and resilience in
                      a dynamic market environment.
                    </p>
                  </li>
                  <li>
                    <strong>Operational Excellence:</strong>
                    <p>
                      Continuously refine our processes and methodologies to
                      deliver unmatched efficiency and effectiveness in all our
                      engagements.
                    </p>
                  </li>
                </ul>
                <a href="#" className="learn-more">
                  Learn more →
                </a>
              </div>
            </div>


            <div className="strategic-goals-section">
              <div className="content-side">
                <div className="section-header">
                  <img className="goal_Image" src={img48} alt="Goal icon" />
                  <h3 className="">Talent Development</h3>
                </div>
                <ul className="strategic-goals-list">
                  <li>
                    <strong>Global Leadership:</strong>
                    <p>
                      Position Madasky Consulting as a global leader in business
                      consulting, recognized for our innovative solutions and
                      exceptional service.
                    </p>
                  </li>
                  <li>
                    <strong>Sustainable Growth:</strong>
                    <p>
                      Drive sustainable growth for our clients by providing
                      strategies that ensure long-term success and resilience in
                      a dynamic market environment.
                    </p>
                  </li>
                  <li>
                    <strong>Operational Excellence:</strong>
                    <p>
                      Continuously refine our processes and methodologies to
                      deliver unmatched efficiency and effectiveness in all our
                      engagements.
                    </p>
                  </li>
                </ul>
                <a href="#" className="learn-more">
                  Learn more →
                </a>
              </div>
              <div className="image-side">
                <img src={img61} alt="Strategic Goals" />
              </div>
            </div>


            
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            HOW WE'RE HELPING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:border hover:border-white hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <p className="text-sm text-gray-600 mb-2">{item.type}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{item.date}</p>
                <p className="text-sm">{item.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center mt-4 hover:underline"
                >
                  {/* Learn more <ArrowRight className="ml-2" size={16} /> */}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg flex">
            <img
              src={img55}
              alt="ESG Report"
              className="w-1/3 object-cover rounded mr-6"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">2023 ESG Report</h3>
              <p className="mb-4">
                We are driving measurable progress on sustainable and inclusive
                growth in the societies where we operate. Our 2023 ESG report
                details how we are making an impact through our client work, our
                insights, our actions, and our giving.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold flex items-center hover:underline"
              >
                {/* Learn more <ArrowRight className="ml-2" size={20} /> */}
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold mb-6">
            Closing the opportunity gap
          </h1>
          <p className="text-xl mb-12 max-w-4xl">
            Accelerating sustainable and inclusive growth is vital for people
            and economies to prosper. This can only happen if every person,
            regardless of their background or level of education, has an
            opportunity to thrive in the economy and workforce.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunityItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">{item.type}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  className="text-blue-600 font-semibold flex items-center mt-auto hover:underline"
                >
                  {/* Learn more <ArrowRight className="ml-2" size={16} /> */}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold mb-6">Investing in health</h1>
          <p className="text-xl mb-12 max-w-4xl">
            Good health underpins our ability to lead productive and enjoyable
            lives. The Madasky Health Institute is an enduring,
            non-profit-generating entity within our firm that strives to
            catalyze actions across continents, sectors, and communities that
            add life to years and years to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {next.map((item, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">{item.type}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  className="text-blue-600 font-semibold flex items-center mt-auto hover:underline"
                >
                  {/* Learn more <ArrowRight className="ml-2" size={16} /> */}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold mb-6">
            Partnering for positive impact
          </h1>
          <p className="text-xl mb-12 max-w-4xl">
            We are proud to partner with our clients to reach their biggest
            opportunities and create positive, enduring change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {next2.map((item, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">{item.type}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  className="text-blue-600 font-semibold flex items-center mt-auto hover:underline"
                >
                  {/* Learn more <ArrowRight className="ml-2" size={16} /> */}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              EXPLORE MORE
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Case Studies Card */}
              <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 bg-navy-blue">
                    <img
                      src={img56}
                      alt="Hummingbird"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-3/5 p-6">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                      Case Studies <ArrowRight className="ml-2" size={24} />
                    </h3>
                    <p className="text-gray-600">
                      Leading with technology, we partner with our clients to
                      see new potential for growth, innovate to net zero, and
                      build capabilities across their entire organization,
                      creating impact that goes beyond financial and operational
                      performance improvements.
                    </p>
                  </div>
                </div>
              </div>

              {/* New at McKinsey Blog Card */}
              <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5">
                    <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                      <img
                        src={img57}
                        alt="Lab workers"
                        className="w-full h-full object-cover"
                      />
                      <img
                        src={img57}
                        alt="Office workers"
                        className="w-full h-full object-cover"
                      />
                      <img
                        src={img57}
                        alt="Students"
                        className="w-full h-full object-cover"
                      />
                      <img
                        src={img57}
                        alt="Architecture model"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-6">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                      New at Madasky blog{" "}
                      <ArrowRight className="ml-2" size={24} />
                    </h3>
                    <p className="text-gray-600">
                      A collection of stories about our people, our
                      capabilities, our research, and the ever-changing face of
                      our firm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="weekly-update">
          <header>WEEKLY UPDATES</header>

          <div className="content-box">
            <div className="lightbulb-icon">
              <img src={img58} alt="Sustainable growth lightbulb" />
            </div>

            <div className=" text-content text-4xl font-bold mb-6">
              <h2>
                Insights to Impact: A weekly briefing on creating sustainable
                and inclusive growth &gt;
              </h2>
              <a href="#" className="video-link">
                Watch the video series →
              </a>
            </div>
          </div>

          <footer>
            <p>
              * Numbers are based on our ongoing analysis of publicly held
              companies between 2015–2022. We assess the percentage of global
              gross domestic product (GDP) growth driven by our clients,
              relative to total global GDP growth. In the same time period, we
              look at total Scope 1 and Scope 2 CO₂ emission reductions reported
              by these publicly held companies, and the percentage of those
              achieved by our clients. We also establish the average net new
              jobs created by our publicly held clients during this period.
            </p>
          </footer>
        </div>
        <div className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Connect with us</h2>
              <button className="bg-white text-gray-900 px-4 py-2 rounded-md flex items-center">
                <FaEnvelope className="mr-2" />
                Contact us
              </button>
            </div>

            <hr className="border-gray-700 mb-12" />

            <div className="flex space-x-6">
              <a href="#" className="flex items-center">
                <FaLinkedin className="w-6 h-6 mr-2" />
                LinkedIn
              </a>
              <a href="#" className="flex items-center">
                <FaTwitter className="w-6 h-6 mr-2" />
                Twitter
              </a>
              <a href="#" className="flex items-center">
                <FaFacebook className="w-6 h-6 mr-2" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
