import Resume from "../../img/Akhil T N Resume 5 (1).pdf";
import "./DownloadButton.css";

const DownloadButton = () => {
  const downloadResume = () => {
    window.location.href = Resume;
  };
  const downloadGithub = () => {
    window.location.href = "https://github.com/Akhiltn396"
  };

  return (
    <div className="download">
      <button onClick={downloadResume} className="btn">Resume</button>
      <button onClick={downloadGithub} className="btn2">Github</button>
    </div>
  );
};

export default DownloadButton;
