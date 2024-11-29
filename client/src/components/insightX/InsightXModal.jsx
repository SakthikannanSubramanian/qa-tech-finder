import React, { useState } from "react";
import "./InsightX.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PrimaryQuestionBlock from "./PrimaryQuestionBlock";
import LikeSubmissionBlock from "./LikeSubmissionBlock";
import DisLikeSubmissionBlock from "./DisLikeSubmissionBlock";
import RecommendationSubmissionBlock from "./RecommendationSubmissionBlock";
import Acknowledgement from "./Acknowledgement";

const InsightXModal = (props) => {
    const [openInsightXModal, setOpenInsightXModal] = useState(props.isOpenModal);
    const [showPrimaryQuestionBlock, setShowPrimaryQuestionBlock] =
      useState(true);
    const [showLike, setShowLike] = useState(false);
    const [showDislike, setShowDislike] = useState(false);
    const [showRecommendation, setShowRecommendation] = useState(false);
    const [showAcknowledgement, setShowAcknowledgement] = useState(false);
    const handleCloseOpenInsightXModal = () => {
      props.sendDataToGrandParent(false);
      setOpenInsightXModal(false);
    }
  
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
      else if(data==='close'){
        handleCloseOpenInsightXModal();
        setShowPrimaryQuestionBlock(true);
        setShowLike(false);
        setShowDislike(false);
        setShowRecommendation(false);
        setShowAcknowledgement(false);
      }
    };
  
    const handleReturnToParent = (param) => {
      if(param==='back'){
        setShowPrimaryQuestionBlock(true);
        setShowLike(false);
        setShowDislike(false);
        setShowRecommendation(false);
      }
      else if(param==='submitted'){
        setShowPrimaryQuestionBlock(false);
        setShowLike(false);
        setShowDislike(false);
        setShowRecommendation(false);
        setShowAcknowledgement(true);
      }
      else if(param==='close'){
        handleCloseOpenInsightXModal();
        setShowPrimaryQuestionBlock(true);
        setShowLike(false);
        setShowDislike(false);
        setShowRecommendation(false);
        setShowAcknowledgement(false);
      }
    }
  
  return (
    <Modal
      open={openInsightXModal}
      onClose={handleCloseOpenInsightXModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx="">
        <div className="boxSubContainer">
          {showPrimaryQuestionBlock ? (
            <PrimaryQuestionBlock
              sendDataToParent={retrieveOptionFromPrimaryQuestionBlock}
            />
          ) : (
            <></>
          )}
          {showLike ? (
            <LikeSubmissionBlock sendDataToParent={handleReturnToParent} />
          ) : (
            <></>
          )}
          {showDislike ? (
            <DisLikeSubmissionBlock sendDataToParent={handleReturnToParent} />
          ) : (
            <></>
          )}
          {showRecommendation ? (
            <RecommendationSubmissionBlock
              sendDataToParent={handleReturnToParent}
            />
          ) : (
            <></>
          )}
          {showAcknowledgement ? (
            <Acknowledgement sendDataToParent={handleReturnToParent} />
          ) : (
            <></>
          )}
        </div>
      </Box>
    </Modal>
  );
};
export default InsightXModal;
