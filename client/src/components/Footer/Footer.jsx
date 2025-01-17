import React from "react";
import moonstonelogo from "../../assets/Logo.png";
import medicapslogo from "../../assets/medi-logo.png";
import classes from "./Footer.module.css";

const moonstoneinsta = "https://www.instagram.com/moonstone_medicaps/";
// const sambhavlinkedin = "https://www.linkedin.com/company/sambhav-tech-fest/";
// const sambhavitwitter=''

const mediinsta = "https://www.instagram.com/medicaps_university/";
const medilinkedin = "https://www.linkedin.com/school/medicaps-university-indore/";
const meditwitter = "https://twitter.com/caps_medi";
const mediwebsite = "https://www.medicaps.ac.in/";

const spiderurl = "https://www.linkedin.com/in/om-gawande/";
const saurabh = "https://www.linkedin.com/in/saurabh-barde-5b617321a/";
const sanyog = "https://www.linkedin.com/in/sanyog-mahajan-8288a7204/";

const mediurl = "https://www.medicaps.ac.in/";
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img className={classes.footer_sambhav_image} src={moonstonelogo} alt="moonstonelogo"></img>
            </div>
            <div>{/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}</div>
          </div>
          <p className={classes.footer_sambhav_description}>Unleash your creativity, embrace community spirit - Join us at Moonstone2K24</p>
          <div className={classes.footer_social_item}>
            <div>
              <a href={moonstoneinsta} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png" alt="" />
              </a>
            </div>
            {/* <div>
              <a href={sambhavlinkedin} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png" alt="" />
              </a>{" "}
            </div> */}
            {/* <div>
              <a
                href={sambhavtwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <a href={mediurl} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                <img className={classes.footer_grabbit_image} src={medicapslogo} alt="medicapslogo"></img>
              </a>
            </div>
            <div>{/* <h1 className={classes.footer_sambhav}>GrabBit</h1> */}</div>
          </div>
          <p className={classes.footer_sambhav_description}>Where academic excellence meets industry exposure. Building sound professionals for a better society, since 2000.</p>
          <div className={classes.footer_social_item}>
            <div>
              <a href={mediinsta} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png" alt="" />
              </a>{" "}
            </div>
            <div>
              <a href={medilinkedin} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png" alt="" />
              </a>
            </div>
            <div>
              <a href={meditwitter} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>{" "}
            </div>
            <div>
              <a href={mediwebsite} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/color/48/ffffff/domain--v1.png" alt="zsdsff" />
              </a>
            </div>
          </div>
        </div>
        {/* <div className={classes.footer}second'>
          <h2 className={classes.footer}menu-heading'>Menu</h2>
          <h6 className={classes.footer}page-link'>About US</h6>
          <h6 className={classes.footer}page-link'>Term of Use</h6>
          <h6 className={classes.footer}page-link'>Privary Policy</h6>
          <h6 className={classes.footer}page-link'>Order History</h6>
          <h6 className={classes.footer}page-link'>Return policy</h6>
        </div> */}
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img className={classes.footer_contact_image} src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" alt="" />
            </div>
            <div>
              <p>Medi-Caps University, Indore</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img className={classes.footer_contact_image} src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png" alt="" />
            </div>
            <div>
              <p>07313111500,07313111501</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img className={classes.footer_contact_image} src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png" alt="" />
            </div>
            <div>
              <p className={classes.mail} src>
                info@medicaps.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website designed and created by{" "}
          <a href={spiderurl} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
            @Om Gawande
          </a>{" "}
          ,{" "}
          <a href={saurabh} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
            {" "}
            @Saurabh Barde
          </a>{" "}
          and{" "}
          <a href={sanyog} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
            {" "}
            @Sanyog Mahajan
          </a>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
