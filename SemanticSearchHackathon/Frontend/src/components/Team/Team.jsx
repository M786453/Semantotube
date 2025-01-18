import React from "react";
import "./team.css";
import ME from "../../assets/me.jpeg";
import JAZA_IMAGE from "../../assets/jaza.jfif";
import SHOAIB_IMAGE from "../../assets/shoaib.jpeg";
import ABUBAKR_IMAGE from "../../assets/abubakr.jpeg";
import ZOHA_IMAGE from "../../assets/zoha.jpg";
import SHAMI_IMAGE from "../../assets/shami.jpg";
import { FaDiscord } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const teamMembers = [
  {
    id: 1,
    role: "Web x Python Developer",
    img: ME,
    name: "Muhammad Umer",
    socials: [
      {
        id: 1,
        icon: <FaDiscord />,
        link: "https://discordapp.com/users/538769440779665428/",
      },
      {
        id: 2,
        icon: <FaGithub />,
        link: "https://github.com/mumer119131",
      },
      {
        id: 3,
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/mumer119131/",
      },
    ],
    school: "Computer Science Student, University Of Agriculture Faisalabad",
  },
  {
    id: 2,
    role: "Python Developer",
    img: SHAMI_IMAGE,
    name: "M Ahtesham S.",
    socials: [
      {
        id: 1,
        icon: <FaDiscord />,
        link: "https://discordapp.com/users/692722760111095828/",
      },
      {
        id: 2,
        icon: <FaGithub />,
        link: "https://github.com/M786453",
      },
      {
        id: 3,
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/ahtesham-sarwar-97744a259/",
      },
    ],
    school: "Computer Science Student, University Of Agriculture Faisalabad",
  },
  {
    id: 3,
    role: "Python Developer",
    name: "Jahanzaib Babar",
    img: JAZA_IMAGE,
    socials: [
      {
        id: 1,
        icon: <FaDiscord />,
        link: "https://discordapp.com/users/1054047737982763009/",
      },
      {
        id: 2,
        icon: <FaGithub />,
        link: "https://github.com/jahanzaibbabar",
      },
      {
        id: 3,
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/jahanzaib-babar/",
      },
    ],
    school: "Computer Science Student, University Of Agriculture Faisalabad",
  },
  {
    id: 4,
    role: "Presenter",
    name: "Zoha Usman",
    img: ZOHA_IMAGE,
    socials: [
      {
        id: 1,
        icon: <FaDiscord />,
        link: "https://discordapp.com/users/1041389028144074882/",
      },
      {
        id: 2,
        icon: <FaGithub />,
        link: "https://github.com/zoha-usman",
      },
      {
        id: 3,
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/zoha-usman-228774214/",
      },
    ],
    school: "Computer Science Student, University Of Agriculture Faisalabad",
  },
  {
    id: 5,
    role: "API Manager",
    name: "M Abubakr",
    img: ABUBAKR_IMAGE,
    socials: [
      {
        id: 1,
        icon: <FaDiscord />,
        link: "https://discordapp.com/users/647692350683873283/",
      },
      {
        id: 2,
        icon: <FaGithub />,
        link: "https://github.com/abubakrmuhammad",
      },
      {
        id: 3,
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/abubakrjr/",
      },
    ],
    school: "Computer Science Student, University Of Agriculture Faisalabad",
  },
  {
    id: 6,
    role: "Co-Pilot",
    name: "Shoaib Akbar",
    img: SHOAIB_IMAGE,
    socials: [
      {
        id: 1,
        icon: <FaDiscord />,
        link: "https://discordapp.com/users/729588030083563600/",
      },
      {
        id: 2,
        icon: <FaGithub />,
        link: "https://github.com/Mask02",
      },
      {
        id: 3,
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/mask02/",
      },
    ],
    school: "Computer Science Student, University Of Agriculture Faisalabad",
  },
];
const Team = () => {
  return (
    <div className="section team__section" id="team">
      <h2>Team</h2>
      <p>
        "Our team is dedicated to making it easy for you to find the information
        you need in YouTube videos.""
      </p>
      {teamMembers.map((member, index) => {
        return (
          <div className="member__container" key={member.id}>
            <div className="img__container__team">
              <img src={member.img} alt="" />
            </div>
            <div className="desc__container">
              <small>{member.role}</small>
              <h3>{member.name}</h3>
              <p>{member.school}</p>
              <div
                className="social__links"
                style={index % 2 != 0 ? { justifyContent: "end" } : {}}
              >
                {member.socials.map((social) => {
                  return (
                    <a key={social.id} href={social.link} target="_blank">
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
