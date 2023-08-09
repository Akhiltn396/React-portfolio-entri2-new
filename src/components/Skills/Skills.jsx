import React from 'react'
import "./Skills.css"

import Skill1 from "../../img/wp8903890-mern-stack-wallpapers.jpg";
import Skill2 from "../../img/Screenshot_2023-08-09-10-16-09-41_40deb401b9ffe8e1df2f1cc5ba480b12.jpg";


const Skills = () => {
  return (
    <div className="skill">

    <div className="skill-right">
      <h1 className="skill-title">Skills</h1>

      <div className="skill-skill">
        <img src={Skill1} alt="" className="a-skill-img" />
        <img src={Skill2} alt="" className="a-skill-img" />

      </div>

      </div>
    </div>

  )
}

export default Skills
