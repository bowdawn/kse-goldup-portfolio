import React, { useState } from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { useAuth } from "../providers/AuthProvider";

const AppMenu: React.FC<{}> = ({}) => {
  const [open, setOpen] = useState(false);

  const { isAuthenticated } = useAuth();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Button
            onClick={showDrawer}
            shape="circle"
            icon={<MenuOutlined rev={undefined} />}
          />
        </>
      ) : (
        <>
          <Button
            style={{ visibility: "hidden" }}
            shape="circle"
            icon={<MenuOutlined rev={undefined} />}
          />
        </>
      )}
    </>
  );
};

export default AppMenu;
