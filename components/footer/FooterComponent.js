import React from "react";
import styles from "./styles";

const Footer = () => {
  return (
    <footer className="ui inverted vertical footer segment form-page">
      <p>Posted by: Hege Refsnes</p>
      <p>
        Contact information:{" "}
        <a href="mailto:someone@example.com">someone@example.com</a>.
      </p>
      <style jsx>{styles}</style>
    </footer>
  );
};

export default Footer;
