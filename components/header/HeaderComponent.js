import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles";
import { useRouter } from "next/router";
import { Container } from "@material-ui/core";

const Header = ({ categories }) => {
  const router = useRouter();
  const [txtSearch, setTxtSearch] = useState("");

  const onSearch = () => {
    if (txtSearch !== "") {
      router.push(`/search?query=${txtSearch}`);
    }
  };

  const onChangeTxtSearch = (evt) => {
    setTxtSearch(evt.target.value);
  };

  const onKeyDownSearch = (evt) => {
    if (evt.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="container">
      <Container maxWidth="md">
        <h3 className="ui dividing header container-search">
          <div className="header-logo">
            <a href="/">
              <img
                alt="logo"
                src="/static/assets/images/logo.png"
                className="logo"
              />
            </a>
            <div className="ui icon input transparent header-search">
              <input
                type="text"
                placeholder="Search..."
                onChange={onChangeTxtSearch}
                onKeyDown={onKeyDownSearch}
              />
              <i
                aria-hidden="true"
                className="search link icon icon-search"
                onClick={onSearch}
              ></i>
            </div>
          </div>
        </h3>
        <div className="ui secondary menu nav-menu">
          <Link href="/">
            <a
              className={`${
                router.asPath.substring(1) === "" ? "active" : ""
                } item`}
            >
              Trang chủ
            </a>
          </Link>
          {categories &&
            categories.map((category) => (
              <Link key={category.id} href={`/${category.slug}`}>
                <a
                  className={`${
                    router.asPath.substring(1) === category.slug ? "active" : ""
                    } item`}
                >
                  {category.title}
                </a>
              </Link>
            ))}
        </div>
      </Container>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Header;
