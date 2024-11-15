import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Ask from "./Ask";
import BlankLine from "./BlankLine";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./InsightX.css";

const Acknowledgement = ({ sendDataToParent }) => {
  const onClose = () => {
    sendDataToParent("close");
  };
  return (
    <div>
      <header className="innerBlockheader">
        <BlankLine />
      </header>
      <BlankLine />
      <div className="primaryQuestionBlock">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <div className="mainContentContainer">
          <Chip
          size="large"
          variant="outlined"
          icon={<VerifiedUserIcon />}
          clickable={true}
          sx={{
            borderColor: "transparent",
            marginRight: 0,
            marginTop: 1,
          }}
          color={"success"}
        />
            <h1 style={{"textAlign":"center","color":"#000035", "font-family": "Georgia, serif"}}>Thank you for your insights.</h1>
            <h3 style={{"textAlign":"center","color":"#000035", "font-family": "Lucida Console, Courier, monospace"}}>Your insight is highly valuable and is used to improve our service. </h3>
          </div>
          <div className="btnContainer">
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={() => onClose()}>
                Close
              </Button>
            </Stack>
          </div>
          <BlankLine />
        </Box>
      </div>
    </div>
  );
};
export default Acknowledgement;
