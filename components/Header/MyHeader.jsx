/*
 * Header component of the site, observes the count of the movies
 *
 */

import React from "react";
import { observer } from "mobx-react";
import Link from "next/link";

import store from "../../store";
import { Header, Input, Button } from "semantic-ui-react";
import styles from "./styles";

const MyHeader = observer((props) => {
  return (
    <React.Fragment>
      <Header dividing className="container">
        <div className="header-logo">
          <a>
            <img
              className="logo"
              alt="logo"
              src="static/assets/images/logo4.png"
            />
          </a>
          <Input
            icon="search"
            placeholder="Search..."
            iconPosition="left"
            className="header-search"
          />
          <button className="ui primary button btn-write">Viết bài</button>
          <button className="ui basic button btn-write">Đăng ký</button>
          <button className="ui basic button btn-write">Đăng nhập</button>
        </div>
      </Header>
      <style jsx>{styles}</style>
    </React.Fragment>
  );
});

export default MyHeader;
