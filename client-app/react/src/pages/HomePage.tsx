import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* 主題展示區 */}
      <div className="text-center mb-12 h-screen bg-blue-200">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          首頁
        </h1>
        <p className="mt-4 text-xl">
          主題輪播圖
        </p>
      </div>

      {/* 最新消息區 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          最新消息
        </h1>
        <p className="mt-4 text-xl">
          圖
        </p>
      </div>
    </div>
  );
};


export default HomePage;