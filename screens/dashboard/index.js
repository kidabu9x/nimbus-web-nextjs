import React from "react";
import Header from "../../components/header/HeaderComponent";
import Home from "./home/HomeComponent";
import Footer from "../../components/footer/FooterComponent";

const Dashboard = ({ categories, features }) => {
  return (
    <>
      <Header categories={categories} />
      <Home features={features} />
      <Footer categories={categories} />
    </>
  );
};

export default Dashboard;
