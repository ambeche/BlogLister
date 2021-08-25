import { makeStyles } from '@material-ui/core';

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
  appName: {
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(1.5),
    marginTop: theme.spacing(1.5),
    textDecoration: 'none'
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
      display: 'none',
    },
    padding: theme.spacing(1),
    '& button': {
      marginLeft: theme.spacing(4)
    }
  },
  listItemPrimary: {
    maxWidth: theme.spacing(35)
  }
}));

export default useStyles;
