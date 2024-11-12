import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Ask from "./Ask";
import TextField from "@mui/material/TextField";
import BlankLine from "./BlankLine";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Title from "./Title";
import SubTitle from "./SubTitle";
import "./InsightX.css";

const RecommendationSubmissionBlock = ({ sendDataToParent }) => {
  const onBack = () => {
    sendDataToParent("back");
  };
  const onSubmit = () => {
    sendDataToParent("submitted");
  };

  return (
    <div>
      <header className="modalHeader">
        <Title /> 
        <SubTitle subTitle={"I have a recommendation.."} />
      </header>
      <BlankLine />
      <div className="primaryQuestionBlock">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <div className="mainContentContainer">
            <TextField id="email" label="Email" variant="outlined" />
            <Ask question={"Share your suggestion"} />
            <TextField
              id="suggestion"
              label="Your suggestion"
              variant="outlined"
              multiline
              maxRows={4}
            />
            <BlankLine />
          </div>
          <div className="btnContainer">
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={() => onBack()}>
                Back
              </Button>
              <Button variant="outlined" onClick={() => onSubmit()}>
                Submit
              </Button>
            </Stack>
          </div>
          <BlankLine />
        </Box>
      </div>
    </div>
  );
};
export default RecommendationSubmissionBlock;
