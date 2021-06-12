import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to bottom, #f1fefe, rgba(241,254,254,0))",
  },
  container: {
    alignItems: "center",
    paddingTop: theme.spacing(16),
    '& h3': {
      fontWeight: 'bold'
    }
  },
  btn: {
    padding: "14px 64px 16px 48px",
    borderRadius: "10px",
    color: '#fff',
    marginTop: theme.spacing(3)
  },
  imgContainer: {
    position: 'relative',
    zIndex: '1',
    '& .flower': {
      display: 'block',
      width: '80%'
    }
  },
  flower2: {
    padding: theme.spacing(3),
    position: 'absolute',
    top: '0px',
    right: '0px',
    background: '#fff',
    zIndex: '-1',
    '& img': {
      width: '250px',
      padding: '65px',
      border: `solid 3px ${theme.palette.primary.main}`
    }
  }
}));