import "../styles/LanguageItem.css"; 
import LinkButton from "./LinkButton";
import CodeWarsScores from "./CodeWarsScore";

function LanguageItem({ logo, name, logo2, linkGithub }) {
  return (
    <div className="language-item">
      <div className="top-section">
        {name === "HTML5 et CSS3" ? (
          <div className="html">
            <img src={logo} alt="HTML Logo" className="logo" />
            <img src={logo2} alt="CSS Logo" className="logo" />
          </div>
        ) : (
          <img src={logo} alt={name} className="logo" />
        )}
        <h4>{name}</h4>
      </div>
      <div className="bottom-section">
          <CodeWarsScores
          nameCW={name}
          />
        {linkGithub !== "" && <LinkButton 
            link={linkGithub}
            socialName="GitHub"
        />}
      </div>
    </div>
  );
}

    
export default LanguageItem