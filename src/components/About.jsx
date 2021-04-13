import React, {useRef, useEffect, useCallback} from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background: #f9f9fc;
  h1 {
    position: relative;
    margin: 15px 0 30px;
    text-align: center;
    font-size: 3rem;
    color: #2196f3;
    &::before {
      content: "";
      width: 150px;
      height: 5px;
      /* background: #1b242f; */
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
    }
  }
  .about__values {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 0 20px;
    .about__value {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 235px;
      padding: 15px;
      background: white;
      border: 1px solid #d9dfeb;
      border-radius: 0.28571429rem;
      i {
        font-size: 4.5rem;
        color: #2196f3;
        margin-bottom: 15px;
      }
      h2 {
        color: #6b6b6b;
      }
      p {
        text-align: center;
        color: #6b6b6b;
      }
    }
  }
  .leftAbout{
    color:#2196f3
  }
  .about__container {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .about__profile {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    position: relative;
    width: 43%;
    padding: 15px;
    background: #fff;
    border: 1px solid #d9dfeb;
    border-radius: 0.28571429rem;
    .about__belt {
      position: absolute;
      top: 0px;
      right: 0px;
      border-top: 70px solid #2196f3;
      border-right: 70px solid #2196f3;
      border-bottom: 70px solid transparent;
      border-left: 70px solid transparent;
      border-top-right-radius: 0.28571429rem;
      &.--transparent {
        border-top: 60px solid #fff;
        border-right: 60px solid #fff;
        border-bottom: 60px solid transparent;
        border-left: 60px solid transparent;
        border-top-right-radius: 0.25rem;
      }
    }
    .about__profilePhoto {
      display: block;
      height: 200px;
      width: 200px;
      margin-top: 20px;
      object-fit: cover;
      border-radius: 100%;
    }
    img {
      height: 130px;
      object-fit: contain;
    }
    p {
      margin: 30px 0 30px;
      line-height: 1.5;
      font-size: 1.1rem;
      strong {
        color: #2196f3;
      }
    }
    h2 {
      width: 100%;
      text-align: left;
    }
    .about__personality {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      h3 {
        flex: 1;
        text-align: center;
      }
    }
    span {
      display: block;
      width: 100%;
      text-align: left;
    }
  }
  .about__teches {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 15px;
    border: 1px solid #d9dfeb;
    border-radius: 0.28571429rem;
    background: #fff;
    .about__tech {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 160px;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 100%;
        font-size: 6rem;
        border-radius: 100%;
        transition: 0.3s;
        &.fa-js:hover {
          color: #f7df1e;
        }
        &.fa-react:hover {
          color: #61dafb;
        }
        &.fa-github:hover {
          color: #171717;
        }
      }
      p {
        flex: 1;
      }
      img {
        display: inline-block;
        width: 100px;
        /* height: 100px; */
        /* border-radius: 100%; */
        object-fit: cover;
        object-position: center;
        margin: 0 20px;
      }
      &.--slidebar {
        position: relative;
        overflow-x: hidden;
        .slider {
          position: absolute;
          top: 50%;
          left: 0;
          display: flex;
          align-items: center;
          transform: translateY(-50%);
          transition: 0.5s;
        }
        &:before {
          content:"이 것도 할 수 있으며 열심히 공부중입니다.";
          position: absolute;
          left: 0;
          top: -3px;
          font-weight: 500;
          font-size: 1.2rem;
        }
      }
    }
    i.fa-angle-left {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 20px;
      text-align: center;
      font-size: 2rem;
      color: #95a5a6;
      &:hover {
        color: #2196f3;
      }
    }
    i.fa-angle-right {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 20px;
      text-align: center;
      font-size: 2rem;
      color: #95a5a6;
      &:hover {
        color: #2196f3;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1099px) {
    padding: 30px;
    h1 {
      font-size: 2.5rem;
    }
    h1::before {
      width: 100px;
    }
    .about__values .about__value {
      margin: 15px 0;
      width: 48%;
    }
    .about__container {
      flex-direction: column;
    }
    .about__profile {
      width: 100%;
      margin: 0 0 20px;
    }
    .about__profile h2 {
      text-align: center;
    }
    .about__profile .about__personality h3 {
      flex: none;
    }
    .about__teches {
      width: 100%;
    }
    .about__teches .about__tech {
      margin: 15px 0 0;
    }
    .about__teches .about__tech {
      margin: 15px 0 0;
    }
    .about__teches .about__tech.--slidebar:before {
      top: -6px;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding: 0px;
    h1 {
      font-size: 2.5rem;
      margin: 30px 0 30px;
    }
    h1::before {
      width: 100px;
    }
    /* .about__values {
      justify-content: center;
      margin: 0 0 20px;
    } */
    .about__values .about__value {
      width: 100%;
      margin: 0 0 15px;
    }
    .about__values .about__value h2 {
      font-size: 1.4rem;
    }
    .about__container {
      flex-direction: column;
      margin: 0 0 15px;
    }
    .about__profile {
      width: 100%;
      margin: 0 0 20px;
    }
    .about__teches {
      width: 100%;
    }
    .about__teches .about__tech i {
      width: 110px;
      font-size: 5rem;
    }
    .about__teches .about__tech p {
      font-size: 13px;
    }
    .about__teches .about__tech.--slidebar:before {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 500px) and (max-width: 767px) {
    .about__values .about__value {
      width: 48%;
      margin: 0 0px 15px;
    }
  }
  @media screen and (min-width: 360px) and (max-width: 399px) {
    .about__values .about__value {
      width: 100%;
      margin: 0 0 15px;
    }
  }
`;

function About({setOffset}) {
  const about = useRef(null);
  const slider = useRef(null);
  const slideBar = useRef(null);

  useEffect(() => {
    setOffset((prevOffset) => ({
      ...prevOffset,
      about: about.current.offsetTop,
    }));
  }, [setOffset]);

  const handlePrevButtonClick = useCallback((e) => {
    const currentLeft = Number(slider.current.style.left.slice(1, 2));

    console.log(currentLeft);
    if (slider.current.style.left === "0%") {
      return null;
    } else {
      return (slider.current.style.left =
        String((currentLeft - 1) * -100) + "%");
    }
  }, []);

  const handleNextButtonClick = useCallback((e) => {
    const slidePage = Math.floor(
      slider.current.offsetWidth / slideBar.current.offsetWidth
    );
    const currentLeft =
      Number(slider.current.style.left.slice(1, 2)) ||
      Number(slider.current.style.left.slice(0, 1));

    if (slider.current.style.left === String(slidePage * -100) + "%") {
      return null;
    } else {
      return (slider.current.style.left =
        String((currentLeft + 1) * -100) + "%");
    }
  }, []);

  return (
    <AboutWrapper className="about" ref={about}>
      <h1>ABOUT</h1>
      <ul className="about__values container">
        <li className="about__value">
          <i className="far fa-lightbulb"></i>
          <h2>Speedy</h2>
          <p>사용자의 입장에서 느끼는 빠른 데이터 전달.</p>
        </li>
        <li className="about__value">
          <i className="fas fa-chart-line"></i>
          <h2>Running curve</h2>
          <p>독학으로 높은 러닝커브를 유지하고 있습니다.</p>
        </li>
        <li className="about__value">
          <i className="fas fa-rocket"></i>
          <h2>Dynamic</h2>
          <p>다이나믹한 API 개발을 좋아합니다.</p>
        </li>
        <li className="about__value">
          <i className="far fa-heart"></i>
          <h2>Affection</h2>
          <p>마크업에 대한 애정과 자부심이 있습니다.</p>
        </li>
      </ul>
      <div className="about__container container">
        <div className="about__profile">
          <div className="about__belt"></div>
          <div className="about__belt --transparent"></div>
          <img
            className="about__profilePhoto"
            src="/img/profile.png"
            alt="profile"
          />
          <br/>
          <br/>
          <h2 className="leftAbout">비트교육센터</h2>
             <p>
             3개월간 CSS, HTML, Javascript, React.js 에 대한 이론을 익히며, 3개월간 팀 프로젝트를 진행하여 총 6개월이라는 기간동안 학습을 수료했습니다.
            </p>
            <h2 className="leftAbout">Textory</h2>
            <p>1개월간 자체 플랫폼 서비스를 운영하는곳에서 인턴쉽을 하였고 React.js 를 통하여 웹 페이지의 전반적인 유지보수와 개발에 참여하였습니다.</p>
        </div>

        <div className="about__teches">
          <div className="about__tech">
            <i className="fab fa-js"></i>
            <p>
              Javascript 의 실행 컨텍스트, 스코프, 비동기처리 등을 이해하고
              있으며 DOM 조작과 이벤트 처리에 익숙하기 때문에 Javascript 를
              자신있는 언어로 선택했습니다.
            </p>
          </div>
          <div className="about__tech">
            <i className="fab fa-react"></i>
            <p>
              React의 재사용을 위한 컴포넌트화, Hooks, React-Router-Dom 의 라우터
              관리, Redux를 활용한 상태관리를 할 수 있습니다.
            </p>
          </div>
          <div className="about__tech">
            <i className="fab fa-github"></i>
            <p>
              팀 프로젝트에서 협업을 했던 경험이 많은 도움이 됐습니다. 브랜치를 나눠
              작업한 경험과 Pull Request 를 통해 Merge 하기 전에 코드 검사를
              수행했습니다.
            </p>
          </div>

          <div className="about__tech --slidebar" ref={slideBar}>
            <div className="slider" ref={slider}>
              <img src="/img/vue.png" alt="" />              
              <img src="/img/node.png" alt="" />
              <img src="/img/webpack.png" alt="" />
              <img src="/img/typescript.png" alt="" />
              <img src="/img/mongo.png" alt="" />
            </div>
          </div>
          <i className="fas fa-angle-left" onClick={handlePrevButtonClick}></i>
          <i className="fas fa-angle-right" onClick={handleNextButtonClick}></i>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
