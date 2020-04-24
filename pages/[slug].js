import Container from "../components/container";

import Layout from "../components/layout";
import api from "../service/serverapi_ajax";
import Header from "../components/header/HeaderComponent";
import Head from "next/head";
import { useRouter } from "next/router";
import { SLUG_TYPE } from "../utils/constants";
import { ListBlogComponent } from "../components/list-blog/ListBlogsComponent";
import { HighlightComponent } from "../components/highlight/HighlightComponent";
import { BlogComponent } from "../components/blog/BlogComponent";
import Footer from "../components/footer/FooterComponent";

const Slug = ({ categories, highlights, type, dataPage }) => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Nimbus Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header categories={categories} />
        <div className="ui grid">
          <div
            className="left floated eleven wide column"
            style={{ padding: 0 }}
          >
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
        <Footer />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps({ params, query }) {
  const resCategories = await api.getCategories();
  const categories = resCategories.data.data;
  let slug = null;
  if (params.slug === "search") {
    const resSearch = await api.searchByQuery(query.query);
    slug = resSearch.data.data;
  } else {
    const resSlug = await api.getSlug(params.slug);
    slug = resSlug.data.data;
  }
  const highlights = slug.highlights;
  const type = slug.type;
  let dataPage = null;
  if (type === SLUG_TYPE.CATEGORY) {
    dataPage = {
      category: slug.category,
      blogs: slug.blogs,
    };
  }
  if (type === SLUG_TYPE.BLOG) {
    dataPage = {
      blog: slug.blog,
    };
  }
  if (type === SLUG_TYPE.SEARCH) {
    dataPage = {
      blogs: slug.blogs,
      searchQuery: query.query,
    };
  }

  return {
    props: { categories, highlights, type, dataPage },
  };
}

export default Slug;
