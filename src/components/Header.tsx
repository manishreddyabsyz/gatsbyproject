import React from "react";
import { Link } from "gatsby";

const Header = ({ logoText = "MySite", links = [] }) => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1>{logoText}</h1>
        <div>
          <Link to="/" style={styles.logo}>
            MySite
          </Link>
        </div>

        <nav>
        <ul style={styles.navList}>
            {links.map((link, index) => (
              <li key={index} style={styles.navItem}>
                <Link
                  to={link.path}
                  style={styles.navLink}
                  activeStyle={styles.navLinkActive}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#f5f5f5",
    padding: "1rem 0",
    borderBottom: "1px solid #ddd",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "1rem",
  },
  navLink: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#007acc",
  },
};

export default Header;
