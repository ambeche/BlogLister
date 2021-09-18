import {
  Grid,
  Typography,
  Paper,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Divider,
  IconButton
} from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../styles/useStyles';

const Footer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footerMediaContainer}>
        <div className={classes.footerDeveloperInfo}>
          <Typography variant="h6">Developer</Typography>
          <Typography variant="body2">tamanji.che@metropolia.fi</Typography>
        </div>

        <div className={classes.footerMediaInnerContainer}>
          <IconButton
            component={Link}
            to={{ pathname: 'https://github.com/ambeche' }}
            target="_blank"
            color="inherit"
            rel="no-referrer"
          >
            <GitHub className={classes.footerMediaIcons} />
            GitHub
          </IconButton>
          <IconButton
            component={Link}
            to={{ pathname: 'https://linkedin.com/in/tamanji/' }}
            target="_blank"
            color="inherit"
            rel="no-referrer"
          >
            <LinkedIn className={classes.footerMediaIcons} />
            LinkedIn
          </IconButton>
        </div>
      </div>
      {props?.currentUser && (
        <Grid container spacing={3} className={classes.footerGridItems}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">BlogLister</Typography>
            <Typography variant="body2">
              A prototype blogging app. This platform allows users to add blogs
              or articles, read blogs from other users and make comments on
              different blogs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Explore</Typography>
            <ListItem component={Link} to="/" color="inherit">
              <ListItemText primary="Blogs" />
            </ListItem>
            <ListItem component={Link} to="/users" color="inherit">
              <ListItemText primary="Users" color="inherit" />
            </ListItem>
            <ListItem component={Link} to="/profile" color="inherit">
              <ListItemText primary="Profile" />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Implemented With</Typography>
            <ListItem
              component={MuiLink}
              href="https://redux.js.org/"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="Redux/Redux-thunk" />
            </ListItem>
            <ListItem
              component={MuiLink}
              href="https://material-ui.com/"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="Material-Ui" />
            </ListItem>
            <ListItem
              component={MuiLink}
              href="https://reactjs.org/"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="React" />
            </ListItem>
            <ListItem
              component={MuiLink}
              href="https://nodejs.org"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="Node.js" />
            </ListItem>
            <ListItem
              component={MuiLink}
              href="https://expressjs.com"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="Express.js" />
            </ListItem>
            <ListItem
              component={MuiLink}
              href="https://mongodb.com"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="MongoDB" />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Credits</Typography>
            <Typography variant="body2">
              Thanks to the Full Stack course offered by the University of
              Helsinki&apos;s Open University Program
            </Typography>
            <ListItem
              component={MuiLink}
              href="https://fullstackopen.com/"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="Full stack open 2021" />
            </ListItem>
            <ListItem
              component={MuiLink}
              href="https://mooc.fi"
              target="_blank"
              color="inherit"
              rel="no-referrer"
            >
              <ListItemText primary="MOOC.fi" />
            </ListItem>
          </Grid>
        </Grid>
      )}
      <div className={classes.footerCopyrightContainer}>
        <Paper className={classes.footerCopyrightInnerContainer}>
          <Typography
            variant="subtitle2"
            className={classes.footerCopyrightText}
          >
            Copyright &copy; 2021, Che. All Rights Reserved.
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.footerPrivacyPolicy}
          />
          <Typography
            variant="subtitle2"
            component={Link}
            to={{
              pathname: '/privacy-policy'
            }}
            className={classes.footerPrivacyPolicy}
          >
            Privacy Policy
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Footer;
