import React, { useRef, useState } from "react";
import styled from "styled-components";
import myIcon from "./IMG/myIcon.png";
import githubLogo from "./IMG/githubLogo.svg";
import mailLogo from "./IMG/mailLogo.svg";

const Wrap = styled.div`
  position: relative;
  width: 1194px;
  height: 1400px;
  left: 50%;
  margin-left: -597px;
  background: none;
`;

const PeopleWrap = styled.div`
  position: relative;
  display: flex;
`;

const People = styled.div`
  position: relative;
  width: 234px;
  height: 315px;
  margin-left: 39.5%;
  top: 300px;
`;

const Position = styled.p`
  display: flex;
  flex-direction: row;
  font-family: "Pretendard";
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  position: absolute;
  left: 0%;
  right: 55.56%;
  top: 5.71%;
  bottom: 82.54%;
  z-index: 1;
  background: #444444;
  border-radius: 30px;
`;

const PositionContain = styled.div`
  width: 72px;
  height: 21px;
  margin: 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  z-index: 2;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ImgContain = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  left: 14.53%;
  right: 0%;
  top: 0%;
  bottom: 36.51%;
  background-color: rgb(211, 211, 211);
`;

const NameWrap = styled.div`
  position: absolute;
  left: 16.31%;
  right: 29.49%;
  top: 69.84%;
  bottom: 0%;
`;

const Name = styled.p`
  position: absolute;
  width: 155px;
  height: 24px;
  left: 18px;
  bottom: 71px;
  margin: 0;
  font-family: "Kanit", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const EmailWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4.47px;
  position: absolute;
  width: 58.37px;
  height: 17.89px;
  right: 62%;
  top: 39px;
`;

const Email = styled.p`
  width: 360px;
  height: 17px;
  margin-left: 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14.3158px;
  line-height: 17px;
  text-align: center;
  color: #999999;
`;

const GithubWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 4.47px;
  text-align: center;
  margin: 0;
  position: absolute;
  width: 68.37px;
  height: 17.89px;
  right: 55%;
  top: 64.05px;
`;

const Github = styled.button`
  width: 170px;
  height: 17px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14.3158px;
  line-height: 17px;
  margin: 0;
  text-align: center;
  color: #999999;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Form = styled.form`
  position: relatvie;
  bottom: 0;
  margin-top: 600px;
`;

const FormTitle = styled.p`
  position: absolute;
  width: 311px;
  height: 48px;
  left: 445px;
  top: 890px;
  font-family: "Kanit", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #000000;
`;

const FormMyEmail = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 6px;
  position: absolute;
  width: 210px;
  height: 29px;
  left: 492px;
  top: 1030px;
  text-align: center;
  background-color: none;
  border: none;
  border-bottom: 3px solid black;
  ::placeholder {
    color: #999999;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
`;

const FormDevEmail = styled.select`
  position: absolute;
  width: 280px;
  height: 35px;
  left: 457px;
  top: 1100px;
  text-align: center;
  background-color: none;
  border: none;
  border-bottom: 3px solid black;
  color: #999999;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding-bottom: 10px;
`;

const FormContent = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  position: absolute;
  width: 300px;
  height: 29px;
  left: 447px;
  top: 1170px;
  text-align: center;
  overflow-y: hidden;
  resize: none;
  background-color: none;
  border: none;
  border-bottom: 3px solid black;
  max-height: 66px;
  ::placeholder {
    color: #999999;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
`;

const FormBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 30px;
  gap: 10px;
  position: absolute;
  width: 109px;
  height: 48px;
  left: 543px;
  top: 1265px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  background: black;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

const FormBtnContent = styled.p`
  margin-top: -1px;
  font-family: "Kanit", sans-serif;
`;

const EmailPage = () => {
  const [Selected, setSelected] = useState("");
  var docUrl =
    "https://script.google.com/macros/s/AKfycbwpltk28-v2733NJZRhQzRzffTM5H-tbW1ZXbllMw3G5yyzChKEjUHwlLGZE79tExiiVg/exec";

  const textRef = useRef(null);

  const selectList = "fbznffldj998@naver.com";
  const docsList =
    "https://script.google.com/macros/s/AKfycbwpltk28-v2733NJZRhQzRzffTM5H-tbW1ZXbllMw3G5yyzChKEjUHwlLGZE79tExiiVg/exec";

  const handleSelect = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelected(e.target.value);
  };

  const getDomain = (domain: string) => {
    window.open(domain);
  };

  return (
    <Wrap>
      <PeopleWrap>
        <People>
          <PositionContain>
            <Position>FE</Position>
          </PositionContain>
          <ImgContain src={myIcon} alt="myIcon" />
          <NameWrap>
            <Name>Daehyeon Han</Name>
            <EmailWrap>
              <img src={mailLogo} alt="gmailLogo" />
              <Email>fbznffldj998@naver.com</Email>
            </EmailWrap>
            <GithubWrap>
              <img src={githubLogo} alt="githubLogo" />
              <Github
                onClick={() => {
                  getDomain("https://github.com/gkseogus");
                }}
              >
                github.com/gkseogus
              </Github>
            </GithubWrap>
          </NameWrap>
        </People>
      </PeopleWrap>
      {Selected === "fbznffldj998@naver.com" ? (docUrl = docsList) : null}
      <Form method="post" action={docUrl}>
        <FormTitle>Send a Message</FormTitle>
        <div>
          <div>
            <FormMyEmail
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail address"
            />
          </div>
          <div>
            <FormDevEmail
              id="usr"
              name="username"
              placeholder="Select an address to send to"
              onChange={handleSelect}
              value={Selected}
            >
              <option>Select an address to send to</option>
              <option value={selectList}>{selectList}</option>
            </FormDevEmail>
          </div>
        </div>

        <div>
          <FormContent
            id="comment"
            name="message"
            placeholder="Write a message what you want"
            ref={textRef}
          ></FormContent>
        </div>
        <FormBtn type="submit">
          <FormBtnContent>Send</FormBtnContent>
        </FormBtn>
      </Form>
    </Wrap>
  );
};

export default EmailPage;
