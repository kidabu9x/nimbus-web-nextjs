import React from "react";
import styles from "./styles";
import { HighlightItemComponent } from "./Item/Item";

export const HighlightComponent = ({ data }) => {
  return (
    <div className="right floated five wide column">
      <div className="container">
        <div className="ui icon input input-field">
          <input type="text" placeholder="Search..." />
          <i aria-hidden="true" className="search circular link icon"></i>
        </div>
        <div>
          <h2 className="header-title">Bài viết nổi bật:</h2>
          <div role="list" className="ui list list-field">
            {data.map((highlight, index) => (
              <HighlightItemComponent key={index.toString()} data={highlight} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};
