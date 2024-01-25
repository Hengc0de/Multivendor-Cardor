import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Route/Footer/Footer";
import styles from "../styles/styles";
import Faq from "../components/Route/Faq/Faq.jsx";

const FAQPage = () => {
  return (
    <div>
      <Header activeheading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

export default FAQPage;
