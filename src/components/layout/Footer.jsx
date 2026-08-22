import React from "react";
import { ArrowUpRight, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__top">

          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-mark">
                A
              </span>

              <span>AURELIS</span>
            </Link>

            <p>
              A next-generation sports resort
              built around performance, recovery,
              and exceptional experiences.
            </p>
          </div>

          <div className="footer__columns">

            <div className="footer__column">
              <span>EXPLORE</span>

              <Link to="/facilities">
                Facilities
              </Link>

              <Link to="/experience">
                Experience
              </Link>

              <Link to="/memberships">
                Memberships
              </Link>

              <Link to="/booking">
                Booking
              </Link>
            </div>

            <div className="footer__column">
              <span>CONTACT</span>

              <a href="mailto:hello@aurelis.com">
                hello@aurelis.com
              </a>

              <a href="tel:+970000000000">
                +970 00 000 0000
              </a>

              <span className="footer__location">
                Palestine
              </span>
            </div>

            <div className="footer__column">
              <span>FOLLOW</span>

              <a
                href="#"
                aria-label="Instagram"
              >
                Instagram
              </a>

              <a
                href="#"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>

          </div>
        </div>

        <div className="footer__middle">
          <Link
            to="/booking"
            className="footer__cta"
          >
            <span>
              READY TO LEVEL UP?
            </span>

            <strong>
              BOOK YOUR EXPERIENCE
            </strong>

            <ArrowUpRight size={22} />
          </Link>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} AURELIS. ALL RIGHTS RESERVED.
          </span>

          <span>
            PERFORMANCE / RECOVERY / EXPERIENCE
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;