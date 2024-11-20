import React from "react";

const FAQ = ({ faqs }) => (
  <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Frequently Asked Questions</h2>
    {faqs.map((faq, index) => (
      <details key={index} style={{ marginBottom: "10px", border: "1px solid #ddd", padding: "10px" }}>
        <summary style={{ cursor: "pointer", fontWeight: "bold" }}>{faq.question}</summary>
        <p style={{ marginTop: "10px" }}>{faq.answer}</p>
      </details>
    ))}
  </div>
);


export default FAQ;

