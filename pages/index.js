import {
  getCategories,
  getFeatures
} from "../api/blog";
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

export async function getServerSideProps() {
  let categories = new Array();
  let features = new Array();

  try {
    const result = await Promise.all([getCategories(), getFeatures()]);
    const resCategories = result[0];
    const resFeatures = result[1];
    categories = resCategories.data.data;
    features = resFeatures.data.data;
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: { categories, features }
  };
}

export default Index;
