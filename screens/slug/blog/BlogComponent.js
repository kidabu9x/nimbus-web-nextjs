import React from "react";
import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Box,
  Divider
} from "@material-ui/core";
import Tag from "../../../components/ui/Tag";
import Author from "../../../components/ui/Author";

export const BlogComponent = ({ data }) => {
  return (
    <Container maxWidth="lg">
      <Box marginBottom={2}>
        <Breadcrumbs separator="›">
          <Link color="inherit" href="/">
            Trang chủ
          </Link>
          <Typography color="textPrimary">{data.title}</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h5" component="h1" gutterBottom>
        {data.title.toUpperCase()}
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        marginBottom={2}
      >
        {data.categories.map((category, index) => (
          <Tag key={index} title={category.title} link={`/${category.slug}`} />
        ))}

        <Author author={data.authors[0]} />

      </Box>

      <Divider />

      <div
        className="cke"
        dangerouslySetInnerHTML={{
          __html: data.contents[0].content,
        }}
      />

      <Box marginTop={4} marginBottom={6}>
        <Typography display="inline">Tags: </Typography>

        {data.tags.map((tag, index) => (
          <Tag key={index} title={tag.title} link={`/${tag.slug}`} />
        ))}
      </Box>

    </Container>
  );
};
