import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  Icon
} from '@material-ui/core';
import { Bookmark, ExpandMore } from '@material-ui/icons';
import React, { useState } from 'react';
import useStyles from '../styles/useStyles';
import Blog from './Blog';
import DataList from './DataList';

const Profile = ({ currentUser }) => {
  const classes = useStyles();
  const [isExpanded, setExpanded] = useState({
    personalData: false,
    readingList: false,
    statistics: false,
    ownedblogs: false
  });
  const handleAccordionExpansion = (expanded) => () => setExpanded(expanded);

  const listOfBlogsAddedByCurrentUser = () => {
    return (
      <Accordion
        expanded={isExpanded.ownedblogs}
        onChange={handleAccordionExpansion({
          readingList: false,
          personalData: false,
          statistics: false,
          ownedblogs: !isExpanded.ownedblogs
        })}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="list"
          aria-controls="articles-added-by-current-user"
        >
          <Typography variant="subtitle1" component="strong">
            Articles Added &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Icon>
            {currentUser?.blogs?.length ? currentUser?.blogs?.length : null}
          </Icon>
        </AccordionSummary>
        <AccordionDetails>
          {currentUser?.blogs?.length ? (
            <DataList
              scroll={true}
              searchBarOff={true}
              type="blogs"
              sortby="likes"
              currentUser={{
                ...currentUser,
                isAddedByCurrentUser: currentUser?.blogs?.length
              }}
            >
              <Blog />
            </DataList>
          ) : (
            <Typography>
              Articles you contribute or stories you write will appear here
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    );
  };

  const bookmarkedList = () => {
    return (
      <Accordion
        expanded={isExpanded.readingList}
        onChange={handleAccordionExpansion({
          readingList: !isExpanded.readingList,
          personalData: false,
          statistics: false,
          ownedblogs: false
        })}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="reading-list"
          aria-controls="list of bookmarked articles"
        >
          <Typography variant="subtitle1" component="strong">
            View Reading List
          </Typography>
          <Badge
            badgeContent={currentUser?.bookmarkCounts}
            className={classes.bookmarkIcon}
          >
            <Bookmark />
          </Badge>
        </AccordionSummary>
        <AccordionDetails>
          {currentUser?.bookmarkCounts ? (
            <DataList
              scroll={true}
              searchBarOff={true}
              type="blogs"
              sortby="likes"
              currentUser={currentUser}
              reads={true}
            >
              <Blog />
            </DataList>
          ) : (
            <Typography>
             Save or bookmark articles to read them from here!
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div className={classes.profile}>
      <List component={Paper}>
        <Divider />
        <ListItem>
          <ListItemText primary={`Welcome ${currentUser?.name}`} />
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
        </ListItem>
        <Divider />
      </List>
      <Accordion
        expanded={isExpanded.personalData}
        onChange={handleAccordionExpansion({
          personalData: !isExpanded.personalData,
          readingList: false,
          ownedblogs: false,
          statistics: false
        })}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="personal-data"
          aria-controls="personal data"
        >
          <Typography variant="subtitle1" component="strong">
            Personal Data
          </Typography>
        </AccordionSummary>
        <List>
          <ListItem>
            <ListItemText
              primary="Username"
              secondary={currentUser?.username}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Total blogs added"
              secondary={currentUser?.blogs?.length}
            />
          </ListItem>
        </List>
      </Accordion>
      {bookmarkedList()}
      {listOfBlogsAddedByCurrentUser()}
      <Accordion
        expanded={isExpanded.statistics}
        onChange={handleAccordionExpansion({
          personalData: false,
          readingList: false,
          ownedblogs: false,
          statistics: !isExpanded.statistics
        })}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="stats"
          aria-controls="statistics"
        >
          <Typography variant="subtitle1" component="strong">
            Statistics
          </Typography>
        </AccordionSummary>
        <List>
          <ListItem>
            <ListItemText
              primary="Username"
              secondary={currentUser?.username}
            />
          </ListItem>
        </List>
      </Accordion>
    </div>
  );
};

export default Profile;
