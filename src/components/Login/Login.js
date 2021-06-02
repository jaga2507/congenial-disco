import React from "react";
import './Login.css';
import LoginTopShotlogo from '../../images/LoginTopShotlogo.png'
import download from '../../images/download.png'
import search from '../../images/search.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '44ch',
      },
      display: 'flex',
      flexWrap: 'wrap',
    },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '43ch',
        marginLeft:'10px',
        marginTop:'10px',
        marginBottom:'1rem',
      },
  }));

  function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose}  aria-labelledby="simple-dialog-title" open={open}>
        <div className='Dialog'>
            <DialogTitle  id="simple-dialog-title">Forgot your password?</DialogTitle>
            <div className='line'>
            </div>
            <div className='text-content'>
                Please enter the email you used to sign up for Dapper.
            </div>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </form>
            </div>
            <div className='sign-Button reset-email'>
                <Button>
                    Send password reset email
                </Button>
            </div>
            <Link to="/Login" className='forgotpass'>
                Never mind
            </Link>
        </div>
      </Dialog>
    );
  }
  

export default function Login() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const [open, setOpen] = React.useState(false);
      const [selectedValue, setSelectedValue] = React.useState();
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
      };
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (
    <div className='login-card-main'>
        <div className='login-card'>
          <div>
            <Link to="/">
              <KeyboardBackspaceIcon/>
            </Link>
          </div>
            <div className='logos'>
                <img src={LoginTopShotlogo} />
                <img src={download} />
            </div>
            <div className='sign-tittle'>
                Sign in to Dapper
            </div>
            <div className='sign-for'>
                for NBA Top Shot
            </div>
            <div className='google-login'>
                <Button>
                    <div className='google-icon'>
                        <img src={search} />
                        <div>
                            Continue with Google
                        </div>
                    </div>
                </Button>
            </div>
            <div className='or'>
                ~~~~~~~~~~~~~~~~~~~~~Or~~~~~~~~~~~~~~~~~~~~
            </div>
            <div>
                <div>
                    Email
                </div>
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" variant="outlined" />
                    </form>
                </div>
            </div>
            <div style={{marginTop:'1rem'}}>
                <div>
                    Password
                </div>
                <div>
                    <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                        <OutlinedInput
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            />
                    </FormControl>
                </div>
            </div>
            <div>
                <Link className='forgotpass' color="primary" onClick={handleClickOpen}>
                    Open simple dialog
                </Link>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </div>
            <div className='sign-Button'>
                <Button>
                    Sign Up
                </Button>
            </div>
            <Link to="/Register" className='forgotpass'>
                Don’t have an account? Register here
            </Link>
        </div>
        <div className='text'>
            What is Dapper and why do I need it?
        </div>
    </div>
  );
}

