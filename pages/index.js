import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header/HeaderComponent";
import api from "../service/serverapi_ajax";
import { useRouter } from "next/router";
import Home from "../components/home/HomeComponent";

const Index = ({ categories, features }) => {
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
        <Home features={features} />
      </Container>
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
