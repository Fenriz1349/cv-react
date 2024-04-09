import { useState, useEffect } from 'react';
import LanguageItem from './LanguageItem';
import axios from 'axios';
import jsonData from '../data/data.json'; 
import swiftLogo from "../assets/swiftLogo.png";
import pythonLogo from "../assets/pythonLogo.png";
import kotlinLogo from "../assets/kotlinLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import sqlLogo from "../assets/sqlLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import typescriptLogo from "../assets/typescriptLogo.png";
import phpLogo from "../assets/phpLogo.png"
import "../styles/LanguageList.css"; 

function LanguagesList() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchDataForLanguages = async () => {
      const filteredLanguageData = jsonData.languages.filter(language => language.name !== 'HTML5 et CSS3');
  
      const languagesWithScores = filteredLanguageData.map(language => ({
        ...language,
        score: null
      }));
  
      await Promise.all(languagesWithScores.map(async (language) => {
        if (language.score === null) {
          const response = await axios.get(`https://www.codewars.com/api/v1/users/Fenriz1349`);
          const score = response.data.ranks.languages[language.name.toLowerCase()].score;
          language.score = score;
        }
      }));
      languagesWithScores.sort((a, b) => (b.score === null) - (a.score === null) || b.score - a.score);
      
      const htmlCssLanguage = jsonData.languages.find(language => language.name === 'HTML5 et CSS3');
      languagesWithScores.push({ ...htmlCssLanguage, score: null });
  
      setLanguages(languagesWithScores);
    };
  
    fetchDataForLanguages();
  }, []);
  

  return (
    <div className="language-list">
      {languages.map((language, index) => (
        <LanguageItem
          key={index}
          logo={getLogo(language.name)}
          name={language.name}
          logo2={language.name === 'HTML5 et CSS3' ? cssLogo : null}
          linkGithub={language.linkGithub}
          score={language.score}
        />
      ))}
    </div>
  );
}

function getLogo(LanguageName) {
    switch (LanguageName) {
      case 'Swift':
        return swiftLogo;
      case 'Python':
        return pythonLogo;
      case 'Kotlin':
        return kotlinLogo;
      case 'Javascript':
        return javascriptLogo;
      case 'SQL':
        return sqlLogo;
      case 'HTML5 et CSS3':
        return htmlLogo;
      case 'TypeScript':
        return typescriptLogo;
      case 'Php' :
        return phpLogo;
      default:
        return null;
    }
  }
export default LanguagesList;