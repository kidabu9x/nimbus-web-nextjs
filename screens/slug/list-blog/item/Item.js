import React from "react";
import styles from "./styles";
import Link from "next/link";

export const ListBlogItemComponent = ({ data }) => {
  return (
    <Link href={`/${data.slug}`}>
      <div role="listitem" className="item container">
        <div className="ui padded two column grid">
          <div className="column" style={{ paddingLeft: 0 }}>
            <img
              src={
                data.thumbnail
                  ? data.thumbnail
                  : "https://react.semantic-ui.com/images/avatar/large/matthew.png"
              }
              className="ui image thumb-image"
            />
          </div>
          <div className="column right-field" style={{ paddingLeft: 0 }}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <a>
              <p>Đọc tiếp...</p>
            </a>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    </Link>
  );
};
