import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions/dataActions';
import Search from '../../components/search/Search';
import Loading from '../../components/loading/Loading'; 
import TechChip from '../../components/tech-chip/TechChip';
import Tabs from '../../components/tabs/Tabs';

import './Home.css';
import { useTechData } from '../../hooks/useTechData';

const Home = () => {
  const dispatch = useDispatch();
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedChildTech, setSelectedChildTech] = useState(null);
  const [selectedGrandChildTech, setSelectedGrandChildTech] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { loading, error, topicsData, topicChildData, topicGrandChildData } = useTechData(selectedTech, selectedChildTech, selectedGrandChildTech);

  const handleTechClick = (techName) => {
    setSelectedTech(techName);
    setSelectedChildTech(null);
    setSelectedGrandChildTech(null);
  };

  const handleTechChildClick = (techChildName) => {
    setSelectedChildTech(techChildName);
    setSelectedGrandChildTech(null);
  };

  const handleTechGrandChildClick = (techGrandChildName) => {
    setSelectedGrandChildTech(techGrandChildName);
  };

  const techChildRef = useRef(null);
  const techGrandChildRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (selectedTech) {
      techChildRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedTech]);

  useEffect(() => {
    if (selectedChildTech) {
      techGrandChildRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedChildTech]);

  useEffect(() => {
    if (selectedGrandChildTech) {
      tabsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedGrandChildTech]);

  return (
    <div>
      <Search />
      {loading && <Loading />}
      {error && <p>Error: {error}</p>}
      {topicsData &&
        <div className="tech-chips-container">
          {topicsData.map(topic => (
            <TechChip
              key={topic}
              techName={topic}
              handleTechClick={handleTechClick}
              selected={selectedTech === topic}
            />
          ))}
        </div>
      }
      {selectedTech && (
        <div className='tech-child-chips-container-wrapper' ref={techChildRef}>
          <p>Choose a category</p>
          <div className="tech-child-chips-container">
            {topicChildData.map(topicChild => (
              <TechChip
                key={topicChild}
                techName={topicChild}
                handleTechClick={handleTechChildClick}
                selected={selectedChildTech === topicChild}
              />
            ))}
          </div>
        </div>
      )}
      {selectedChildTech && (
        <div className='tech-grandchild-chips-container-wrapper' ref={techGrandChildRef}>
          <p>Take a look at the tech</p>
          <div className="tech-grandchild-chips-container">
            {topicGrandChildData.map(topicGrandChild => (
              <TechChip
                key={topicGrandChild.id}
                techName={topicGrandChild.label}
                handleTechClick={handleTechGrandChildClick}
                selected={selectedGrandChildTech === topicGrandChild.label}
                showIcon={true}
                iconName={topicGrandChild.label.toLowerCase()}
              />
            ))}
          </div>
        </div>
      )}
      {selectedGrandChildTech && (
        <div className="tabs-container" ref={tabsRef}>
          <Tabs tabsData={topicGrandChildData.find(topicGrandChild => topicGrandChild.label === selectedGrandChildTech)} />
        </div>
      )}
    </div>
  );
};

export default Home;
