import React from "react";
import '../Packs/Pack.css';
import bgshow from '../../images/bgshow.png'
import bgpremiumpack from '../../images/bgpremiumpack.png'
import pack2premiumpackrare from '../../images/pack2premiumpackrare.png'
import pack2hustle from '../../images/pack2hustle.png'
import soldoutsticker from '../../images/soldoutsticker.svg'
import Header from '../Header'
import Footer from '../Footer'
import Grid from '@material-ui/core/Grid';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';


export default function Packs() {

  return (
      <div>
        <Header/>
            <div className='packs-tittle'>
                <span>P</span>ACKS
            </div>
            <div style={{marginTop:'3rem'}}>
            <div className='bgshowmain'>
                <Grid container spacing={0}>
                <Grid item xs={10} sm={8}>
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
            <div className='Open-packs-main'>
                <div className='Open-packs'>
                    OPEN PACKS TO FIND EXCITING NEW MOMENTS
                </div>
                <div className='packs-grid'>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={4}>
                            <div>
                                <div className='question'>
                                    When do new drops happen?
                                </div>
                                <div className='answer'>
                                    During our Beta, drop times will vary, so make sure you watch for announcements
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div>
                                <div className='question'>
                                    Where are drop announcements?
                                </div>
                                <div className='answer'>
                                    <span>Sign up via email</span> or follow Top Shot on social to never miss a drop
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div>
                                <div className='question'>
                                    What about <span>sold out</span> packs?
                                </div>
                                <div className='answer'>
                                    You can still snag Moments from the packs <span>in the Marketplace</span> from other collectors
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='packs-offer-main'>
                <div className='packs-offer-tittle'>
                    FEATURED PACKS
                </div>
                <div>
                <Grid container spacing={0}>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div>
                <div className='packs-offer-tittle'>
                    PREVIOUS PACKS
                </div>
                <div className='packs-offer-subtittle'>
                    These packs have been flying off the shelves. But, don’t worry, you can start hunting for specific Moments on the marketplace now!
                </div>
                <div>
                <Grid container spacing={0}>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div>
                                <div className='packs-offer'>
                                        <div className='premiumpack'>
                                            <img src={pack2hustle} />
                                        </div>
                                    <div className='premiumpacksoldout'>
                                        <img src={soldoutsticker} />
                                    </div>
                                </div>
                                <div className='REGISTRATION-main'>
                                    <div className='REGISTRATION'>
                                        PRE-REGISTRATION: Base Set
                                    </div>
                                    <div className='series'>
                                        Series 2 | Release 32
                                    </div>
                                    <div className='cost'>
                                        USD $9.00
                                    </div>
                                    <div className='solded'>
                                        300000 sold out
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='view-more' >
                    VIEW MORE
                </div>
            </div>
        <Footer/>
    </div>
  );
}

