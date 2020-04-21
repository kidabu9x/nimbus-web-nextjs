import Container from "../components/container";

import Layout from "../components/layout";
import api from "../service/serverapi_ajax";
import Header from "../components/header/HeaderComponent";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Blog({ categories }) {
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header categories={categories} />
        <h1>Router {router.asPath}</h1>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const resCategories = await api.getCategories();
  const categories = resCategories.data.data;

  return {
    props: { categories },
  };
}

export async function getStaticPaths() {
  const resCategories = await api.getCategories();
  const categories = resCategories.data.data;

  return {
    paths: categories.map((category) => {
      return {
        params: {
          slug: category.slug,
        },
      };
    }),
    fallback: false,
  };
}
