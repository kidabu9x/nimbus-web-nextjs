import api from "../service/serverapi_ajax";
import Head from "next/head";
import Dashboard from "../screens/dashboard";

const Index = ({ categories, features }) => {
  return (
    <>
      <Head>
        <title>Nimbus Study Hub</title>
      </Head>
      <Dashboard categories={categories} features={features}></Dashboard>
    </>
  );
};

export async function getStaticProps() {
  const result = await Promise.all([api.getCategories(), api.getFeatures()]);
  const resCategories = result[0];
  const resFeatures = result[1];
  const categories = resCategories.data.data;
  const features = resFeatures.data.data;
  return {
    props: { categories, features }
  };
}

export default Index;
