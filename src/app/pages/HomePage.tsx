import React from "react";

import GOLDUPIMG from "src/core/images/golduplogo.png";
import KSELOGO from "src/core/images/koreasilverexchangelogo.png";

import { Carousel, Result, Row, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <>
      <div className="kse-content-mv">
        <Carousel swipe draggable>
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
                          <img src={KSELOGO} />
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
                한국은거래소 웹 홈페이지
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>

              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img src={KSELOGO} />
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
                한국은거래소 모바일 홈페이지
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>
              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img src={KSELOGO} />
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
                한국은거래소 디자인 플레이그라운드
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>

              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img src={KSELOGO} />
                  </div>
                }
                title={
                  <p>
                    <a href="https://kse-design.vercel.app/" target="_blank">
                      https://kse-design.vercel.app/{" "}
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
                한국은거래소 가격변동 관리시스템
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>
              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img src={KSELOGO} />
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
                  골드업 자산 아카이브
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
                    세금서 발급 관리: 세금 관련 기능을 처리하기 위한 모듈 또는
                    서비스가 포함됩니다.
                  </li>
                  <li>
                    Popbill API: 세금서 발급과 관련된 기능을 처리하기 위해
                    사용되는 Popbill API.
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
                골드업 시안 페이지
              </div>
              <div className="kse-content-pb">
                <div className="kse-title-divider"></div>
              </div>

              <Result
                icon={
                  <div className="kse-row kse-row-center">
                    <img src={GOLDUPIMG} style={{ borderRadius: 10 }} />
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
                    골드업 시안입니다. 골드업의 데모를 직접 볼 수는 있습니다!
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