import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore, headerRequest } from '../../actions/actionCreator';
import Logo from '../Logo';

class Header extends React.Component {

    logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
    };

    startContests = () => {
      this.props.history.push('/startContest');
    };

    renderLoginButtons = () => {
      if (this.props.data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img
                src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                alt="user"
              />
              <span>{`Hi, ${this.props.data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
              <ul>
                <Link
                  to="/dashboard"
                  style={{ textDecoration: 'none' }}
                >
                  <li>
                    <span>View Dashboard</span>
                  </li>
                </Link>
                <Link to="/account" style={{ textDecoration: 'none' }}>
                  <li>
                    <span>My Account</span>
                  </li>
                </Link>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <li>
                    <span>Messages</span>
                  </li>
                </Link>
                <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}>
                  <li>
                    <span>Affiliate Dashboard</span>
                  </li>
                </Link>
                
                <li 
                  style={{ cursor: 'pointer' }}
                  onClick={this.logOut}
                >
                  <span>Logout</span>
                </li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
          </>
        );
      }
      return (
        <>
          <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span
              className={styles.btn}
            >
              SIGN UP
            </span>
          </Link>
        </>
      );
    };

    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <div className={styles.headerContainer}>
          <div className={styles.fixedHeader}>
            <span className={styles.info}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
            <a href="http://www.google.com">Read Announcement</a>
          </div>
          <div className={styles.loginSignnUpHeaders}>
              <a href='tel:8773553585' className={styles.numberContainer}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
                <span>(877)&nbsp;355-3585</span>
              </a>
            <div className={styles.userButtonsContainer}>
              {this.renderLoginButtons()}
            </div>
          </div>
          <div className={styles.navContainer}>
            <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} className={styles.logo} alt="blue_logo" />
            <div className={styles.leftNav}>
              <div className={styles.nav}>
                <ul>
                  <li>
                    <span>NAME IDEAS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="http://www.google.com"><li>Consulting</li></a>
                      <a href="http://www.google.com"><li>Beauty</li></a>
                      <a href="http://www.google.com"><li>E-Commerce</li></a>
                      <a href="http://www.google.com"><li>Fashion & Clothing</li></a>
                      <a href="http://www.google.com"><li>Finance</li></a>
                      <a href="http://www.google.com"><li>Real Estate</li></a>
                      <a href="http://www.google.com"><li>Tech</li></a>
                      <a href="http://www.google.com">
                        <li className={styles.last}>
                          More Categories
                        </li>
                      </a>
                    </ul>
                  </li>
                  <li>
                    <span>CONTESTS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="http://www.google.com"><li>HOW IT WORKS</li></a>
                      <a href="http://www.google.com"><li>PRICING</li></a>
                      <a href="http://www.google.com"><li>AGENCY SERVICE</li></a>
                      <a href="http://www.google.com"><li>ACTIVE CONTESTS</li></a>
                      <a href="http://www.google.com"><li>WINNERS</li></a>
                      <a href="http://www.google.com"><li>LEADERBOARD</li></a>
                      <a href="http://www.google.com">
                        <li className={styles.last}>
                              BECOME A
                              CREATIVE
                        </li>
                      </a>
                    </ul>
                  </li>
                  <li>
                    <span>Our Work</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="http://www.google.com"><li>NAMES</li></a>
                      <a href="http://www.google.com"><li>TAGLINES</li></a>
                      <a href="http://www.google.com"><li>LOGOS</li></a>
                      <a href="http://www.google.com">
                        <li className={styles.last}>TESTIMONIALS</li>
                      </a>
                    </ul>
                  </li>
                  <li>
                    <span>Names For Sale</span>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                    <ul>
                      <a href="http://www.google.com"><li>POPULAR NAMES</li></a>
                      <a href="http://www.google.com"><li>SHORT NAMES</li></a>
                      <a href="http://www.google.com"><li>INTRIGUING NAMES</li></a>
                      <a href="http://www.google.com"><li>NAMES BY CATEGORY</li></a>
                      <a href="http://www.google.com"><li>VISUAL NAME SEARCH</li></a>
                      <a href="http://www.google.com">
                        <li className={styles.last}>
                              SELL YOUR
                              DOMAINS
                        </li>
                      </a>
                    </ul>
                  </li>
                  <li>
                    <span>Blog</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="http://www.google.com"><li>ULTIMATE NAMING GUIDE</li></a>
                      <a href="http://www.google.com"><li>POETIC DEVICES IN BUSINESS NAMING</li></a>
                      <a href="http://www.google.com"><li>CROWDED BAR THEORY</li></a>
                      <a href="http://www.google.com">
                        <li className={styles.last}>
                          ALL ARTICLES
                        </li>
                      </a>
                    </ul>
                  </li>
                </ul>
              </div>
              {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                        && <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));