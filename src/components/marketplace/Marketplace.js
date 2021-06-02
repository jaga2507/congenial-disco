import React from "react";
import '../marketplace/Marketplace.css'
import Header from '../Header'
import Footer from '../Footer'
import bannerbg from '../../images/bannerbg.png'
import game from '../../images/2021game.png'
import listingsimg2 from '../../images/listingsimg2.png'
import magic from '../../images/magic.svg'
import stars from '../../images/stars.svg'
import arrows from '../../images/arrows.svg'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import diagonal from '../../images/diagonal_lines.svg'
import playBlack from '../../images/playBlack.jpg'
import derrickrosebw from '../../images/derrick-rose-bw.jpg'
import common from '../../images/common.svg'
import { TitleOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75ch',
      marginTop:'1rem',
      marginBottom:'2rem'
    },
    color:'white',
  },
}));

export default function Marketplace() {
  const classes = useStyles();
  const list = [
      {
        title: 'Appointments',
        count:'34',
        content:'SF'
      },
      {
        title: 'Appointments',
        count:'34',
        content:'SF'
      },
      {
        title: 'Appointments',
        count:'34',
        content:'SF'
      },
      {
        title: 'Appointments',
        count:'34',
        content:'SF'
      }
  ]

  return (
      <div>
        <Header/>
            <div className='market-main'>
              <div className='market-bg-img'>
                  <img src={bannerbg} />
              </div>
              <div className='market-bg-star'>
                <div>
                  <img src={stars} />
                </div>
                <div className='market-tittle'>
                  EXPLORE THE MARKETPLACE
                </div>
                <div className='market-autocom'>
                  <form className={classes.root} >
                    <TextField
                      className='TextField'
                      placeholder="Search by players, teams, and sets"
                      variant="outlined"
                      color="red"
                    />
                  </form>
                </div>
                <div className='market-look'>
                  <div className='flow'>
                    <div className='arrow'>
                      <img src={arrows} />
                    </div>
                    <div className='text'>
                      WHAT ARE YOU LOOKING FOR?
                    </div>
                    <div className='transform'>
                      <img src={arrows} />
                    </div>
                  </div>
                  <div className='market-card-main'>
                    <div>
                      <div className='market-card'>
                        <img src={game} />
                      </div>
                      <div className='name-of-card'>
                        Latest Moments
                      </div>
                    </div>
                    <div>
                      <div className='market-card'>
                        <img src={listingsimg2} />
                      </div>
                      <div className='name-of-card'>
                        Most Valuable Listings
                      </div>
                    </div>
                    <div>
                      <div className='magic-main'>
                        <div className='magic-bg'>
                          <img src={magic} />
                        </div>
                        <div className='magic'>
                          <img src={magic} />
                        </div>
                      </div>
                      <div className='name-of-card'>
                        warriors Moments
                      </div>
                    </div>
                  </div>
                </div>
                <div className='latest-sales'>
                  <div className='diagonal'>
                    <img src={diagonal} />
                  </div>
                  <div className='latest-text'>
                    LATEST SALES
                  </div>
                  <div className='latest-card-main'>
                    <div className='latest-card'>
                      <div>
                        <img src={playBlack} />
                      </div>
                      <div>
                        <div>
                          <div className='latest-tit'>
                            Myles Turner
                          </div>
                          <div className='latest-date'>
                            Block - Jan 22 2021, Base Set (Series 2), IND
                          </div>
                          <div className='latest-common'>
                            Common <span>#33292/35000+</span> <span className='cc'>CC</span>
                          </div>
                        </div>
                        <div className='latest-detials'>
                          <div className='cost'>
                            $2.00
                          </div>
                          <div className='line'>
                          </div>
                          <div className='latest-purchase'>
                            <div>
                              Purchased By
                            </div>
                            <div>
                              @Rujokin1975
                            </div>
                            <div>
                              about 3 hours ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='latest-card'>
                      <div>
                        <img src={playBlack} />
                      </div>
                      <div>
                        <div>
                          <div className='latest-tit'>
                            Myles Turner
                          </div>
                          <div className='latest-date'>
                            Block - Jan 22 2021, Base Set (Series 2), IND
                          </div>
                          <div className='latest-common'>
                            Common <span>#33292/35000+</span> <span className='cc'>CC</span>
                          </div>
                        </div>
                        <div className='latest-detials'>
                          <div className='cost'>
                            $2.00
                          </div>
                          <div className='line'>
                          </div>
                          <div className='latest-purchase'>
                            <div>
                              Purchased By
                            </div>
                            <div>
                              @Rujokin1975
                            </div>
                            <div>
                              about 3 hours ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='latest-card'>
                    <div>
                        <img src={playBlack} />
                      </div>
                      <div>
                        <div>
                          <div className='latest-tit'>
                            Myles Turner
                          </div>
                          <div className='latest-date'>
                            Block - Jan 22 2021, Base Set (Series 2), IND
                          </div>
                          <div className='latest-common'>
                            Common <span>#33292/35000+</span> <span className='cc'>CC</span>
                          </div>
                        </div>
                        <div className='latest-detials'>
                          <div className='cost'>
                            $2.00
                          </div>
                          <div className='line'>
                          </div>
                          <div className='latest-purchase'>
                            <div>
                              Purchased By
                            </div>
                            <div>
                              @Rujokin1975
                            </div>
                            <div>
                              about 3 hours ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='latest-tittle'>
                    <span>S</span>EARCH BY TIER
                  </div>
                  <div className='market-card-main'>
                    <div className='latest-search-card'>
                      <div>
                        <img src={playBlack} />
                      </div>
                      <div>
                        <div className='com'>
                          <img src={common} />
                          <div className='com-text'>
                          Common Tier
                          </div>
                        </div>
                        <hr className='hr'/>
                        <div className='edit'>
                          Edition Size
                        </div>
                        <div className='latest-count'>
                        10,000+
                        </div>
                        <div className='edit'>
                          min
                        </div>
                      </div>
                    </div>
                    <div className='latest-search-card'>
                      <div>
                        <img src={playBlack} />
                      </div>
                      <div>
                        <div className='com'>
                          <img src={common} />
                          <div className='com-text'>
                          Common Tier
                          </div>
                        </div>
                        <hr className='hr'/>
                        <div className='edit'>
                          Edition Size
                        </div>
                        <div className='latest-count'>
                        10,000+
                        </div>
                        <div className='edit'>
                          min
                        </div>
                      </div>
                    </div>
                    <div className='latest-search-card'>
                      <div>
                        <img src={playBlack} />
                      </div>
                      <div>
                        <div className='com'>
                          <img src={common} />
                          <div className='com-text'>
                          Common Tier
                          </div>
                        </div>
                        <hr className='hr'/>
                        <div className='edit'>
                          Edition Size
                        </div>
                        <div className='latest-count'>
                        10,000+
                        </div>
                        <div className='edit'>
                          min
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='market-look set-look'>
                    <div className='latest-tittle set'>
                      <span>S</span>EARCH BY SET
                    </div>
                    <div className='latest-sub-tittle'>
                      Scour the marketplace to find all the big-time Moments needed to complete Top Shot collector sets
                    </div>
                    <div className='set-game-main'>
                      <div>
                        <div className='set-game'>
                          <img src={game} />
                        </div>
                        <div className='set-name-of-card'>
                          Western Conference Finals
                        </div>
                        <div className='set-sub-name-of-card'>
                          10 RARE MOMENTS
                        </div>
                      </div>
                      <div>
                        <div className='set-game'>
                          <img src={game} />
                        </div>
                        <div className='set-name-of-card'>
                          Western Conference Finals
                        </div>
                        <div className='set-sub-name-of-card'>
                          10 RARE MOMENTS
                        </div>
                      </div>
                      <div>
                        <div className='set-game'>
                          <img src={game} />
                        </div>
                        <div className='set-name-of-card'>
                          Western Conference Finals
                        </div>
                        <div className='set-sub-name-of-card'>
                          10 RARE MOMENTS
                        </div>
                      </div>
                      <div>
                        <div className='set-game'>
                          <img src={game} />
                        </div>
                        <div className='set-name-of-card'>
                          Western Conference Finals
                        </div>
                        <div className='set-sub-name-of-card'>
                          10 RARE MOMENTS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='latest-tittle '>
                    <span>S</span>EARCH BY PLAYER
                  </div>
                  <div className='setcardflex'>
                    {list.map((item, i) => (
                      <div className='set-card-pos-main'>
                          <div className='set-pos'>
                            <img src={derrickrosebw} />
                            <div className='set-card-pos'>
                              <div className='set-count'>
                                {item.count}
                              </div>
                              <div className='set-counter'>
                                {item.content}
                              </div>
                              <div className='set-card-name'>
                                {item.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
        <Footer/>
    </div>
  );
}
