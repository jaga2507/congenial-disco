import React from "react";
import './TopShot.css';
import ana from '../../images/ana.jpeg'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import louie from '../../images/louie.png'
import packBG from '../../images/packsBG.png'
import bgshow from '../../images/bgshow.png'
import bannerbg from '../../images/bannerbg.png'
import Rarepacks from '../../images/Rarepacks.png'
import bgpremiumpack from '../../images/bgpremiumpack.png'
import pack2premiumpackrare from '../../images/pack2premiumpackrare.png'
import TopShotWord from '../../images/topshot-word.png'
import discoveryblockbg from '../../images/discoveryblockbg.png'
import Mobilegame from '../../images/MobileGame.png'
import pack2hustle from '../../images/pack2hustle.png'
import playblack from '../../images/playBlack.jpg'
import derrickrosebw from '../../images/derrick-rose-bw.jpg'
import mavericks from '../../images/mavericks.svg'
import spotlightchevron from '../../images/spotlight-chevron.svg'
import spotlightstripes from '../../images/spotlight-stripes.svg'
import spotlightdashed from '../../images/spotlight-dashed.svg'
import soldoutsticker from '../../images/soldoutsticker.svg'
import spotlightorange from '../../images/spotlight-orange.svg'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import herromomentsh from '../../images/herro-momentsh.mp4'
import CheckIcon from '@material-ui/icons/Check';
import Header from '../Header'
import Footer from '../Footer'
import Grid from '@material-ui/core/Grid';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import Button from '@material-ui/core/Button';


