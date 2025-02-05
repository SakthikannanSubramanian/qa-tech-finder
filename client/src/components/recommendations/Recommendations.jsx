import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Recommendations.css'; 

const Recommendations = () => {
  const finalLevels = useSelector(state => state.data.calculatedScores.parameterScores);
  
  const recommendations = useSelector(state => state.data.questionnaire.map(parameterItem => 
    ({"parameter": parameterItem.Parameter, 
    "recommendation": parameterItem.Recommendations})));

  const getRecommendation = (parameter, level) => {
    const paramRecommendations = recommendations.find(rec => rec.parameter === parameter);    
    return paramRecommendations ? paramRecommendations.recommendation[level - 1].recommendation : '';
  };

  return (
    <div className="recommendations-container">
      
      {finalLevels.map(param => {
        const { Parameter, level } = param; 
        const recommendation = getRecommendation(Parameter, level);

        return (
          <div key={Parameter} className="recommendation-item">
            <h3>{Parameter}</h3>
            <p>{recommendation}</p>
            <Link to="/home" className="recommendation-link">Refer our TechStack page</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Recommendations;

