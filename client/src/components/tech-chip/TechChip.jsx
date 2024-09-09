import React from 'react';
import './TechChip.css';

const TechChip = ({ techName, handleTechClick, selected, showIcon = false, iconName = "" }) => {
  const iconFileName = iconName.replace(/\s+/g, '').toLowerCase();
  const defaultIcon = require('../../assets/default-icon.png');
  let techIcon; 
  try {
    techIcon = require(`../../assets/${iconFileName}.png`);
  } catch (error) {}

  const IconSrc = techIcon || defaultIcon;

  return (
    <div 
      className={`tech-chip ${showIcon ? (selected ? 'icon-active' : '') : (selected ? 'selected' : '')}`} 
      onClick={() => handleTechClick(techName)}
    >
      {showIcon && 
        <span className="tech-chip-icon">
          <img 
            src={IconSrc} 
            alt={`${techName} icon`} 
          /> 
        </span>
      }
      <span className="tech-chip-text">{techName}</span>
    </div>
  );
};

export default TechChip;
