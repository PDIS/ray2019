import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pic from '../assets/images/final.jpg';

import Project from '../components/Project'

const IndexPage = () => (
  <Layout>
    <Header />
    <div id="main">
      <header className="major container medium">
        <h2>
          計劃源起
        </h2>
        <p style={{'text-align': 'left', 'text-transform': 'none',}}>
          2019年，我們以「協助優化政府網站數位服務」為計畫目的，招募具UI（User Interface）使用者介面或UX（User Experience）使用者體驗相關專長或實務經驗的青年學生，檢核服務後提供改善後的數位服務模型，供各網站主管機關和社會大眾參考。
        </p> 
      </header>
      <header className="major container medium">
        <h2>
          專案成果
        </h2>
      </header>
      <Project />
      <footer className="major container medium">
        <h2>計劃結束</h2>
        <img src={pic} width={"100%"}></img>
      </footer>
    </div>
    {<Footer />}
  </Layout>
);

export default IndexPage;
