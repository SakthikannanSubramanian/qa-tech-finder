import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Ask from "./Ask";
import Title from "./Title";
import CancelIcon from '@mui/icons-material/Cancel';
import Avatar from "@mui/material/Avatar";
import "./InsightX.css";
import BlankLine from "./BlankLine";
import likeIcon from '../../assets/likeIcon.gif';
import dislikeIcon from '../../assets/dislikeIcon.gif';
import recommendIdea from '../../assets/recommendIdea.gif';

const PrimaryQuestionBlock = ({ sendDataToParent }) => {
  const onLikeSubmit = () => {
    sendDataToParent("Like");
  };
  const onDisLikeSubmit = () => {
    sendDataToParent("DisLike");
  };
  const onRecommendSubmit = () => {
    sendDataToParent("Recommend");
  };
  const onClose = () => {
    sendDataToParent("close");
  };

  let [likeHighlightIcon, setLikeHighlightIcon] = useState(false);
  let [dislikeHighlightIcon, setDislikeHighlightIcon] = useState(false);
  let [recommendHighlightIcon, setRecommendHighlightIcon] = useState(false);

  return (
    <div>
      <header className="modalHeader">
        <Title title={"Share Your Xperience"} />
        <div className="modalCloseBtnWrapper">
          <CancelIcon sx={{ color: "#FFFFFF" }} onClick={() => onClose()} />
        </div>
      </header>
      <div className="primaryQuestionBlock">
        <Ask question={"What kind of insight do you have ?"} />
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem
                disablePadding
                onClick={() => onLikeSubmit()}
                onMouseEnter={() => setLikeHighlightIcon(true)}
                onMouseLeave={() => setLikeHighlightIcon(false)}
              >
                <ListItemButton>
                  <Avatar
                    alt="Like"
                    src={likeIcon}
                  />
                  <BlankLine />
                  <BlankLine />
                  <ListItemText primary="I like something" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                onClick={() => onDisLikeSubmit()}
                onMouseEnter={() => setDislikeHighlightIcon(true)}
                onMouseLeave={() => setDislikeHighlightIcon(false)}
              >
                <ListItemButton>
                  <Avatar
                    alt="Dislike"
                    src={dislikeIcon}
                  />
                  <BlankLine />
                  <BlankLine />
                  <ListItemText primary="I don't like something" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                onClick={() => onRecommendSubmit()}
                onMouseEnter={() => setRecommendHighlightIcon(true)}
                onMouseLeave={() => setRecommendHighlightIcon(false)}
              >
                <ListItemButton>
                  <Avatar
                    alt="Recommendation"
                    src={recommendIdea}
                  />
                  <BlankLine />
                  <BlankLine />
                  <ListItemText primary="I have a recommendation" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </div>
    </div>
  );
};
export default PrimaryQuestionBlock;
