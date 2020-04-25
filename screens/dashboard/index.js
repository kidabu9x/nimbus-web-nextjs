import React from "react";
import Container from "../../components/container";
import Header from "../../components/header/HeaderComponent";
import Home from "./home/HomeComponent";
import Footer from "../../components/footer/FooterComponent";

const Dashboard = ({ categories, features }) => {
  return (
    <Container>
      <Header categories={categories} />
      <Home features={features} />
      <Footer />
    </Container>
  );
};

export default Dashboard;
