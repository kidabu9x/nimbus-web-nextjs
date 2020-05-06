import api from "../service/serverapi_ajax";
import Dashboard from "../screens/dashboard";

const Index = ({ categories, features }) => {
  return (
    <Dashboard categories={categories} features={features}></Dashboard>
  );
};

export async function getServerSideProps() {
  const resCategories = await api.getCategories();
  const resFeatures = await api.getFeatures();
  const categories = resCategories.data.data;
  const features = resFeatures.data.data;
  return {
    props: { categories, features },
  };
}

export default Index;
