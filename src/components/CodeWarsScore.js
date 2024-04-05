import { useState, useEffect } from 'react';
import axios from 'axios';

function CodeWarsScores ({ nameCW }) {
  const [rankName, setRankName] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.codewars.com/api/v1/users/Fenriz1349');
        const languageData = response.data.ranks.languages[nameCW.toLowerCase()];
        
        if (languageData) {
          setRankName(languageData.name);
          setScore(languageData.score);
        } else {
          console.error(`Langage "${nameCW}" non trouvé dans la réponse de l'API.`);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du score de CodeWars : ', error);
      }
    };

    fetchData();
  }, [nameCW]);

  return (
    <div>
      {rankName && score && (
        <p>
          Rang : {rankName}, <span>{score}</span> points
        </p>
      )}
    </div>
  );
};

export default CodeWarsScores;
