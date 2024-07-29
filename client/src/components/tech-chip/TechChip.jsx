import React from 'react';
import './TechChip.css';

const TechChip = ({ techName, handleTechClick, selected, showIcon = false, iconName = "" }) => {
  return (
    <div 
      className={`tech-chip ${showIcon ? (selected ? 'icon-active' : '') : (selected ? 'selected' : '')}`} 
      onClick={() => handleTechClick(techName)}
    >
      {showIcon && 
        <span className="tech-chip-icon">
          <img src={require(`../../assets/${iconName}.png`)} alt={`${techName} icon`} /> 
        </span>
      }
      <span className="tech-chip-text">{techName}</span>
    </div>
  );
};

export default TechChip;
