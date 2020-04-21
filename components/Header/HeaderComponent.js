import Link from "next/link";
import api from "../../service/serverapi_ajax";
import React from "react";
import styles from "./styles";
import { useRouter } from "next/router";

export default function Header({ categories }) {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="container">
        <h3 className="ui dividing header container-search">
          <div className="header-logo">
            <a>
              <img
                className="logo"
                alt="logo"
                src="/static/assets/images/logo4.png"
              />
            </a>
            <div className="ui small left icon transparent input header-search">
              <input type="text" placeholder="Search..." />
              <i aria-hidden="true" className="search icon"></i>
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
      </div>
      <style jsx>{styles}</style>
    </React.Fragment>
  );
}