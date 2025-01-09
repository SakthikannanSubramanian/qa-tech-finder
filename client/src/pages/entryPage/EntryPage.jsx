import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EntryPage.css';

const EntryPage = () => {
  const navigate = useNavigate();

  const handleFillQuestionnaireClick = () => {
    navigate('/questionnaire');
  };

  const handleViewTechStackClick = () => {
    navigate('/home');
  };

  return (
    <div className="entry-page">
      <h1>Empower your project with tech stack and automation insights.</h1>
      <div className="button-container">
        <button className="large-button" onClick={handleFillQuestionnaireClick}>
          Fill Questionnaire
        </button>
        <button className="large-button" onClick={handleViewTechStackClick}>
          View Tech Stack
        </button>
      </div>
    </div>
  );
};

export default EntryPage;
