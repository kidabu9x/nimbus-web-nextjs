import Layout from "../components/layout";
import api from "../service/serverapi_ajax";
import Head from "next/head";
import { SLUG_TYPE } from "../utils/constants";
import SlugPage from "../screens/slug";

const Slug = ({ categories, highlights, type, dataPage }) => {
  return (
    <Layout>
      <Head>
        {type === SLUG_TYPE.CATEGORY && (
          <title>{dataPage.category.title}</title>
        )}
        {type === SLUG_TYPE.BLOG && <title>{dataPage.blog.title}</title>}
        {type === SLUG_TYPE.SEARCH && <title>{dataPage.searchQuery}</title>}
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
      <SlugPage
        categories={categories}
        highlights={highlights}
        type={type}
        dataPage={dataPage}
      ></SlugPage>
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
