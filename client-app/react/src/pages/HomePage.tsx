import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* 標題與簡介 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          首頁
        </h1>
        <p className="mt-4 text-xl">
          主題輪播圖
        </p>
      </div>
    </div>
  );
};


export default HomePage;