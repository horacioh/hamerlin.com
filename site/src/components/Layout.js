import React from "react";
import { Global, css } from "@emotion/core";
import FooterSection from "./FooterSection";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0px;
          }
        `}
      />
      <main>{children}</main>
      <FooterSection />
    </React.Fragment>
  );
}

export default Layout;
