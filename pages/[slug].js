import {
  getSlug,
  searchByQuery,
  getCategories
} from "../api/blog";
import { SLUG_TYPE } from "../utils/constants";
import SlugPage from "../screens/slug";
import { NextSeo } from "next-seo";

const Slug = ({ host, categories, highlights, type, dataPage }) => {
  if (!dataPage) {
    return <></>;
  }

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
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
        twitter={twitter}
      />
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

  let categories = [];
  let highlights = [];
  let type = SLUG_TYPE.BLOG;
  let dataPage = null;
  try {
    const resCategories = await getCategories();
    categories = resCategories.data.data;
  } catch (error) {
    console.log("Fetch category error: " + error.message);
  }

  try {
    const resSlug = params.slug === "search" ? await searchByQuery(query.query) : await getSlug(params.slug);
    const slug = resSlug.data.data;
    highlights = slug.highlights;
    type = slug.type;
    if (type === SLUG_TYPE.CATEGORY) {
      dataPage = {
        category: slug.category,
        blogs: slug.blogs,
      };
    }
    if (type === SLUG_TYPE.BLOG) {
      dataPage = {
        blog: slug,
      };
    }
    if (type === SLUG_TYPE.SEARCH) {
      dataPage = {
        blogs: slug.blogs,
        searchQuery: query.query,
      };
    }
  } catch (e) {
    console.log(e.message);
  }

  return {
    props: { host, categories, highlights, type, dataPage }
  };
}

export default Slug;
