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
        "Currently I'm a student at University of Texas at Dallas pusrsing my masters degree in Computer Science",
    },
    {
      id: 2,
      name: "Resume",
      but: true,
      
      img:
        "assets/Shubham.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Hi, My name is Shubham Singh. Please feel free to connect with me in case of queries.  ",
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
        "I have worked as a Full-Stack Developer in Accenture for the past 2 years, mainly on Springboot/Java and React.",
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
