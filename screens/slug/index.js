import React from "react";
import Header from "../../components/header/HeaderComponent";
import { SLUG_TYPE } from "../../utils/constants";
import { ListBlogComponent } from "./list-blog/ListBlogsComponent";
import { BlogComponent } from "./blog/BlogComponent";
import { HighlightComponent } from "./highlight/HighlightComponent";
import Footer from "../../components/footer/FooterComponent";
import {
  Container,
  Grid
} from "@material-ui/core";

const SlugPage = ({ categories, highlights, type, dataPage }) => {
  return (
    <>
      <Header categories={categories} />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item sm={12} md={9}>
            {type === SLUG_TYPE.CATEGORY && (
              <ListBlogComponent data={dataPage} />
            )}
            {type === SLUG_TYPE.TAG && (
              <ListBlogComponent data={dataPage} />
            )}
            {type === SLUG_TYPE.BLOG && <BlogComponent data={dataPage.blog} />}
            {type === SLUG_TYPE.SEARCH && (
              <ListBlogComponent data={dataPage} isSearch />
            )}
          </Grid>
          <Grid item sm={12} md={3}>
            <HighlightComponent data={highlights} />
          </Grid>
        </Grid>
      </Container>
      <Footer categories={categories} />
    </>
  );
};

export default SlugPage;
