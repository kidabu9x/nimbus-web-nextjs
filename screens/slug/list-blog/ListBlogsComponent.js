import React from "react";
import { ListBlogItemComponent } from "./item/Item";
import {
  Container,
  Typography,
  Box
} from "@material-ui/core";

export const ListBlogComponent = ({ data, isSearch }) => {
  const title = (() => {
    if (isSearch) {
      return 'Kết quả tìm kiếm của: ' + data.searchQuery
    } else {
      return data.category.title;
    }
  })();
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      {data.blogs.map((blog, index) => (
        <ListBlogItemComponent key={index.toString()} data={blog} />
      ))}

      <Box marginBottom={5} />
    </Container>
  );
};
