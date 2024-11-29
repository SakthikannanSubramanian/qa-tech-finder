import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Ask from "./Ask";
import TextField from "@mui/material/TextField";
import BlankLine from "./BlankLine";
import Stack from "@mui/material/Stack";
import Title from "./Title";
import CancelIcon from "@mui/icons-material/Cancel";
import ReplyIcon from "@mui/icons-material/Reply";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Chip from "@mui/material/Chip";
import "./InsightX.css";

const LikeSubmissionBlock = ({ sendDataToParent }) => {
  const onBack = () => {
    sendDataToParent("back");
  };
  const onSubmit = () => {
    sendDataToParent("submitted");
  };

  const onClose = () => {
    sendDataToParent("close");
  };
  return (
    <div>
      <header className="modalHeader">
        <Title title={"I like something.."} />
        <div className="modalCloseBtnWrapper">
          <CancelIcon sx={{ color: "#FFFFFF" }} onClick={() => onClose()} />
        </div>
      </header>
      <BlankLine />
      <div className="primaryQuestionBlock">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <div className="mainContentContainer">
            <TextField id="email" label="Email" variant="outlined" />
            <Ask question={"What do you like about our site ?"} />
            <TextField
              id="suggestion"
              label="Your likes"
              variant="outlined"
              multiline
              maxRows={4}
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
                onClick={() => onSubmit()}
                color="success"
              />
            </Stack>
          </div>
          <BlankLine />
        </Box>
      </div>
    </div>
  );
};
export default LikeSubmissionBlock;
