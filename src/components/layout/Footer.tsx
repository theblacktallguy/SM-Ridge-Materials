import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">

        <div className="site-footer__cta">
            <div className="site-footer__shell">
                <div className="site-footer__cta-inner">
                <div className="site-footer__cta-text-wrap">
                    <p className="site-footer__cta-text">
                    Need quality materials for your next project?
                    </p>
                </div>

                <div className="site-footer__cta-actions">
                    <Link to="/quote-request" className="site-footer__cta-button">
                    Get a Quote
                    </Link>

                    <div className="site-footer__social-inline">
                        <a
                            href="https://wa.me/2348139336355"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            className="site-footer__social-chip"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="https://instagram.com/smridgematerials"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="site-footer__social-chip"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://facebook.com/smridgematerials"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="site-footer__social-chip"
                        >
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>

      <div className="site-footer__main">
        <div className="site-footer__shell">
          <div className="site-footer__row site-footer__row--top">
            <div className="site-footer__panel site-footer__panel--brand">
              <Link
                to="/"
                className="site-footer__brand"
                aria-label="SM Ridge Materials Home"
              >
                <img
                  src="/logo/logo5.png"
                  alt="SM Ridge Materials logo"
                  className="site-footer__logo"
                />
              </Link>

              <p className="site-footer__summary">
                Reliable construction materials supply for contractors,
                developers, businesses, and project owners across Lagos and
                Southwest Nigeria.
              </p>

              <a
                href="/pdf/sm_ridge_company_profile.pdf"
                className="site-footer__profile-link"
                download
              >
                Download Company Profile
              </a>
            </div>

            <div className="site-footer__panel site-footer__panel--links">
              <h3 className="site-footer__heading">Company / Support</h3>

              <ul className="site-footer__links">
                <li>
                  <Link to="/quote-request">Request a Quote</Link>
                </li>
                <li>
                  <Link to="/company-profile">Company Profile</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/#coverage-area">Coverage Areas</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="site-footer__row site-footer__row--bottom">
            <div className="site-footer__panel site-footer__panel--links">
              <h3 className="site-footer__heading">Quick Links</h3>

              <ul className="site-footer__links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/company-profile#gallery">Gallery</Link>
                </li>
              </ul>
            </div>

            <div className="site-footer__panel site-footer__panel--contact">
              <h3 className="site-footer__heading">Contact / Social</h3>

              <ul className="site-footer__links">
                <li>
                  <a href="tel:+2348139336355">+234 813 933 6355</a>
                </li>
                <li>
                  <a href="mailto:info@smridgematerials.com">
                    info@smridgematerials.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/2348139336355"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/smridgematerials"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/smridgematerials"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__legal">
        <div className="site-footer__shell site-footer__legal-inner">
          <div className="site-footer__legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>

          <p>© 2026 SM Ridge Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;