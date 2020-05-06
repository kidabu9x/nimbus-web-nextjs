import api from "../service/serverapi_ajax";
import Head from "next/head";
import { SLUG_TYPE } from "../utils/constants";
import SlugPage from "../screens/slug";
import { NextSeo } from "next-seo";

const Slug = ({ host, categories, highlights, type, dataPage }) => {
  const title = (() => {
    switch (type) {
      case SLUG_TYPE.BLOG:
        return dataPage.blog.title;
      case SLUG_TYPE.CATEGORY:
        return dataPage.category.title;
      case SLUG_TYPE.SEARCH:
        return dataPage.searchQuery;
      default:
        return "Nimbus Study Hub";
    }
  })();

  const description = (() => {
    switch (type) {
      case SLUG_TYPE.BLOG:
        return dataPage.blog.description;
      default:
        return "Nơi nâng cao kĩ năng của bạn";
    }
  })();

  const canonical = host + (() => {
    switch (type) {
      case SLUG_TYPE.BLOG:
        return dataPage.blog.slug;
      case SLUG_TYPE.CATEGORY:
        return dataPage.category.slug;
      case SLUG_TYPE.SEARCH:
        return "search?query=" + dataPage.searchQuery;
      default:
        return "Nimbus Study Hub";
    }
  })();

  const image = (() => {
    switch (type) {
      case SLUG_TYPE.BLOG:
        return dataPage.blog.thumbnail;
      default:
        return "https://res.cloudinary.com/nimbus-education/image/upload/v1588748885/blogs/uat/logo-white-bg.png";
    }
  })();

  const openGraph = {
    url: canonical,
    title: title,
    description: description,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: image
      }
    ],
    site_name: 'Nimbus Study Hub',
  };

  const twitter = {
    handle: '@handle',
    site: '@site'
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <NextSeo
          title={title}
          description={description}
          canonical={canonical}
          openGraph={openGraph}
          twitter={twitter}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
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
      />
    </>
  );
};

export async function getServerSideProps({ req, params, query }) {
  const host = "https://" + req.headers.host + "/";
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
    props: { host, categories, highlights, type, dataPage },
  };
}

export default Slug;
