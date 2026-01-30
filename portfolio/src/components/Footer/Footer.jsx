import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {props.lastEdited}</div>
      <div className="footer__links">
        <a
          className="footer__link"
          href={props.resumeDocLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Contact
        </a>
        <a
          className="footer__link"
          href={props.resumeDocLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          About Shawn
        </a>
        <a
          className="footer__link"
          href={props.resumeDocLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Resume
        </a>
        <a
          className="footer__link"
          href={props.resumeDocLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Developers
        </a>
        <a
          className="footer__link"
          href={props.resumeDocLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Disclaimers
        </a>
      </div>
    </footer>
  );
};

export default Footer;
