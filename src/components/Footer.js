import React from "react";
import './main.css';
import NBAlogo from '../images/NBA_logo.svg'
import NBPAlogo from '../images/NBPA_logo.svg'
import Grid from '@material-ui/core/Grid';

export default function Footer() {

  return (
    <div className='Footer-main'>
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <div className='footermain'>
                        <div>
                        © 2021 Dapper Labs, Inc.
                        </div>
                        <div>
                        © 2021 NBA Properties, Inc. All Rights Reserved.
                        </div>
                        <div>
                        Officially licensed product of the National Basketball Players Association. <span>Do Not Sell My Personal Information.</span>
                        </div>
                        <div>
                        This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{marginTop:'.5rem'}}>
                        <div className='logos-footer'>
                            <div style={{cursor:'pointer'}}>
                                <img src={NBAlogo} />
                            </div>
                            <div style={{cursor:'pointer'}}>
                                <img src={NBPAlogo} />
                            </div>
                        </div>
                        <div className='footermain-right'>
                            <div style={{cursor:'pointer'}}>
                                Status
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Help
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Press
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Blog
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Newsletter
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Discord
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Twitter
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Instagram
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Terms
                            </div>
                            <div style={{cursor:'pointer'}}>
                                Privacy
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}

