import React from "react";
import { FC } from "react";

import Navbar from "../components/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
