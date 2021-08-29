import { makeStyles, createTheme } from '@material-ui/core';

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 324,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: '3%',
    flexGrow: 1
  },
  desktopView: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  appBarEnd: {
    [theme.breakpoints.between('md', 'lg')]: { marginLeft: theme.spacing(40) },
    [theme.breakpoints.up('lg')]: { marginLeft: theme.spacing(80) }
  },
  appBarTab: {
    backgroundColor: theme.palette.primary.light,
    boxShadow: `4px 4px 1px 1px ${theme.palette.secondary.light}`,
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: '0 0 0 0'
    }
  },
  appName: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(6),
      marginLeft: theme.spacing(1.5)
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: '55%'
    },
    [theme.breakpoints.only('xs')]: {
      marginLeft: '30%'
    },
    textDecoration: 'none'
  },
  menuIcon: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  menuItemProfile: {
    marginRight: theme.spacing(0)
  },
  formSubmitBtn: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5)
  },
  formTitle: {
    marginBottom: theme.spacing(2)
  },
  commentForm: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    '& button': {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1)
    }
  },
  listSecondaryActionsDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      padding: theme.spacing(1),
      '& button': {
        marginLeft: theme.spacing(2)
      }
    }
  },
  listSecondaryActionsMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    padding: theme.spacing(1),
    '& button': {
      marginLeft: theme.spacing(4)
    }
  },
  listItemPrimary: {
    maxWidth: theme.spacing(35)
  },
  profile: {
    '& h6': {
      marginTop: '4%'
    }
  },
  userDetails: {
    '& h6': {
      marginTop: '2%'
    }
  },
  formsContainerComponent: {
    marginBottom: '3%'
  }
}));

export default useStyles;
