import React from "react";

import GOLDUPIMG from "src/core/images/golduplogo.png";
import KSELOGO from "src/core/images/koreasilverexchangelogo.png";

import { Carousel, Result, Row, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <>
      <div className="kse-content-mv">
        <Carousel>
          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                Korea Silver Exchange and Gold Up Portfolio
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>
              <div className="kse-content-mb">
                <Result
                  icon={
                    <Row justify={"center"}>
                      <Space align="center" direction="vertical" size={64}>
                        <div>
                          <img
                            src={KSELOGO}
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: 10,
                            }}
                          />
                        </div>
                        <PlusOutlined rev={undefined} />
                        <img
                          src={GOLDUPIMG}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: 10,
                          }}
                        />
                      </Space>
                    </Row>
                  }
                ></Result>
              </div>
            </div>
          </div>
          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                Korea Silver Exchange Homepage (Web)
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>

              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img
                      src={KSELOGO}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                }
                title={
                  <p>
                    <a href=" https://www.koreasilverex.co.kr/" target="_blank">
                      {" "}
                      https://www.koreasilverex.co.kr/
                    </a>
                  </p>
                }
                subTitle={<p>한국은거래소 웹 홈페이지입니다.</p>}
              />
            </div>
          </div>
          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                Korea Silver Exchange Homepage (Mobile)
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>
              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img
                      src={KSELOGO}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                }
                title={
                  <p>
                    <a
                      href="https://www.koreasilverex.co.kr/m/index.html"
                      target="_blank"
                    >
                      https://www.koreasilverex.co.kr/m/index.html{" "}
                    </a>
                  </p>
                }
                subTitle={<p>한국은거래소 모바일 홈페이지입니다.</p>}
              />
            </div>
          </div>
          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                Korea Silver Exchange Design Playground
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>

              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img
                      src={KSELOGO}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                }
                title={
                  <p>
                    <a href="https://kse-design.vercel.app/" target="_blank">
                      https://kse-design.vercel.app/
                    </a>
                  </p>
                }
                subTitle={
                  <p>
                    한국은거래소 다자인 플레이그라운드입니다. 한국은거래소
                    적용할 웹 콤포넌트 시안을 공유할 수 있게 해주는 환경입니다.
                    CSS 대신 개발의 효율을 올리기 위한 SASS 기술 사용이 되는
                    스타일링으로 정리되어 있습니다.
                  </p>
                }
              />
            </div>
          </div>

          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                Korea Silver Exchange Price Management System (Visilia)
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>
              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img
                      src={KSELOGO}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                }
                title={
                  <p>
                    <a href="https://kse-visilia.vercel.app/" target="_blank">
                      https://kse-visilia.vercel.app/{" "}
                    </a>
                  </p>
                }
                subTitle={
                  <p>
                    베실리야는 한국은거래소 거격변동 관리를 하는 시스템입니다.
                    이 사이트에서 현재 가격, 최근 가격 변동, 추세 및 과거
                    가격변동 통계를 볼 수는 있습니다.
                  </p>
                }
              />
            </div>
          </div>
          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div>
                <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                  Goldup Assets Archive
                </div>
                <div className="kse-content-pb">
                  <div className="kse-title-divider"></div>
                </div>

                <p>
                  <a href="https://kse-goldup.vercel.app/" target="_blank">
                    https://kse-goldup.vercel.app/
                  </a>
                </p>

                <p>
                  이곳은 골드업에서 사용하는 실제 자산 정리되어 있는
                  아카이브입니다. 자산 관리를 위한 골드업 관련 코드의
                  리포지토리가 제공됩니다.
                </p>

                <h2>리포지토리 (Repository)</h2>

                <h3>Backend Repository</h3>
                <p>
                  이 리포지토리는 백엔드 부분을 담당하며, 주요 구성 요소는
                  다음과 같습니다:
                </p>
                <ul>
                  <li>
                    MySQL Database: 데이터를 저장하고 관리하는 데 사용되는
                    데이터베이스 시스템.
                  </li>
                  <li>
                    AWS Hosting: 웹 애플리케이션을 호스팅하고 배포하는 데
                    사용되는 Amazon Web Services.
                  </li>
                  <li>
                    Express Server: 백엔드 서버를 구축하는 데 사용되는
                    Express.js, Node.js의 프레임워크.
                  </li>
                  <li>
                    세금서 자동발급 관리{" "}
                    <a href="https://www.popbill.com/" target="_blank">
                      (Popbill API)
                    </a>
                    : 세금서 자동발급 기능 사용 되고 있습니니다.
                  </li>
                </ul>

                <h3>IOS Repository</h3>
                <p>
                  이 리포지토리는 iOS 애플리케이션 개발을 위한 것이며, 네이티브
                  Swift 코드로 작성됩니다. iOS 기기에서 사용되는 모바일
                  애플리케이션을 구축하는 데 사용됩니다.
                </p>

                <h3>Web Admin Repository</h3>
                <p>
                  이 리포지토리는 웹 관리자용 코드로 React를 사용하여
                  개발되었습니다. 웹 관리자는 골드업 서비스를 관리하고
                  모니터링하기 위해 사용됩니다.
                </p>

                <h3>Android Repository</h3>
                <p>
                  이 리포지토리는 Android 애플리케이션 개발을 위한 것이며,
                  Kotlin 코드로 작성됩니다. Android 기기에서 사용되는 모바일
                  애플리케이션을 구축하는 데 사용됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                Goldup Prototype Page
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>

              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img
                      src={GOLDUPIMG}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                }
                title={
                  <p>
                    <a href=" https://goldup.vercel.app/" target="_blank">
                      https://goldup.vercel.app/
                    </a>
                  </p>
                }
                subTitle={
                  <p>
                    골드업 시안 홈페이지입니다. 골드업의 데모를 직접 경험해볼
                    수는 있습니다!
                  </p>
                }
              />
            </div>
          </div>
          <div className=" kse-content">
            <div
              className="kse-layout-body"
              style={{ height: "calc(100vh - 96px)" }}
            >
              <div className="kse-title-2 kse-title-mb kse-content-small-pt">
                Gold/Silver Secondhand Sale American Market Statistics
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>

              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img
                      src={GOLDUPIMG}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                }
                title={
                  <p>
                    <a
                      href=" https://goldup.vercel.app/american-secondhand-market"
                      target="_blank"
                    >
                      https://goldup.vercel.app/american-secondhand-market
                    </a>
                  </p>
                }
                subTitle={
                  <p>
                    이 페이지는 미국 금은 위탁 판매 시장의 선두 기업들에 대한
                    통계를 제시합니다. 이 통계에는 기업 순위, 회사규모, 매출,
                    위탁판매 가능한 제품의 수량, 그리고 은화, 금화, 실버바,
                    그리고 골드바 위탁판매 비율과 관련된 정보가 포함되어
                    있습니다.
                  </p>
                }
              />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HomePage;
