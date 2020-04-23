import React from "react";
import styles from "./styles";
import { ListBlogItemComponent } from "./item/Item";

export const ListBlogComponent = ({ data }) => {
  return (
    <div className="container">
      <h1 className="header-title">{data.category.title}:</h1>
      <div role="list" className="ui list">
        {data.blogs.map((blog, index) => (
          <ListBlogItemComponent key={index.toString()} data={blog} />
        ))}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};
