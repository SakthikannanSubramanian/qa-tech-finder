import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabsData }) => {
  const [selectedTab, setSelectedTab] = useState('What is it?'); 

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {Object.keys(tabsData)
          .filter((tabId) => tabId !== 'label' && tabId !== 'id') 
          .map((tabId, index) => (
            <li
              key={tabId}
              className={`tab-item ${selectedTab === tabId ? 'active' : ''}`}
              onClick={() => handleTabClick(tabId)}
              style={{ marginRight: index === Object.keys(tabsData).length - 1 ? 0 : '70px' }} 
            >
              {tabId === 'What is it?' ? `What is ${tabsData.label}?` : tabId} 
            </li>
          ))}
      </ul>
      <div className="tab-content">
        <div className="scrollable-content">
          {selectedTab === 'Case Study' ? ( 
            <ul> 
              {tabsData['Case Study'].split('.').map((item, index) => (
                item.trim() && <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          ) : (
            selectedTab === 'Samples' ? (
              <pre className="code-block"> 
                <code className="code-text">{tabsData['Samples']}</code>
              </pre>
            ) : (
              tabsData[selectedTab] 
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
