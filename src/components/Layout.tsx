import React from "react";
import Header from "./Header";
import Footer from "./Footer"
const Layout = ({ children }) => {
    const navigationLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "FAQ", path: "/faq" },
        // { label: "Contact", path: "/contact" },
      ];
      const footerLinks = [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
      ];
  return (
    <>
      <Header logoText="Gatsby" links={navigationLinks}  />
      <main style={styles.main}>{children}</main>
      <Footer
        copyrightText={`© ${new Date().getFullYear()} MySite. All rights reserved.`}
        links={footerLinks}
      />
    </>
  );
};

const styles = {
  main: {
    // maxWidth: "1200px",
    // margin: "0 auto",
    // padding: "2rem 1rem",
    backgroundColor:"bisque",
    minHeight:"80vh"
  },
  footer: {
    textAlign: "center",
    // marginTop: "2rem",
    padding: "1rem 0",
    borderTop: "1px solid #ddd",
    backgroundColor: "#f5f5f5",
  },
};

export default Layout;
