/*
 * Top level app & layout, loaded ONCE at the start
 */

import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";
import Link from "next/link";

import MyHeader from "../components/Header/MyHeader";

// required here for hot reload
import css from "../styles/layout.sass";

import store from "../store";
import api from "../config";

export default class MyApp extends App {
  componentDidMount() {
    console.info("app did mount");

    // always query movies at the start of the app, no matter what page
    // gets loaded first (actually we just need the count in the header
    // but for simplicity there is no separate API for count only)
    // api.query_movies().then(movies => store.set_movies(movies));
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        {/* global sass styles
                pages may also define Head which is merged with this */}
        <Head>
          <title>Nimbus Service</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>

        <div className="outer">
          <MyHeader />

          <article>
            <Component {...pageProps} />
          </article>

          <aside className="sidebar-right">Sidebar</aside>

          <footer>
            {" "}
            Footer
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <a
              className="right"
              href="https://github.com/tomimick/tm-nextjs-starter"
            >
              Source at Github
            </a>
          </footer>
        </div>
      </Container>
    );
  }
}
