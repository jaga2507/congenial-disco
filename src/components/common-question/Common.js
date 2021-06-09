import React from "react";
import '../common-question/Common.css';
import Header from '../Header'
import Footer from '../Footer'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';  
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import mavericks from '../../images/mavericks.svg'
import CheckIcon from '@material-ui/icons/Check';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import playblack from '../../images/playBlack.jpg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    color:'white',
  },
  button:{
    backgroundColor:'rgb(50, 94, 255)',
    color:'white',
    width:'95%',
    height:'3.5rem',
    marginTop:'.5rem',
    '&:hover': {
      background: "rgb(50, 94, 255)",
   },
  },
  loadmore:{
    backgroundColor:'none',
    color:'white',
    width:'20ch',
    height:'3rem',
    marginTop:'.5rem',
    border:'1px solid white',
  }
}));  

export default function Community() {

  const classes = useStyles();

  return (
      <div>
        <Header/>
          <div className='packs-tittle'>
              <span>C</span>OMMON
          </div>
          <h4 style={{color:'gray',margin:'1rem 3rem'}}>
            A challenge is the best way to earn exclusive Moment collectible rewards. Complete a challenge by collecting and holding every Moment until the timer expires. Let's go! [Note: Maximum one reward from this challenge per collector]
          </h4>
          <div style={{
            border:'.5px solid gray',
            margin:'0 3rem 1rem 3rem'
          }}>
          </div>
          <div>
            <div style={{color:'gray',width:'fit-content',margin:'1rem 3rem',paddingBottom:'7px',borderBottom:'2px solid blue'}}>
              AVAILABLE
            </div>
          </div>
            <div className='timer'>
              05:28:34:20
            </div>
          <div className='AVAILABLE-card'>
            <div style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>
              Throwdowns S2 Challenge 4
            </div>
            <div style={{color:'white',fontSize:'17px',paddingTop:'10px'}}>
              Collect 9 Moments to get this reward
            </div>
            <div style={{backgroundColor:'black',height:'15rem',marginTop:'1rem'}}>
              <img style={{width:'160px',marginTop:'2rem',marginLeft:'27%'}} className='playbackstyle' src={playblack} />
            </div>
            <div style={{display:'flex',marginTop:'2rem'}}>
              <div style={{width:'90%',height:'10px',backgroundColor:'gray'}}>
              </div>
              <div style={{fontWeight:'bold',fontSize:'20px',color:'gray',marginTop:'-6px',marginLeft:'6px'}}>
                0/9
              </div>
            </div>
            <div style={{float:'right',marginTop:'1rem'}} >
              <ArrowForwardIosIcon style={{color:'white'}} />
            </div>
          </div>
        <Footer/>
    </div>
  );
}



