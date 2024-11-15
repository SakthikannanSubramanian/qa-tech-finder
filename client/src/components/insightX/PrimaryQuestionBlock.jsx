import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import "./InsightX.css";
import Ask from "./Ask";
import Title from "./Title";
import SubTitle from "./SubTitle";

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

  let [likeHighlightIcon, setLikeHighlightIcon] = useState(false);
  let [dislikeHighlightIcon, setDislikeHighlightIcon] = useState(false);
  let [recommendHighlightIcon, setRecommendHighlightIcon] = useState(false);

  return (
    <div>
      <header className="modalHeader">
        <Title /> 
        <SubTitle subTitle={"Share your Xperience"} />
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
                  <Chip
                    size="large"
                    variant="outlined"
                    icon={<SentimentSatisfiedAltIcon />}
                    clickable={true}
                    sx={{
                      borderColor: "transparent",
                      marginRight: 0,
                      marginTop: 1,
                    }}
                    color={likeHighlightIcon ? "success" : "default"}
                  />
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
                  <Chip
                    size="large"
                    variant="outlined"
                    icon={<SentimentVeryDissatisfiedIcon />}
                    clickable={true}
                    sx={{
                      borderColor: "transparent",
                      marginRight: 0,
                      marginTop: 1,
                    }}
                    color={dislikeHighlightIcon ? "error" : "default"}
                  />
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
                  <Chip
                    size="large"
                    variant="outlined"
                    icon={<EmojiObjectsIcon />}
                    clickable={true}
                    sx={{
                      borderColor: "transparent",
                      marginRight: 0,
                      marginTop: 1,
                    }}
                    color={recommendHighlightIcon ? "warning" : "default"}
                  />
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
