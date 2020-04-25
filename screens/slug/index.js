import React from "react";
import ContainerComponent from "../../components/container";
import Header from "../../components/header/HeaderComponent";
import { SLUG_TYPE } from "../../utils/constants";
import { ListBlogComponent } from "./list-blog/ListBlogsComponent";
import { BlogComponent } from "./blog/BlogComponent";
import { HighlightComponent } from "./highlight/HighlightComponent";
import Footer from "../../components/footer/FooterComponent";
import { Container } from "@material-ui/core";

const SlugPage = ({ categories, highlights, type, dataPage }) => {
  return (
    <ContainerComponent>
      <Header categories={categories} />
      <Container maxWidth="md">
        <div className="ui grid" style={{ marginBottom: 50 }}>
          <div className="left floated eleven wide column">
            {type === SLUG_TYPE.CATEGORY && (
              <ListBlogComponent data={dataPage} />
            )}
            {type === SLUG_TYPE.BLOG && <BlogComponent data={dataPage.blog} />}
            {type === SLUG_TYPE.SEARCH && (
              <ListBlogComponent data={dataPage} isSearch />
            )}
          </div>
          <HighlightComponent data={highlights} />
        </div>
      </Container>
      <Footer />
    </ContainerComponent>
  );
};

export default SlugPage;
