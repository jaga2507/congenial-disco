import React from "react";
import './Register.css';
import LoginTopShotlogo from '../../images/LoginTopShotlogo.png'
import download from '../../images/download.png'
import search from '../../images/search.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles((theme) => ({
  }));

export default function Login() {
    const classes = useStyles();

  return (
    <div className='login-card-main1'>
        <div className='login-card1'>
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
                Create Dapper account
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
            <div className='Email-login'>
                <Button>
                    <div className='Email-icon'>
                        <span>
                            <EmailIcon />
                        </span>
                        <div>
                            Sign up using Email
                        </div>
                    </div>
                </Button>
            </div>
            <Link to="/Login" className='forgotpass Link'>
                Already have an account? Sign in
            </Link>
            <div className='content'>
                By signing up for Dapper, you acknowledge that you have read and agree to all applicable <span>Terms of Service</span> and our <span>Privacy Policy</span>
            </div>
        </div>
        <div className='text'>
            What is Dapper and why do I need it?
        </div>
    </div>
  );
}

