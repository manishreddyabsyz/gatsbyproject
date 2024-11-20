import React from "react";
import FAQ from "../components/FAQ"
import Layout from "../components/Layout";
const faqData = [
    {
      question: "What is Gatsby?",
      answer: "Gatsby is a React-based open-source framework for creating websites and apps."
    },
    {
      question: "How do I start a Gatsby project?",
      answer: "You can start a Gatsby project by running `gatsby new project-name` in your terminal."
    },
    {
      question: "Is Gatsby suitable for SEO?",
      answer: "Yes, Gatsby is highly suitable for SEO due to its static site generation and fast loading speed."
    },
    {
      question: "Can I use plugins with Gatsby?",
      answer: "Yes, Gatsby has a rich ecosystem of plugins to enhance your site's functionality."
    },
    {
      question: "How do I deploy a Gatsby site?",
      answer: "You can deploy a Gatsby site on platforms like Netlify, Vercel, or GitHub Pages."
    }
  ];
  
  const Faq = () => (
    <Layout>
    <div>
      <FAQ faqs={faqData} />
    </div>
    </Layout>
  );
  
  export default Faq;