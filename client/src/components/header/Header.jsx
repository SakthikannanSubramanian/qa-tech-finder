import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/logo.svg";
import headerImage from "../../assets/headerImage.png"; 
import InsightXModal from '../insightX/InsightXModal';

const Header = () => {
  const [openInsightXModal, setOpenInsightXModal] = useState(false);
  const retrieveStateValueFromInsightXModal = (stateValue) => {
      setOpenInsightXModal(stateValue)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>
          <div className="header-text-and-image">
            <div className="header-text">
              <h1>Smart Tech Choices Made Easy with Detailed Comparisons</h1>
              <p>Navigate the tech landscape effortlessly with our expert comparisons. Find the best technology solutions tailored to your needs with ease and confidence.</p>
            </div>
            <div className="header-image-container"> 
              <img src={headerImage} alt="Header Image" className="header-image" />
            </div>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/ai-expert">AI Expert</Link>
            <Link to="/about">About</Link>
            <Link onClick={()=> setOpenInsightXModal(true)}>InsightX</Link>
          </div>
        </div>
        {openInsightXModal ? <InsightXModal isOpenModal={openInsightXModal}  sendDataToGrandParent={retrieveStateValueFromInsightXModal} />:<></>}
      </div>
    </header>
  );
};

export default Header;
