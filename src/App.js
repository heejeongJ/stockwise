import React, { useEffect } from 'react';
import { ReactComponent as SVGIcon } from './img/logo.svg';
import { ReactComponent as SVGRecom } from './img/home.svg';
import { ReactComponent as SVGT1 } from './img/Frame Trend1.svg';
import { ReactComponent as SVGT2 } from './img/Frame Trend2.svg';

import './App.css';

// Logo SVG
function Logo() {
  return (
    <a href="/">
      <div className="SVGIcon">
        <SVGIcon width="200px" height="100px" />
      </div>
    </a>
  );
}

// User Link
function UserLinks() {
  return (
    <div className='logInNSignUp'>
      <a href='/' className='logIn'><b>로그인</b></a>
      <a href='/' className='signUp'><b>회원가입</b></a>
    </div>
  );
}

// Web Service info
function StockWiseInfo() {
  return (
    <div className='StockWiseInfo'>
      <p className='GetWise'>Get Wise !</p>
      <b className='MakeItT'>Make your</b>
      <b className='CustomizeT'> Customized Investment</b>
      <div className='Text'>
        관심 분야와 투자 자산 비율 및 위험 부담 능력과 같은 당신의 투자 성향을 AI가 분석하여<br/>
        맞춤형 서비스와 개인화된 종목 투자 추천을 제공합니다.
      </div>
      <p className='GetStartT'> 회원 가입 후 맞춤형 투자 추천 받으러 가기</p>
      <div className='SVGRecom'>
        <SVGRecom width="1000px" height="600px" />
      </div>
    </div>
  );
}

// Get Started Button
function BlueButton({ disabled, children }) {
  return (
    <button className="BlueButton" disabled={disabled}>
      {children}
    </button>
  );
}

// trend Stocks SVG
function TrendsStocks() {
  useEffect(() => {
    const trendsStock = document.querySelector('.trendsStock');

    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = trendsStock.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.8) {
        trendsStock.classList.add('slide-in');
      } else if (scrollY === 0) {
        trendsStock.classList.remove('slide-in');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='trendsStock'>
      <b className='trendsT'>Trends Stocks</b>
      <div className="SVGT">
        <SVGT1 width="1000px" height="470px" />
        <SVGT2 width="1000px" height="470px" />

      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App_header">
        <Logo />
        <UserLinks />
      </header>
      <body>
        <StockWiseInfo />
        <BlueButton disabled={false}>GET STARTED !</BlueButton>
        <TrendsStocks />
      </body>
    </div>
  );
}

export default App;
