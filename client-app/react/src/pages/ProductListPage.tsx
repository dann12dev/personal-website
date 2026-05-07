import {
  Card,
  CardContent,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/common/ScrollReveal";

type CardItem = {
  id: string;
  src?: string;
  tag?: string;
  title?: string;
  desc?: string;
};

const cards: Array<CardItem> = [
  {
    id: "1",
    src: "https://picsum.photos/1000/600",
    title: "product-1",
    tag: "good",
  },
  {
    id: "2",
    src: "https://picsum.photos/768/400",
    title: "product-2",
    tag: "good",
  },
  { id: "3", src: "https://picsum.photos/768/800", title: "product-3" },
  { id: "4", src: "https://picsum.photos/768/500", title: "product-4" },
  { id: "5", src: "https://picsum.photos/768/200", title: "product-5" },
  { id: "6", src: "https://picsum.photos/768/400", title: "product-6" },
  { id: "7", src: "https://picsum.photos/768/400", title: "product-7" },
  { id: "8", src: "https://picsum.photos/500/400", title: "product-8" },
  { id: "9", src: "https://picsum.photos/268/100", title: "product-9" },
  { id: "10", src: "https://picsum.photos/400/400", title: "product-10" },
];

const ProductListPage = () => {
  return (
    <>
      <section className="w-full h-auto -mt-20">
        <img
          src="https://picsum.photos/1200/600"
          className="object-cover w-full h-96 aspect-video bg-muted"
        ></img>
        <div className="mx-auto text-left text-sm mt-10 max-w-[90%] md:w-full md:text-center">
          <ProductDescText text="Crafted sweetness, elevated moments. "></ProductDescText>
          <ProductDescText text="把午後的陽光、空氣裡的香氣，和一點點期待，揉進每一口甜裡。"></ProductDescText>
          <ProductDescText text="把日子的稜角磨平，藏進細膩的甜與剛好的溫柔之中。"></ProductDescText>
          <ProductDescText text="最後，把未來藏進，細膩的甜與剛好的溫柔之中。"></ProductDescText>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto text-sm w-2/3">
          <h2>商品列表</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((item) => CardImage(item))}
          </div>
        </div>
      </section>
    </>
  );
};

export function CardImage(item: CardItem) {
  return (
    <ScrollReveal key={item.id}>
      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-colks">
        <div className="absolute z-30 inset-0 aspect-video bg-black/35" />
        <img
          src={item.src}
          alt="Event cover"
          className="h-full relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            {item.tag ? <Badge variant="secondary">{item.tag}</Badge> : <></>}
          </CardAction>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.desc}</CardDescription>
        </CardHeader>
      </Card>
    </ScrollReveal>
  );
}

const ProductDescText = ({ text }: { text: string }) => {
  return (
    <>
      <p className="inline leading-6 md:leading-10">{text}</p>
      <br className="hidden md:block"></br>
    </>
  );
};

export default ProductListPage;
