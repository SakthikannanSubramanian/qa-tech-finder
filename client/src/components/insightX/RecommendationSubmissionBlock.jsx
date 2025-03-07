import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Ask from "./Ask";
import TextField from "@mui/material/TextField";
import BlankLine from "./BlankLine";
import Stack from "@mui/material/Stack";
import ReplyIcon from "@mui/icons-material/Reply";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Chip from "@mui/material/Chip";
import Title from "./Title";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import checkForValidEmail from "./util/EmailChecker";
import "./InsightX.css";

const RecommendationSubmissionBlock = ({ sendDataToParent }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [showMandatoryMessage, setShowMandatoryMessage] = useState(false);
  const [showEnterValidEmailWarning, setShowEnterValidEmailWarning] =
    useState(false);

  const onBack = () => {
    sendDataToParent("back");
  };

  const onClose = () => {
    sendDataToParent("close");
  };

  const handleChangeEmail = (e) => {
    setShowMandatoryMessage(false);
    setShowEnterValidEmailWarning(false);
    setEmail(e.target.value);
  };
  const handleChangeComment = (e) => {
    setShowMandatoryMessage(false);
    setShowEnterValidEmailWarning(false);
    setComment(e.target.value);
  };
  
  const handleOnSubmit = async () => {
    if (email === "" || comment === "") {
      setShowMandatoryMessage(true);
    } else {
      if (checkForValidEmail(email)) {
        const jsonPayload = {
          email: email,
          comment: comment,
          type: "recommendation",
        };
        try {
          const response = await axios.post(
            "http://localhost:5001/api/v1/saveInsightXData",
            jsonPayload
          );
          console.log(response.data.message);
        } catch (error) {
          console.error("Error saving data:", error);
        }
        sendDataToParent("submitted");
      } else {
        setShowEnterValidEmailWarning(true);
      }
    }
  };

  return (
    <div>
      <header className="modalHeader">
        <Title title={"I have a recommendation.."} />
        <div className="modalCloseBtnWrapper">
          <CancelIcon sx={{ color: "#FFFFFF" }} onClick={() => onClose()} />
        </div>
      </header>
      <BlankLine />
      <div className="primaryQuestionBlock">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <div className="mainContentContainer">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              onChange={(e) => handleChangeEmail(e)}
              value={email}
            />
            <Ask question={"Share your suggestion"} />
            <TextField
              id="suggestion"
              label="Your suggestion"
              variant="outlined"
              multiline
              minRows={3}
              maxRows={4}
              value={comment}
              onChange={(e) => handleChangeComment(e)}
            />
            <BlankLine />
          </div>
          <div className="btnContainer">
            <Stack spacing={2} direction="row">
              <Chip
                icon={<ReplyIcon />}
                label="Back"
                variant="filled"
                onClick={() => onBack()}
                color="primary"
              />
              <Chip
                icon={<SaveAltIcon />}
                label="Submit"
                variant="filled"
                onClick={() => handleOnSubmit()}
                color="success"
              />
            </Stack>
          </div>
          {showMandatoryMessage ? (
            <p className="mandatoryMessage">
              Please fill in all requird fields
            </p>
          ) : (
            <></>
          )}
          {showEnterValidEmailWarning ? (
            <p className="mandatoryMessage"> Please enter a valid email</p>
          ) : (
            <></>
          )}
          <BlankLine />
        </Box>
      </div>
    </div>
  );
};
export default RecommendationSubmissionBlock;
