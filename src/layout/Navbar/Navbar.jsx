import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "../../assets/scss/theme.scss";
import "../../assets/css/theme.css";

function Navbar() {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerAnimation = () => {
      const header = headerRef.current;
      const scrollTop = window.scrollY;

      if (header) {
        if (scrollTop > 100) {
          header.classList.add("header-shrink");
        } else {
          header.classList.remove("header-shrink");
        }
      }
    };

    window.addEventListener("load", headerAnimation);
    window.addEventListener("resize", headerAnimation);
    window.addEventListener("scroll", headerAnimation);

    return () => {
      window.removeEventListener("load", headerAnimation);
      window.removeEventListener("resize", headerAnimation);
      window.removeEventListener("scroll", headerAnimation);
    };
  }, []);

  return (
    <header id="header" className="header fixed-top" ref={headerRef}>
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div className="site-logo">
              <Link to="/">
                <img className="logo-icon" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar-btn order-lg-2">
              <a className="btn btn-secondary disabled" href="/">
                Schedule
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/gallery" className="btn btn-secondary enabled">
                2023 PIW Gallery
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              id="navigation"
              className="navbar-collapse collapse justify-content-lg-end me-lg-3"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link to="/about" className="nav-link scrollto disabled">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
