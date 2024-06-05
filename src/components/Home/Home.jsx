import React, { useEffect } from "react";
import "./home.scss";
// import video from "../../Assets/video.mp4";
// import img10 from "../../Assets/img10.jpg";
import { MdLocationOn } from "react-icons/md";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //  let create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      {/* <div className="overlay"></div> */}
      {/* <vedio src={video} muted autoPlay loop type="video/mp4"></video> */}
      {/* <div className="imageHome">
        <img src={img10}  />
        </div> */}
      <div className="homeContent ">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination </label>

            <div className="input flex">
              <input type="text" placeholder="Enter your name here...." />
              <MdLocationOn className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select Your Date: </label>

            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Maximum price:</label>
              <h3 className="total">$5000</h3>
            </div>

            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span> MORE FILTERS </span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>

          <div className="leftIcon">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
