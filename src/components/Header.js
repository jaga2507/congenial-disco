import React from "react";
import './main.css';
import Grid from '@material-ui/core/Grid';
import topshot from '../images/topshot.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Headre() {

  return (
    <div className='home-main'>
        <div className='tab-main'>
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <div className='tab-img'>
                            <Link to="/">
                                <img src={topshot} />
                            </Link>
                            <div className='span'>
                                BETA
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <div className='tab-buttons'>
                            <Link className='tab-buttons-Link' to="/packs">
                                PACKS
                            </Link>    
                            <Link className='tab-buttons-Link' to="/marketplace">
                                MARKETPLACE
                            </Link>
                            <Link className='tab-buttons-Link' to="/community">
                                COMMUNITY
                            </Link>
                            <Link className='tab-buttons-Link' to="/common">
                                COMMON QUESTIONS
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className='login-main'>
                            <Link className='tab-buttons login' to="/login">
                                LOGIN
                            </Link>
                            <Link to="/Register" className='sign-up'>
                                SIGN UP
                            </Link>
                            <div className='get-in'>
                                GET IN
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
  );
}

