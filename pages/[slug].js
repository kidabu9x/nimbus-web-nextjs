import Layout from "../components/layout";
import api from "../service/serverapi_ajax";
import Head from "next/head";
import { SLUG_TYPE } from "../utils/constants";
import SlugPage from "../screens/slug";
import { NextSeo } from "next-seo";
import SEO_CATEGORY from "../next-seo/slug.category.config";
import SEO_BLOG from "../next-seo/slug.blog.config";
import SEO_SEARCH from "../next-seo/slug.search.config";
import { useState, useEffect } from "react";

const Slug = ({ categories, highlights, type, dataPage }) => {
  const [ssrDone, setSsrDone] = useState(false);
  useEffect(() => {
    setSsrDone(true);
  }, []);
  return (
    <>
      {ssrDone && (
        <Layout>
          <Head>
            {type === SLUG_TYPE.CATEGORY && (
              <title>{dataPage.category.title}</title>
            )}
            {type === SLUG_TYPE.BLOG && <title>{dataPage.blog.title}</title>}
            {type === SLUG_TYPE.SEARCH && <title>{dataPage.searchQuery}</title>}
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
            {/* Next SEO config */}
            {type === SLUG_TYPE.CATEGORY && (
              <NextSeo {...SEO_CATEGORY}></NextSeo>
            )}
            {type === SLUG_TYPE.BLOG && <NextSeo {...SEO_BLOG}></NextSeo>}
            {type === SLUG_TYPE.SEARCH && <NextSeo {...SEO_SEARCH}></NextSeo>}
          </Head>
          <SlugPage
            categories={categories}
            highlights={highlights}
            type={type}
            dataPage={dataPage}
          />
        </Layout>
      )}
    </>
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
