import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "HouseFlix",
      desc:
        "A media streaming service to serve videos over a network. Installed it in the home network connected with local NAS.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      pic:"https://github.com/shubsingh1997/Houseflix/raw/master/screenshots/Screenshot_1.png",
      project:"https://github.com/shubsingh1997/Houseflix",
      },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Amazon Price Tracker",
      desc:
        "App to get email alerts when price of an item drops below a certain limit on Amazon.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      pic:"https://i.ytimg.com/vi/FtbAjLfnHk0/maxresdefault.jpg",
      project:"https://github.com/shubsingh1997/Amazon-Price-Drop-Alert",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "AES and hash key Generation and Randomness Testing",
      desc:
        "An efficient and random key generator algorithm for low noise/power for CPS/IoT Networks",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        pic:"./assets/ieee.png",
        project:"https://ieeexplore.ieee.org/abstract/document/8933725",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Low Complexity Security Algorithm for CPS / IoT Networks",
      desc:
        "An efficient and random key generator algorithm for low noise/power for CPS/IoT Networks",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        pic:"./assets/paper2.png",
        project:"https://www.researchgate.net/publication/333371553_Low_Complexity_Security_Algorithm_for_CPS_IoT_Networks",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
    <div className="works" id="works">
   
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.project} target="_blank">Project</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.pic} alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
