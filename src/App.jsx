import React from "react";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import FeedbackList from "./components/feedbacks/FeedbackList";
import FeedbackForm from "./components/feedbacks/FeedbackForm";
import FeedbackStats from "./components/feedbacks/FeedbackStats";

const App = () => {
  return (
    <>
      <Header />
      <FeedbackForm />
      <FeedbackList />
      <FeedbackStats />
      <Footer />
    </>
  );
};

export default App;
