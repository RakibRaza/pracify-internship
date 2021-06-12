import { makeStyles } from "@material-ui/core";
import backgroundImage from '../../asset/footer-bg.png'

export const useStyles = makeStyles((theme) => ({
  footer: {
    background: `url(${backgroundImage}) no-repeat`,
    padding: theme.spacing(17, 0, 7),
    backgroundSize: 'cover',
    color: '#fff',
    '& a': {
      color: '#fff',
      display: 'block',
      textDecoration: 'none',
      marginTop: theme.spacing(3),
      fontSize: '14px',
    },
  },
  underline: {
    width: '80px',
    height: '3px',
    background: theme.palette.primary.main,
    margin: theme.spacing(1, 0)
  },
  icon: {
    '& > *': {
      color: theme.palette.secondary.main,
      background: '#fff',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      padding: '3px',
      cursor: 'pointer'
    }
  }
}));