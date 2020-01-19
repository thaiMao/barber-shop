/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const NavBar = () => {
  return (
    <header
      css={{
        height: "68px",
        fontSize: "16px",
        display: "grid",
        gridTemplateColumns: `224px 5fr`,
        gridTemplateAreas: `'logo links'`,
        backgroundColor: "lightBlue",
      }}
    >
      <a css={{ gridArea: `logo` }}>Logo</a>
      <nav css={{ gridArea: `links` }} role="navigation">
        <ul
          css={{
            display: "flex",
            position: "relative",
            justifyContent: "space-evenly",
            fontWeight: 700,
            zIndex: 95,
            listStyleType: "none",
          }}
        >
          <li>Offers</li>
          <li>Prices</li>
          <li>Services</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
