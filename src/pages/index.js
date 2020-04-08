import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

const IndexPage = () => (
  <Layout>
    <Header />
    <div id="main">
      <header className="major container medium">
        <h2>
          前言
        </h2>
        <p style={{ 'textAlign': 'left', 'textTransform': 'none', }}>
          前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文前言的內文
        </p>
      </header>
      <header className="major container medium">
        <h2>
          計劃源起
        </h2>
        <p style={{ 'textAlign': 'left', 'textTransform': 'none', }}>
          2019年，我們以「協助優化政府網站數位服務」為計畫目的，招募具UI（User Interface）使用者介面或UX（User Experience）使用者體驗相關專長或實務經驗的青年學生，檢核服務後提供改善後的數位服務模型，供各網站主管機關和社會大眾參考。
        </p>
      </header>
      <header className="major container medium">
        <h2>
          設計步驟
        </h2>
        <p style={{ 'textAlign': 'left', 'textTransform': 'none', }}>
          2019年，我們以「協助優化政府網站數位服務」為計畫目的，招募具UI（User Interface）使用者介面或UX（User Experience）使用者體驗相關專長或實務經驗的青年學生，檢核服務後提供改善後的數位服務模型，供各網站主管機關和社會大眾參考。
        </p>
        <img src='https://raw.githubusercontent.com/PDIS/ray2019/master/src/assets/images/ray2019_process.png' alt='' width={"100%"}></img>
      </header>
      <header className="major container medium">
        <h2>
          專案成果
        </h2>
      </header>
      <Project />
      <footer className="major container medium">
        <h2>計畫結束</h2>
        <img src='https://github.com/PDIS/ray2019/blob/master/src/assets/images/final.jpg?raw=true' alt='' width={"100%"}></img>
      </footer>
    </div>
    {<Footer />}
  </Layout>
);

export default IndexPage;
