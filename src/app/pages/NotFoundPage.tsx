import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { rootPath } from "../routes/paths";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="kse-content-mv">
      <div className="kse-layout-body">
        <Result
          status="404"
          title="404"
          subTitle="죄송합니다, 방문하신 페이지가 존재하지 않습니다."
          extra={
            <Button
              type="primary"
              onClick={() => {
                navigate(rootPath);
              }}
            >
              홈으로 이동
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
