import React, { useEffect } from "react";
import "./main.scss";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Huayna picchu is a mountain in peru, rising over Machu picchu, so called lost city of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      " According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities. Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians. The 100m-deep Ihlara Canyon houses numerous rock-face churches.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      " A city in central Mexico,Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.Guanajuato was founded in 1554 and given city status in 1741. Along with Zacatecas, Mexico, to the north, and Potosí, Bolivia, the town became one of the three greatest silver-mining centers of the 16th century. Its celebrated Veta Madre (“Mother Lode”) was described as the richest in the world.Guanajuato is between the arid north of the country and the lusher south, and is geographically part of the Trans-Mexican Volcanic Belt, the Mexican Plateau.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terra",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and seafoods,you will be visit this place.Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline. In each of the 5 towns, colorful houses and vineyards cling to steep terraces, harbors are filled with fishing boats and trattorias turn out seafood specialties along with the Liguria region’s famous sauce, pesto. The Sentiero Azzurro cliffside hiking trail links the villages and offers sweeping sea vistas.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkot wat represents the entire range of khmar art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities. ",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "An immense mausoleum of white marbel, bulit-in Agraby Mughal emperor Shan Jahan in memory of his wife Mutaz, the moment is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is an Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic moutains,history, art &culture, food,temples and beautiful sandy beaches.",
  },
];

const Main = () => {
  //  let create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          {" "}
          Most Visited destinatins
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>

                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Main;
