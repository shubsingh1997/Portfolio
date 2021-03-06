import "./aboutme.scss";


export default function Aboutme() {
  const data = [
    {
      id: 1,
      name: "Education",
      title: "University of Texas at Dallas",
      time:"Aug 2021 - July 2023",
      img:
        "https://labs.utdallas.edu/app/uploads/sites/29/2019/01/cropped-UTDmono_solid_flame.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Currently, I'm a student at University of Texas at Dallas pusrsing my masters degree in Computer Science",
    },
    {
      id: 2,
      name: "Resume",
      but: true,
      
      img:
        "assets/shubham.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Hi there 😄, I'm Shubham Singh, a Technology Enthusiast 🚀 from India. My interests are DevOps technologies, Artificial Intelligence, and developing some useful and cool stuff xD.🤔 Ask me about anything; I love to answer!💬",
      featured: true,
    },
    {
      id: 3,
      name: "Work Experience",
      title: "Software Developer, Accenture",
      time:"July 2019 - June 2021",
      img:
        "https://www.accenture.com/t20190904T055750Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_GT_Dimensional_Purple_RGB_REV.svg",
      icon: "assets/linkedin.png",
      desc:
        "I have worked as a Software Developer in Accenture for the past two years. I explored the realms of MERN Springboot and AWS during my tenure.",
    },
  ];
  return (
    <div className="aboutme" id="aboutme">
      <h1>About Me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
            <h3>{d.name}</h3>            
            
            </div>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
              
             </div>
            <div className="bottom">
            <h4>{d.title}</h4>
            <h4> {d.time}</h4>
            {d.but?<a href="assets/Shubham Resume.pdf" target="_blank"><button>Resume</button></a>:""}
            </div>
            <div className="center">
            {d.desc}
              
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
