import FrameworkItem from './FrameworkItem';
import jsonData from '../data/data.json'; 
import defaultLogo from "../assets/defaultLogo.png";
import swiftuiLogo from "../assets/swiftuiLogo.png";
import reactLogo from "../assets/reactLogo.png";
import pandasLogo from "../assets/pandasLogo.png";
import githubLogo from "../assets/githubLogo.png";
import apiLogo from "../assets/apiLogo.png";
import mysqlLogo from "../assets/mysqlLogo.png";
import "../styles/LanguageList.css"; 

function FrameworkList() {
  return (
    <div className="language-list">
      {jsonData.frameworks.map(framework => (
        <FrameworkItem
          key={framework.name}
          logo={getLogo(framework.name)}
          name={framework.name}
          linkGithub={framework.linkGithub}
        />
      ))}
    </div>
  );
}

function getLogo(frameworkName) {
    switch (frameworkName) {
      case 'React':
        return reactLogo;
      case 'Pandas/ Matplotlib/ Seaborn':
        return pandasLogo;
      case 'Git et Github':
        return githubLogo;
      case 'API Rest':
        return apiLogo;
      case 'MySql':
          return mysqlLogo;
      case "SwiftUI" :
        return swiftuiLogo;
      case "SwiftChart /SwiftData" :
          return swiftuiLogo;
      default:
        return defaultLogo;
    }
  }
export default FrameworkList;