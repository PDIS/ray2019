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
          自2017年起，行政院PDIS小組展開青年學生體檢政府網站專案 (Rescue Action by Youth, RAY)，當年度檢驗政府網站於 Safari 的瀏覽體驗；2018年則是以政府網站是否支援「手機瀏覽」為檢測標的。為配合行政院國家發展委員會改善政府數位服務的政策目標，在前兩年的基礎上，2019年，RAY以「提升政府數位服務的使用者體驗」為目標，招募具設計專長的見習學生一同協作，優化政府網站。
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
          為確保工作重點一致、檢測後獲得明確結果，PDIS小組整理出適用於2019年RAY計畫的使用者體驗「設計六步驟」。在計畫開始時PDIS即舉辦工作坊，說明此六步驟及執行期程，同學需訪談相關使用者、確認問題以後，方能進行設計和產出原型。此設計六步驟除了讓同學們明確掌握自身專案進度，也可供往後相關單位參考。
        </p>
        <img src='https://raw.githubusercontent.com/PDIS/ray2019/master/src/assets/images/ray2019_process.png' alt='' width={"100%"} style={{ 'margin-top': '10vh' }}></img>
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
