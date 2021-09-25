import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nitisha Agarwal",
      title: "Team Lead, Accenture",
      img:
        "assets/Nitisha.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Swapnali Vazarkar",
      title: "Associate Manager, Accenture",
      img:
        "assets/Swapnali.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Raksha Upadhyay",
      title: "Asscoiate Professor, IET, DAVV",
      img:
        "assets/Raksha.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "I taught Shubham Singh in two semesters. He was also the part of my research group and did major project under my supervision. I found him very keen to learn with research mindset. His software and programming skills are really extraordinary.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
