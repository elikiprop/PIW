/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
/*import { Link } from "react-router-dom";*/
import "../../assets/scss/theme.scss";
import "../../assets/css/theme.css";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      {/* <!-- footer --> */}
      <footer class="footer fixed bottom py-5 theme-bg-primary">
        <div class="container text-center">
          <ul class="social-list list-inline mb-4">
            <li class="list-inline-item me-3">
              <a href="#">
                <MailIcon className="fa-fw" />
              </a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#">
                <TwitterIcon className="fa-fw" />
              </a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#">
                <InstagramIcon className="fa-fw" />
              </a>
            </li>
            <li class="list-inline-item me-0">
              <a href="#">
                <YouTubeIcon className="fa-fw" />
              </a>
            </li>
          </ul>
          {/* <!--//social-list--> */}

          {/* <ul className="footer-links list-inline mx-auto mb-4">
            <li className="list-inline-item">
              <Link to="/speakers">Speakers</Link>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <Link to="/schedule">Program</Link>
            </li>
          </ul> */}
          {/* <!--//footer-link--> */}

          {/* <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
          <small class="copyright">
            Pwani Innovation Week {year} | Swahilipot Hub Foundation
          </small>
        </div>
        {/* <!--//container--> */}
      </footer>
    </>
  );
};

export default Footer;
