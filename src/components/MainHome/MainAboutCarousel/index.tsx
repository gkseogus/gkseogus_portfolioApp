import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MyImg from "../MainAboutCarousel/IMG/MyImg.png";
import SetBackGroundImg from "../MainAboutCarousel/IMG/SetBackGroundImg.png";

const SettingImgContain = styled.div`
  padding-left: auto;
  padding-top: 20px;
`;

const SettingImg = styled.img`
  height: 20px;
`;

const Contain = styled.div`
  padding-top: auto;
  padding-bottom: 15%;
`;

const ImgContain = styled.div`
  width: 1000px;
  height: 500px;
  margin: auto;
  text-align: center;
  background-image: url(${MyImg});
`;

const KoTextContain = styled.h2`
  padding-top: 12%;
  font-size: 46px;
  font-weight: 600px;
  font-family: "Do Hyeon", sans-serif;
`;

const EnTextContain = styled.h2`
  font-size: 32px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
`;

export default class MainAboutCarousel extends Component {
  render() {
    const settings = {
      customPaging: function () {
        return (
          <SettingImgContain>
            <SettingImg alt="set" src={SetBackGroundImg} />
          </SettingImgContain>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Contain>
        <Slider {...settings}>
          <div>
            <ImgContain>
              <KoTextContain>
                안녕하세요. <br /> 프론트 엔지니어 한대현입니다. <br />
              </KoTextContain>
              <EnTextContain>
                ━ <br /> Welcome to <br /> Dae Hyeon's portfolio blog
              </EnTextContain>
            </ImgContain>
          </div>
          <div>
            <ImgContain>
              <KoTextContain>
                주로 React & Redux 를 <br />
                다루며 아래와 같은 기술도 다룹니다. <br />
              </KoTextContain>
              <EnTextContain>
                ━ <br /> JavaScript, TypeScript, python, ...
              </EnTextContain>
            </ImgContain>
          </div>
          <div>
            <ImgContain>
              <KoTextContain>
                배우는 것을 좋아하며 <br /> 만드는 것에 흥미를 느낍니다. <br />
              </KoTextContain>
              <EnTextContain>
                ━ <br /> I like to learn and <br /> I am interested in making.
              </EnTextContain>
            </ImgContain>
          </div>
          <div>
            <ImgContain>
              <KoTextContain>
                저의 연락처 입니다. <br />
              </KoTextContain>
              <EnTextContain>
                ━ <br /> call : 010-2246-6787 <br /> e-mail :
                fbznffldj998@naver.com
              </EnTextContain>
            </ImgContain>
          </div>
        </Slider>
      </Contain>
    );
  }
}
