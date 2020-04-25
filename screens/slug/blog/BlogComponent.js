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
      <h1>{data.title.toUpperCase()}</h1>
      <div className="tag-and-author">
        {data.categories.map((category) => (
          <button key={category.title} className="ui button category-tag">
            <a href={`/${category.slug}`} style={{ color: "white" }}>
              {category.title}
            </a>
          </button>
        ))}
        &emsp;
        <img src={data.authors[0].avatar} className="img-author" />
        &emsp;
        <p>{`${data.authors[0].first_name} ${data.authors[0].last_name}`}</p>
      </div>
      <div
        className="field-cke"
        dangerouslySetInnerHTML={{
          __html: data.contents[0].content,
        }}
      />
      <span>Tags:</span>&emsp;&emsp;
      {data.tags.map((tag) => (
        <button key={tag.title} className="ui button tag-tag">
          <a href={`/${tag.slug}`} style={{ color: "white" }}>
            {tag.title}
          </a>
        </button>
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};
