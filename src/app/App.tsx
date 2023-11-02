import React from "react";
import Routes from "./routes/Routes";
import AntConfigProvider from "./providers/AntConfigProvider";

import "../core/styles/scss/ant-custom.scss";
import "kse-design/src/core/style/css/index.css";

export const App: React.FC = () => {
  return (
    <AntConfigProvider>
      <Routes />
    </AntConfigProvider>
  );
};
