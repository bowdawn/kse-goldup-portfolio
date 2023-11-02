import { Layout } from "antd";
import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";

export const AppLayout: React.FC = () => {
  return (
    <Layout>
      <div>
        <div>
          <div className="kse-layout-section">
            <Layout.Content>
              <div className="kse-layout-section">
                <Outlet />
              </div>
            </Layout.Content>
            <Footer />
          </div>
          <ScrollRestoration />
        </div>
      </div>
    </Layout>
  );
};
