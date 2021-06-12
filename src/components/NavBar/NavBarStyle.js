import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
  navBar: {
    background: 'none',
    boxShadow: 'none'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& h4': {
      fontWeight: 'bold'
    }
  },
  link: {
    '& > *': {
      margin: theme.spacing(0, 3),
      borderRadius: '0px',
      '&:hover': {
        background: 'none',
      }
    },
    '& .active': {
      borderBottom: `solid 2px ${theme.palette.primary.main};`
    }
  },
  btn: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1, 4),
    borderRadius: '10px'
  }
}));