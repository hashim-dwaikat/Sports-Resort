import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">

        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
        >
          <span className="navbar__logo-mark">
            A
          </span>

          <span className="navbar__logo-text">
            AURELIS
          </span>
        </Link>

        <nav className="navbar__links">
          <NavLink
            to="/"
            end
          >
            HOME
          </NavLink>

          <NavLink to="/facilities">
            FACILITIES
          </NavLink>

          <NavLink to="/experience">
            EXPERIENCE
          </NavLink>

          <NavLink to="/memberships">
            MEMBERSHIPS
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <Link
            to="/booking"
            className="navbar__book"
          >
            BOOK A SESSION
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="navbar__menu"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`navbar__mobile ${
          menuOpen ? "open" : ""
        }`}
      >
        <NavLink
          to="/"
          end
          onClick={closeMenu}
        >
          HOME
        </NavLink>

        <NavLink
          to="/facilities"
          onClick={closeMenu}
        >
          FACILITIES
        </NavLink>

        <NavLink
          to="/experience"
          onClick={closeMenu}
        >
          EXPERIENCE
        </NavLink>

        <NavLink
          to="/memberships"
          onClick={closeMenu}
        >
          MEMBERSHIPS
        </NavLink>

        <Link
          to="/booking"
          className="navbar__mobile-book"
          onClick={closeMenu}
        >
          BOOK A SESSION
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;