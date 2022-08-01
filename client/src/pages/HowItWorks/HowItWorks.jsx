import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AccordionBlock from '../../components/AccordionBlock/AccordionBlock';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
import styles from './HowItWorks.module.sass';


function HowItWorks() {
  const [isOn, setIsOn] = useState(false);


  return (
    <div className={styles.box}>
      <Header />
      <div className={styles.container_wrapper}>
        <div className={styles.container}>

          <div className={styles.header}>
            <div className={styles.header_info}>
              <span  className={styles.header_span}>World's #1 Naming Platform</span>
              <h1>How Does Squadhelp Work?</h1>
              <p>
                Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.
              </p>
              <button className={styles.video_button} onClick={() => setIsOn(true)}>
                <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}triangle.svg`} alt="play" /> 
                Play Video
              </button>
              <div className={ isOn ? styles.video_on : styles.video_off} >
                <div className={styles.video}>
                  <iframe
                    width="1120" height="630"  src="https://www.youtube.com/embed/25BkVBgFD9Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe >
                  <button onClick={() => setIsOn(false)}>X</button>
                </div>
              </div>
            </div>
            <div className={styles.header_img}>
              <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}img1.svg`} alt="img1" />
            </div>
          </div>

          <div className={styles.use_block}>
            <div className={styles.use_header}>
              <span className={styles.header_span}>Our services</span>
              <h2>3 Ways To Use Squadhelp</h2>
              <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
            </div>
            <div className={styles.use_content}>
              <div>
                <img className={styles.img_icon} src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}launch.svg`} alt="launch" />
                <h3>Launch a Contest</h3>
                <p>
                  Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.
                </p>
                <Link to="/startContest"><button className={styles.video_button}>Launch a Contest</button></Link>
              </div>
              <div>
                <img className={styles.img_icon} src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}explore.svg`} alt="explore" />
                <h3>Explore Names For Sale</h3>
                <p>
                  Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design
                </p>
                <Link to="/"><button className={styles.video_button}>Explore Names For Sale</button></Link>
              </div>
              <div>
                <img className={styles.img_icon} src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}agency.svg`} alt="agency" />
                <h3>Agency-level Managed Contests</h3>
                <p>
                  Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs
                </p>
                <Link to="/"><button className={styles.video_button}>Learn More</button></Link>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.naming_block}>
              <div className={styles.naming_header}>
                <img className={styles.img_icon} src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}prize.svg`} alt="prize" />
                <h2>How Do Naming Contests Work?</h2>
              </div>

              <div className={styles.naming_content}>
                <div className={styles.naming_img}>
                  <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}img2.svg`} alt="img2" />
                </div>

                <div className={styles.naming_schema}>
                  <ul>
                    <li>
                      <div>
                        <span>1.</span>
                        <p>Fill out your Naming Brief and begin receiving name ideas in minutes</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>2.</span>
                        <p>Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>3.</span>
                        <p>Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>4.</span>
                        <p>Pick a Winner. The winner gets paid for their submission.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <AccordionBlock />

        <div className={styles.blue_block}>
          <div>
            <h3>Ready to get started?</h3>
            <p>Fill out your contest brief and begin receiving custom name suggestions within minutes.</p>
            <Link to="/startcontest"><button className={styles.button}>Start A Contest</button></Link>
          </div>
          <img className={styles.blue_block_img1} src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}blueline1.svg`} alt="blueline1" />
          <img className={styles.blue_block_img2} src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}blueline2.svg`} alt="blueline2" />
        </div>
      
        <div className={styles.info_wrapper}>
          <div className={styles.info_block}>
            <div className={styles.info_line}>
              <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}stars.svg`} alt="stars" />
              <p> <span>4.9 out of 5</span> stars from 25,000+ customers.</p>
            </div>
            <div className={styles.info_line}>
              <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}people.png`} alt="people" />
              <p>Our branding community stands <span>200,000+</span> strong.</p>
            </div>
            <div>
              <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}sharing-files.svg`} alt="files" />
              <p><span>140+ Industries</span> supported across more than <span>85 countries</span> – and counting.</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.contact}>
            
            <div className={styles.offer}>
              <div className={styles.offer_info}>
                <div className={styles.offer_info_block_1}>
                  <div className={styles.offer_img}>
                    <div><span className={styles.offer_img_div}></span></div>
                  </div>
                  <div>
                    <h4>Pay a Fraction of cost vs hiring an agency</h4>
                    <p>For as low as $199, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                    </p>
                  </div>
                </div>

                <div className={styles.offer_info_block_2}>
                  <div className={styles.offer_img}>
                    <div><span className={styles.offer_img_div}></span></div>
                  </div>
                  <div>
                    <h4>Satisfaction Guarantee</h4>
                    <p>
                    Of course! We have policies in place to ensure that you are satisfied with your experience. <a href="/">Learn more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.questions}>
              <h4>Questions?</h4>
              <p>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
              <button className={styles.button}>Schedule Consultation</button>
              <div className={styles.phone}>
                <a href='tel:8773553585'>
                  <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}phone.svg`} alt="phone" />
                  (877)&nbsp;355-3585
                </a>
              </div>
              <p>Call us for assistance</p>
            </div>
          </div>
        </div>

        <div className={styles.sponsors}>
          <div className={styles.sponsors_header}>
            <h6>Featured In</h6>
          </div>
          <div className={styles.sponsors_list}>
            <div>
              <a href="http://www.forbes.com/sites/forbestreptalks/2016/07/11/not-sure-how-to-name-a-startup-squadhelp-will-crowdsource-it-for-199">
                <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}forbes.svg`} alt="forbes" />
              </a>
            </div>
            <div>
              <a href="http://thenextweb.com/contributors/crowdsource-startup-name-with-squadhelp/">
                <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}TNW.svg`}alt="TNW" />
              </a>
            </div>
            <div>
              <a href="http://www.chicagotribune.com/bluesky/originals/ct-squadhelp-startup-names-bsi-20170331-story.html">
                <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}chicago.svg`} alt="chicago" />
              </a>
            </div>
            <div>
              <a href="http://mashable.com/2011/04/01/make-money-crowdworking/">
                <img src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}Mashable.svg`} alt="Mashable" />
              </a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default HowItWorks;