import React from "react";
import styles from "./styles";
import Link from "next/link";

export const HighlightItemComponent = ({ data }) => {
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
              className="ui image"
            />
          </div>
          <div className="column" style={{ paddingLeft: 0 }}>
            <h4>{data.title}</h4>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    </Link>
  );
};