import React from "react";
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HomePage = () => {
  return (
    <div>
      <section className="w-full -mt-20 h-screen">
        <HeroCarousel></HeroCarousel>
      </section>
      {/* 主題展示區 */}
      <div className="text-center mb-12 h-screen">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          首頁
        </h1>
        
      </div>
    </div>
  );
};

const HeroCarousel = () => {
  // 設定插件：延遲 2000ms (2秒)，滑鼠移入時停止

  return (
    <Carousel
      opts={{ 
        duration: 100, // 數值越小，切換動作觸發越快（預設通常是 25-30）
        loop: true 
      }} 
      plugins={[Fade(),  Autoplay({ delay: 8000, stopOnInteraction: false })]}
      className="m-0"
    >
      <CarouselContent className="ml-0">
        <CarouselItem className="pl-0 transition-opacity duration-1000">
          <img 
            src="https://picsum.photos/1200/600?random=1" 
            className="w-full object-cover h-screen" 
          />
        </CarouselItem>
        <CarouselItem className="pl-0 transition-opacity duration-1000">
          <img 
            src="https://picsum.photos/1200/600?random=2" 
            className="w-full object-cover h-screen" 
          />
        </CarouselItem>
        <CarouselItem className="pl-0 transition-opacity duration-1000">
          <img 
            src="https://picsum.photos/1200/600?random=3" 
            className="w-full object-cover h-screen" 
          />
        </CarouselItem>
      </CarouselContent>
      {/* 如果是大圖輪播，通常會隱藏左右按鈕，或者放在圖片邊緣 */}
      {/* <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" /> */}
    </Carousel>
  )
}

export default HomePage;