import React from "react";
import styles from "./styles";
import Link from "next/link";

export const BlogComponent = ({ data }) => {
  return (
    <div className="container">
      <div className="ui breadcrumb">
        <Link href="/">
          <a className="section">Trang chủ</a>
        </Link>
        <i aria-hidden="true" className="right angle icon divider"></i>
        <a className="section">{data.title}</a>
      </div>
      <h2>{data.title.toUpperCase()}</h2>
      <div className="tag-and-author">
        {data.tags.map((tag) => (
          <button key={tag.title} className="ui grey button">
            {tag.title}
          </button>
        ))}
        &emsp;<i aria-hidden="true" className="user icon"></i>&emsp;
        <p>{`${data.authors[0].first_name} ${data.authors[0].last_name}`}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contents[0].content,
        }}
      ></div>
      <style jsx>{styles}</style>
    </div>
  );
};
