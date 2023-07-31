import "./about.css";
import Me from "../../img/IMG_20230728_112719.jpg"
import Award from "../../img/Screenshot (701).png";
import Award2 from "../../img/Screenshot (703).png";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Entri level software engineer who is passionate about full stack web development.
        </p>
        <p className="a-desc">
          I seek challenging opportunities where i can fully use my skills for the success of the organization. Ability to work with HTML,CSS and Javascript. Expertized in frontend and backend frameworks of javascript.Can work well under pressure and make the best of my skills in any situations.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Internship at Entri Elevate as Full Stack developer</h4>
            <p className="a-award-desc">
             Completed 9 months internship from entri elevate as MERN stack developer and earned vast knowledge in frontend backend and database skills with MERN stack.
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={Award2} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Training from Regex software service as MERN stack dev</h4>
            <p className="a-award-desc">
             Completed 3 months online course in regex software solutions and gained knowledge with HTML,CSS,JS and JS frontend and backend frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;