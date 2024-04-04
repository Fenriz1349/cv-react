import "../styles/LanguageItem.css"; 
import LinkButton from "./LinkButton";

function FrameworkItem({ logo,name,linkGithub }) {
    return (
      <div className="language-item">
        <div className="top-section">
          <img src={logo} alt={name} className="logo" />
          <h4>{name}</h4>
        </div>
        <div className="bottom-section">
        {linkGithub !== "" && <LinkButton 
            link={linkGithub}
            socialName="GitHub"
        />}
        </div>
      </div>
    );
  }
    
export default FrameworkItem