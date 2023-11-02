import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";
import koKR from "antd/lib/locale-provider/ko_KR";

type AntConfigProviderProps = {
  children: ReactNode;
};

const AntConfigProvider: React.FC<AntConfigProviderProps> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#6900ff" },
    }}
    locale={koKR}
  >
    {children}
  </ConfigProvider>
);

export default AntConfigProvider;
