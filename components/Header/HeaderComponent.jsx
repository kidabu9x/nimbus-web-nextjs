/*
 * Header component of the site, observes the count of the movies
 *
 */

import React from "react";
import { observer } from "mobx-react";
import Link from "next/link";

import store from "../../store";
import styles from "./styles";

const HeaderComponent = observer((props) => {
  return (
    <React.Fragment>
      <div className="container">
        <h3 className="ui dividing header container-search">
          <div className="header-logo">
            <a>
              <img
                className="logo"
                alt="logo"
                src="static/assets/images/logo4.png"
              />
            </a>
            <div className="ui small left icon transparent input header-search">
              <input type="text" placeholder="Search..." />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </h3>
        <div className="ui secondary menu nav-menu">
          <a className="active item">Trang chủ</a>
          <a className="item">Danh mục</a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </React.Fragment>
  );
});

export default HeaderComponent;
