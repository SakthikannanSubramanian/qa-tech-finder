import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/logo.svg";
import headerImage from "../../assets/headerImage.png"; 
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PrimaryQuestionBlock from "../insightX/PrimaryQuestionBlock";
import LikeSubmissionBlock from "../insightX/LikeSubmissionBlock";
import DisLikeSubmissionBlock from "../insightX/DisLikeSubmissionBlock";
import RecommendationSubmissionBlock from "../insightX/RecommendationSubmissionBlock";
import Acknowledgement from "../insightX/Acknowledgement";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showPrimaryQuestionBlock, setShowPrimaryQuestionBlock] =
    useState(true);
  const [showLike, setShowLike] = useState(false);
  const [showDislike, setShowDislike] = useState(false);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showAcknowledgement, setShowAcknowledgement] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const titleStyle = {
    "text-align": "center",
    color: "#FFFFFF",
    "font-size": "30px",
    "font-family": " Georgia, serif",
  };
  const subtitleStyle = {
    "text-align": "center",
    color: "#FFFFFF",
    "font-size": "20px",
    "font-family": "Lucida Console, Courier, monospace",
  };



  const retrieveOptionFromPrimaryQuestionBlock = (data) => {
    if(data === 'Like'){
      setShowLike(true);
      setShowPrimaryQuestionBlock(false);
    }
    else if(data === 'DisLike'){
      setShowDislike(true);
      setShowPrimaryQuestionBlock(false);
    }
    else if(data === 'Recommend'){
      setShowRecommendation(true);
      setShowPrimaryQuestionBlock(false);
    }
  };

  const handleReturnToParent = (param) => {
    if(param=='back'){
      setShowPrimaryQuestionBlock(true);
      setShowLike(false);
      setShowDislike(false);
      setShowRecommendation(false);
    }
    else if(param=='submitted'){
      setShowPrimaryQuestionBlock(false);
      setShowLike(false);
      setShowDislike(false);
      setShowRecommendation(false);
      setShowAcknowledgement(true);
    }
    else if(param=='close'){
      handleClose();
      setShowPrimaryQuestionBlock(true);
      setShowLike(false);
      setShowDislike(false);
      setShowRecommendation(false);
      setShowAcknowledgement(false);
    }
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
            <Link onClick={handleOpen}>InsightX</Link>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx=".boxContainer">
            <div className="boxSubContainer">
              {showPrimaryQuestionBlock? <PrimaryQuestionBlock sendDataToParent={retrieveOptionFromPrimaryQuestionBlock}/>:<></>}
              {showLike? <LikeSubmissionBlock sendDataToParent={handleReturnToParent} />:<></>}
              {showDislike? <DisLikeSubmissionBlock   sendDataToParent={handleReturnToParent}/>:<></>}
              {showRecommendation? <RecommendationSubmissionBlock   sendDataToParent={handleReturnToParent}/>:<></>}
              {showAcknowledgement? <Acknowledgement   sendDataToParent={handleReturnToParent}/>:<></>}
            </div>
          </Box>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