export default function TopShotPage() {

  return (
    <div className='topshot-main'>
      <Header/>
      <div className='topshot-bg-img'>
          <img src={bannerbg} />
      </div>
      <div>
          <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                  <div>
                    <div className='grid-content'>
                      <div className='content-tittle'>
                        MOMENTS FROM NBA HISTORY
                      </div>
                      <div className='content'>
                        Thousands of NBA Fans from around the world collecting over 7.6 million Top Shot Moments. Start building your roster of Rookies, Vets, and Rising Star Players.
                      </div>
                    </div>
                    <div className='Button-event'>
                      <Button>
                        Start your collection
                      </Button>
                    </div>
                    <div>
                      <div className='profiles'>
                        <div>
                          <img src={ana} />
                        </div>
                        <div>
                          <img src={louie} />
                        </div>
                        <div>
                          <img src={ana} />
                        </div>
                        <div>
                          <img src={louie} />
                        </div>
                      </div>
                    </div>
                    <div className='joined-fans'>
                      340,000+ NBA FANS HAVE JOINED TOP SHOT
                    </div>
                  </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <div>
                    <div className='grid-video'>
                      <video  autoplay playsinline loop className='video-player' controls>
                        <source src={herromomentsh} />
                      </video>
                    </div>
                  </div>
              </Grid>
          </Grid>
      </div>
      <div className='importent-table'>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={3}>
          <div className='first-item'>
              <div className='item-hover'>
                <div className='item-tittle'>
                  Grab & OPen
                </div>
                <div className='item-name'>
                  PACKS
                </div>
                <div>
                  <img src={Rarepacks} alt="" class="AboutTopShot__StyledImage-sc-7mj2m4-7 kDnmKH" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
          <div className='first-item'>
              <div className='item-hover'>
                <div className='item-tittle'>
                  Grab & OPen
                </div>
                <div className='item-name'>
                  PACKS
                </div>
                <div>
                  <img src={Rarepacks} alt="" class="AboutTopShot__StyledImage-sc-7mj2m4-7 kDnmKH" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
          <div className='first-item'>
              <div className='item-hover'>
                <div className='item-tittle'>
                  Grab & OPen
                </div>
                <div className='item-name'>
                  PACKS
                </div>
                <div>
                  <img src={Rarepacks} alt="" class="AboutTopShot__StyledImage-sc-7mj2m4-7 kDnmKH" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='table-background'>
        <div className='select-text'>
          SELECT AND FOLLOW YOUR FAVORITE TEAM
        </div>
        <div>
          <div className='select-tittle'>
            WESTERN CONFERENCE
          </div>
          <div>
          <div className='western-teams'>
              <img src={mavericks} />
            </div>
          </div>
        </div>
        <div className='select-tittle'>
          EASTERN CONFERENCE
        </div>
          <div>
            <div className='western-teams'>
              <img src={mavericks} />
            </div>
          </div>
      </div>
      <div className='packBGmain'>
        <div className='packBG'>
          <img src={packBG} />
        </div>
        <div>
          <div className='packsBGtittle'>
            HOW TO GET THE GOODS
          </div>
          <div className='packsBGsubtittle'>
          Supercharge your collection by buying packs of NBA Top Shot Moments. Grab a pack and secure this season's most coveted plays first.
          </div>
          <div className='Seeallpacks'>
            See All Packs
          </div>
        </div>
      <div className='bgshowmain'>
        <Grid container spacing={0}>
          <Grid className='tagbgshow' item xs={10} sm={8}>
            <div className='bgshow'>
              <div className='bgshowinner'>
                <div>
                  <div className='bgshowcont'>
                    NEXT DROP
                  </div>
                  <div className='bgshowtiming'>
                    <div className='Alarm'>
                      <AccessAlarmsIcon/>
                    </div>
                    11:00 AM PDT, Mon, May 3
                  </div>
                </div>
              </div>
              <Grid container spacing={0}>
                <Grid item xs={7} sm={7}>
                    <div className='bgshowtittle'>
                      HUSTLE AND SHOW (DROP 1)
                    </div>
                    <div className='bgshowsubtittle'>
                      Common | Contains 5 Moments | Price: $14
                    </div>
                </Grid>
                <Grid item xs={5} sm={5}>
                  <div className='jfhUHz'>
                    <img src={pack2hustle} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className='main-premiumpacks'>
              <div className='premiumpackmain'>
                <div className='premiumpack'>
                  <img src={pack2premiumpackrare} />
                </div>
                <div className='premiumpacksoldout'>
                  <img src={soldoutsticker} />
                </div>
              </div>
              <div className='premiumpacktittlemain'>
                <div className='premiumpacktittle'>
                  PREMIUM PACK (DROP 2)
                </div>
                <div className='premiumpacksubtittle'>
                  Rare | Contains 6 Moments | Series 2 | Price: $99
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      </div>
      <div style={{marginTop:'6rem'}}>
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
        <div>
      </div>
      <div>
        <div className='heromain'>
          <div className='spotlightstripes'>
            <img src={spotlightstripes} />
          </div>
          <div className='derrickrosebw'>
            <img src={derrickrosebw} />
          </div>
          <div className='spotlightorange'>
            <img src={spotlightorange} />
          </div>
          <div className='spotlightchevron'>
            <img src={spotlightchevron} />
          </div>
          <div className='moment-main'>
            <div>
              <div className='western-teams'>
                <img src={mavericks} />
              </div>
            </div>
            <div className='moment'>
            🔥  Moment
            </div>
            <div className='JAMES'>
            JAMES HARDEN
            </div>
            <div className='holo'>
              <span>
                <StarOutlineIcon/>
              </span>
              HOLO MMXX
            </div>
            <div className='Rockets'>
              <Button>Rep the Rockets</Button>
            </div>
          </div>
          <div className='playblack'>
            <img src={playblack} />
          </div>
          <div className='spotlightdashed'>
            <img src={spotlightdashed} />
          </div>
        </div>
      </div>
      <div className='topShotwordmain'>
        <div className='TopShotWord'>
          <img src={TopShotWord} />
        </div>
        <div className='TopShotcont'>
          <div className='POPULAR-SHOWCASES'>
            POPULAR SHOWCASES
          </div>
          <div className='watch-more'>
            WATCH MORE
          </div>
          <div className='comment'>
            Community showcases with the most likes! Top Shot players flexing their serious collection and hoops knowledge.
          </div>
        </div>
        <div className='topshotcardmain'>
          <div className='topshotcard'>
            <div className='card-video'>
              <video  autoplay playsinline loop className='video-player' controls>
                <source src={herromomentsh} />
              </video>
            </div>
            <div className='Beebs'>
            Beebs' Ballers
            </div>
              <div className='Rate'>
                10.1k
                <span>
                  <WhatshotIcon/>
                </span>
              </div>
            <div style={{display:'flex',marginTop:'1rem',zoom:'0.8'}}>
              <div className='western-teams'>
                <img src={mavericks} />
              </div>
              <div>
                <div className='createdby'>
                  CREATED BY
                </div>
                <div className='createdby-name'>
                  JAGADEESH
                </div>
              </div>
            </div>
          </div>
          <div className='topshotcard'>
            <div className='card-video'>
              <video  autoplay playsinline loop className='video-player' controls>
                <source src={herromomentsh} />
              </video>
            </div>
            <div className='Beebs'>
            Beebs' Ballers
            </div>
              <div className='Rate'>
                10.1k
                <span>
                  <WhatshotIcon/>
                </span>
              </div>
            <div style={{display:'flex',marginTop:'1rem',zoom:'0.8'}}>
              <div className='western-teams'>
                <img src={mavericks} />
              </div>
              <div>
                <div className='createdby'>
                  CREATED BY
                </div>
                <div className='createdby-name'>
                  JAGADEESH
                </div>
              </div>
            </div>
          </div>
          <div className='topshotcard'>
            <div className='card-video'>
              <video  autoplay playsinline loop className='video-player' controls>
                <source src={herromomentsh} />
              </video>
            </div>
            <div className='Beebs'>
            Beebs' Ballers
            </div>
              <div className='Rate'>
                10.1k
                <span>
                  <WhatshotIcon/>
                </span>
              </div>
            <div style={{display:'flex',marginTop:'1rem',zoom:'0.8'}}>
              <div className='western-teams'>
                <img src={mavericks} />
              </div>
              <div>
                <div className='createdby'>
                  CREATED BY
                </div>
                <div className='createdby-name'>
                  JAGADEESH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='buttom'>
        <div className='discoveryblockbg'>
          <img src={discoveryblockbg} />
        </div>
        <div className='Mobilegame'>
          <img src={Mobilegame} />
        </div>
        <div className='buttom-cont-main'>
          <div className='buttom-comming-soon'>
            COMMING SOON
          </div>
          <div className='HARDCOURT'>
            <span style={{textDecoration:'underline'}}>H</span>ARDCOURT
          </div>
          <div className='subcont'>
            Give your starting five superpowers by equipping them with epic skills from your collection of Top Shot Moments.
          </div>
          <div className='Rockets'>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div className='sign-up-now'>
        <div className='signupreason'>
          Get off the bench and start collecting the NBA's most show-stopping Moments
        </div>
        <div className='Rockets'>
          <Button>SIGN UP NOW</Button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

