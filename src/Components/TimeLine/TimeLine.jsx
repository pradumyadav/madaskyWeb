import React from "react";

import "./TimeLine.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaCode,
  FaAward,
} from "react-icons/fa";
import CommonNavBar from "../CommanNavBar/CommanNavBar";
import Footer from "../Footer/Footer";
import TimmeLineImages from "../../../src/assets/14.jpg";
export default function TimeLine() {
  const timelineData = [
    {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2023",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2022",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2021",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2020",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2019",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2018",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2017",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2016",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2015",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2014",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2013",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2012",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2011",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2010",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2009",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2008",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2007",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2006",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2005",
  },
  {
      title: "Adding years to life and life to years",
      description:
          "The Madasky Health Institute launches with a mission of catalyzing the actions needed across continents, sectors, and communities to realize possible gains in life expectancy and quality of life. It co-founds the World Wellbeing Movement, a global movement promoting employee wellbeing and health.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2004",
  },
  {
      title: "Deepening capabilities through acquisitions",
      description:
          "Madasky acquires SCM Connections, strengthening supply-chain transformation capabilities; Caserta, a pioneer in data architecture and engineering; S4G to help ignite business growth; and IncepTech to enhance software engineering and technology capabilities in Europe.",
      image: TimmeLineImages,
      backgroundColor: "#ffffff",
      date: "2003",
  },
  ];

  return (
    <>
      <CommonNavBar />
      <div class="history-container">
        <div class="history-content">
          <div class="history-left">
            <div class="history-title">
              <h1>
                <span class="large">History</span>
                <br />
                <span class="small">of our</span>{" "}
                <span class="large firm">firm</span>
              </h1>
            </div>
          </div>
          <div class="history-right">
            <div className="history-right_wrapper">
              <p class="history-main-text">
                Since our formation in 1926, McKinsey has operated as a single
                global partnership united by a strong set of values, and the
                drive to deliver positive, enduring change.
              </p>
              <p class="history-secondary-text">
                Today, we continue to combine bold strategies and transformative
                technologies to support organizations to innovate more
                sustainably, achieve lasting gains in performance, and build
                workforces that will thrive for this generation and the next.
              </p>
            </div>

            <div class="jump-to">
              <p>Jump to:</p>
            </div>
          </div>
        </div>
      </div>

      
      <VerticalTimeline lineColor="#ddd">
  {timelineData.map((item, index) => (
    <VerticalTimelineElement
      key={index}
      className={`vertical-timeline-element--work ${
        index % 2 === 0 ? "left" : "right"
      } animate-element`}
      contentStyle={{
        background: item.backgroundColor,
        color: "#000",
        boxShadow: "none",
        border: "1px solid #ddd",
        padding: "30px",
        borderRadius: "8px",
        width: "100%",
      }}
      contentArrowStyle={{ display: "none" }}
      iconStyle={{ display: "none" }}
    >
      <div
        className={`content-wrapper ${index % 2 === 0 ? "left-content" : "right-content"}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        }}
      >
        <div className="text-content" style={{ flex: 1 }}>
          <h2 className="pb-8">{item.date} </h2>
          <h3
            className="vertical-timeline-element-title"
            style={{ marginTop: 0 }}
          >
            {item.title}
          </h3>
          <p>{item.description}</p>
        </div>
        <div className="image-content" style={{ flex: 1 }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </VerticalTimelineElement>
  ))}
</VerticalTimeline>
      <Footer />
    </>
  );
}
