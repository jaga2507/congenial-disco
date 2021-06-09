import React from "react";
import '../community/Community.css';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
      width: '95%',
    },
    color:'white',
  },
  button:{
    backgroundColor:'rgb(50, 94, 255)',
    color:'white',
    width:'95%',
    height:'3.5rem',
    marginTop:'.5rem',
    marginLeft:'7px',
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
              <span>FI</span>ND A COLLECTOR
          </div>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <form className={classes.root} >
                  <TextField
                    className='TextField'
                    placeholder="Search by Topshot username"
                    variant="outlined"
                    color="red"
                  />
                </form>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div>
                  <Button className={classes.button}>
                    SEARCH
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{marginTop:'3rem'}}>
            <div className='bOCkKA'>
              CERTIFIED BALLERS
            </div>
            <div className='bOCkKA-profiles'>
              <div className='profiles-img'>
                <img src={mavericks} />
                <div className='profiles-name'>
                  scaryterry3
                  <span className='profiles-namecheck'><CheckIcon/></span>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:'3rem'}}>
            <div className='bOCkKA'>
              NBA TOPSHOT COLLECTORS
            </div>
            <div style={{width:'90%',backgroundColor:'rgb(13, 13, 15)',margin:'auto',minHeight:'2rem',marginTop:'1rem'}}>
              <div className={classes.root}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6}>
                    <div className='bOCkKA' style={{marginBottom:'1rem'}}>
                      COLLECTOR
                    </div>
                    <div className='collector'>
                      <img src={mavericks} />
                      <div>
                        DUCK
                      </div>
                    </div>
                    <div className='collector'>
                      <img src={mavericks} />
                      <div>
                        DUCK
                      </div>
                    </div>
                    <div className='collector'>
                      <img src={mavericks} />
                      <div>
                        DUCK
                      </div>
                    </div>
                    <div className='collector'>
                      <img src={mavericks} />
                      <div>
                        DUCK
                      </div>
                    </div>
                    <div className='collector'>
                      <img src={mavericks} />
                      <div>
                        DUCK
                      </div>
                    </div>
                    <div className='collector'>
                      <img src={mavericks} />
                      <div>
                        DUCK
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className='bOCkKA' style={{marginBottom:'1rem'}}>
                      CONTACT
                    </div>
                    <div className='collector'>
                      <RedditIcon style={{zoom:'1.6',margin:'3.5px 0'}}/>
                      <TwitterIcon style={{zoom:'1.6',margin:'3.5px 0 3.5px 10px'}}/>
                    </div>
                    <div className='collector'>
                      <RedditIcon style={{zoom:'1.6',margin:'3.5px 0'}}/>
                      <TwitterIcon style={{zoom:'1.6',margin:'3.5px 0 3.5px 10px'}}/>
                    </div>
                    <div className='collector'>
                      <RedditIcon style={{zoom:'1.6',margin:'3.5px 0'}}/>
                      <TwitterIcon style={{zoom:'1.6',margin:'3.5px 0 3.5px 10px'}}/>
                    </div>
                    <div className='collector'>
                      <RedditIcon style={{zoom:'1.6',margin:'3.5px 0'}}/>
                      <TwitterIcon style={{zoom:'1.6',margin:'3.5px 0 3.5px 10px'}}/>
                    </div>
                    <div className='collector'>
                      <RedditIcon style={{zoom:'1.6',margin:'3.5px 0'}}/>
                      <TwitterIcon style={{zoom:'1.6',margin:'3.5px 0 3.5px 10px'}}/>
                    </div>
                    <div className='collector'>
                      <RedditIcon style={{zoom:'1.6',margin:'3.5px 0'}}/>
                      <TwitterIcon style={{zoom:'1.6',margin:'3.5px 0 3.5px 10px'}}/>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div style={{textAlign:'center',marginBottom:'1rem'}}>
            <Button className={classes.loadmore}>
              LOAD MORE
            </Button>
          </div>
        <Footer/>
    </div>
  );
}



