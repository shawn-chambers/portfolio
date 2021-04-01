import React from "react";
import { format } from "date-fns";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        This page was last edited on{" "}
        {format(new Date(), "d MMM y, 'at' K:mm '(PST).'")}
      </div>
      <div className="footer__links">
        <a
          className="footer__link"
          href="https://docs.google.com/document/d/16SPyqT4enGb-2_QUSihJj_4AUO5C0V9O72vfAGxI_8s/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          Contact
        </a>
        <a
          className="footer__link"
          href="https://docs.google.com/document/d/16SPyqT4enGb-2_QUSihJj_4AUO5C0V9O72vfAGxI_8s/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          About Shawn
        </a>
        <a
          className="footer__link"
          href="https://docs.google.com/document/d/16SPyqT4enGb-2_QUSihJj_4AUO5C0V9O72vfAGxI_8s/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          Resume
        </a>
        <a
          className="footer__link"
          href="https://docs.google.com/document/d/16SPyqT4enGb-2_QUSihJj_4AUO5C0V9O72vfAGxI_8s/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          Developers
        </a>
        <a
          className="footer__link"
          href="https://docs.google.com/document/d/16SPyqT4enGb-2_QUSihJj_4AUO5C0V9O72vfAGxI_8s/edit?usp=sharing"
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

/**
 *
 * link to resume: https://docs.google.com/document/d/16SPyqT4enGb-2_QUSihJj_4AUO5C0V9O72vfAGxI_8s/edit?usp=sharing
 *
 */
