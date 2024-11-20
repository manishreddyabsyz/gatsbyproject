import React from "react";

const Footer = ({ copyrightText, links = [] }:any) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {links.length > 0 && (
          <nav>
            <ul style={styles.navList}>
              {links.map((link:any, index:number) => (
                <li key={index} style={styles.navItem}>
                  <a href={link.path} style={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem 0",
    borderTop: "1px solid #ddd",
    backgroundColor: "#f5f5f5",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 1rem",
  },
  navLink: {
    color: "#333",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#007acc",
  },
};

export default Footer;
