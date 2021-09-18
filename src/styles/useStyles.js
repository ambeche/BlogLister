import { makeStyles, createTheme } from '@material-ui/core';

export const theme = createTheme({
  breakpoints: {
    values: {
      xxxs: 0,
      xxs: 359,
      xs: 360,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

const useStyles = makeStyles(
  (theme) => ({
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      '& $loginOrRegisterContainer': {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        padding: theme.spacing(3),
        '& $loginOrRegister': {
          padding: theme.spacing(5),
          flex: '0 1 auto'
        },
        '& $loginScreenIcons': {
          padding: theme.spacing(0.5)
        },
        '& strong': {
          fontSize: '2em',
          boxShadow: `4px 4px 1px 1px ${theme.palette.primary.main}`,
          [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(0, 18, 1, 0)
          }
        }
      }
    },
    loginOrRegister: {},
    loginOrRegisterContainer: {},
    loginScreenIcons: {},
    appInnerContainer: {
      marginBottom: theme.spacing(8)
    },
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
      [theme.breakpoints.between('md', 'lg')]: {
        marginLeft: theme.spacing(40)
      },
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
    forms: {
      '& div': {
        marginBottom: theme.spacing(1)
      }
    },
    centerBlogForm: {
      '& div': {
        display: 'block',
      },
      '& button': {
        display: 'block',
        margin: 'auto'
      },
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
      marginBottom: '3%',
      '& $secondaryActionBtn': {}
    },
    secondaryActionBtn: {
      color: theme.palette.secondary.dark
    },
    footer: {
      backgroundColor: theme.palette.primary.light,
      marginTop: 'auto',
      '& $footerSiteMap': {
        color: theme.palette.text.primary
      }
    },
    footerSiteMap: {},
    footerGridItems: {
      padding: theme.spacing(5)
    },
    footerCopyrightContainer: {
      paddingBottom: theme.spacing(1.3)
    },
    footerCopyrightInnerContainer: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0.8)
    },
    footerCopyrightText: {
      textAlign: 'center'
    },
    footerPrivacyPolicy: {
      color: theme.palette.primary.dark,
      marginLeft: theme.spacing(1)
    },
    footerMediaContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.background.paper
    },
    footerMediaInnerContainer: {
      flex: '0 3 auto'
    },
    footerMediaIcons: {
      marginRight: theme.spacing(2)
    },
    footerDeveloperInfo: {
      flex: '0 3 auto'
    },
    secondary: {}
  }),
  // this fixes a bug that occurs durring pdt/deployment build by webpack; indexing conflict in the mui classess;
  { index: 1 }
);

export default useStyles;
