import Layout from "../components/layout";
import Head from "next/head";
import api from "../service/serverapi_ajax";
import Dashboard from "../screens/dashboard";
import { NextSeo } from "next-seo";
import SEO from "../next-seo/index.config";

const Index = ({ categories, features }) => {
  return (
    <Layout>
      <Head>
        <title>Nimbus Computer School</title>
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/fontawesome.min.css"
          integrity="sha256-CuUPKpitgFmSNQuPDL5cEfPOOJT/+bwUlhfumDJ9CI4="
          crossorigin="anonymous"
        />
        {/* Next SEO config */}
        <NextSeo {...SEO}></NextSeo>
      </Head>
      <Dashboard categories={categories} features={features}></Dashboard>
    </Layout>
  );
};

export async function getStaticProps() {
  const resCategories = await api.getCategories();
  const resFeatures = await api.getFeatures();
  const categories = resCategories.data.data;
  const features = resFeatures.data.data;

  return {
    props: { categories, features },
  };
}

export default Index;
