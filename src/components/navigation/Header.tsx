import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Company Profile", path: "/company-profile" },
  { label: "Gallery", path: "/company-profile#gallery" },
  { label: "Quote Request", path: "/quote-request" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!headerRef.current) return;

      const target = event.target as Node;

      if (!headerRef.current.contains(target)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header ${isMenuOpen ? "site-header--menu-open" : ""}`}
    >
      <div className="site-header__shell">
        <div className="site-header__top">
          <Link to="/" className="site-logo" aria-label="SM Ridge Materials Home">
            <img
              src="/logo/logo5.png"
              alt="SM Ridge Materials logo"
              className="site-logo__image"
            />
          </Link>

          <div className="site-header__tagline-wrap">
            <p className="site-header__tagline">Construction Materials Supply Company</p>
          </div>

          <div className="site-header__actions">
            <Link to="/quote-request" className="header-action header-action--primary">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="site-header__menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation-dropdown"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="menu-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span>Menu</span>
          </button>
        </div>

        <div className="site-header__row-divider" />

        <div className="site-header__mobile-tagline">
          <p>Construction Materials Supply Company</p>
        </div>

        <div className="site-header__menu-row">
          <button
            type="button"
            className={`site-header__menu-button ${
              isMenuOpen ? "site-header__menu-button--active" : ""
            }`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation-dropdown"
          >
            <span className="menu-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span>Menu</span>
          </button>
        </div>
      </div>

      <div
        id="site-navigation-dropdown"
        className={`site-header__dropdown ${
          isMenuOpen ? "site-header__dropdown--open" : ""
        }`}
      >
        <div className="site-header__dropdown-shell">
          <nav className="site-header__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `site-header__nav-link ${isActive ? "site-header__nav-link--active" : ""}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;