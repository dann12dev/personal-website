import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useRef, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollReveal from "@/components/common/ScrollReveal";
import { useHeaderMode } from "@/hooks/useHeaderMode";
import LoadedFocusImage from "@/components/common/LoadedFocusImage";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const bannerItems = [
  { src: "https://picsum.photos/1200/600?random=1" },
  { src: "https://picsum.photos/1200/600?random=2" },
  { src: "https://picsum.photos/1200/600?random=3" },
];

const HomePage = () => {
  const bannerRef = useRef<HTMLElement>(null);
  useHeaderMode(bannerRef); // 傳入你想觀察的元件即可

  return (
    <div>
      <ScrollReveal>
        <section ref={bannerRef} className="w-full -mt-20 h-screen">
          <HeroCarousel></HeroCarousel>
        </section>
      </ScrollReveal>

      {/* 主題展示區 */}
      <ScrollReveal>
        <section className="text-center mb-12 h-screen">
          <h1 className="text-4xl tracking-tight sm:text-5xl">首頁</h1>
        </section>
      </ScrollReveal>
    </div>
  );
};

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 監聽切換
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // 初始化

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, duration: 60 }}
      plugins={[
        Autoplay({
          delay: 8000,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
        }),
        Fade(),
      ]}
      className="m-0 size-full"
    >
      <CarouselContent className="m-0">
        {bannerItems.map((item, index) => (
          <CarouselItem className={cn("p-0")} key={index}>
            <LoadedFocusImage
              src={item.src}
              alt=""
              className="object-cover w-full h-screen"
              isSelected={selectedIndex === index}
            ></LoadedFocusImage>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* 如果是大圖輪播，通常會隱藏左右按鈕，或者放在圖片邊緣 */}
      {/* <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" /> */}
    </Carousel>
  );
};

export default HomePage;
