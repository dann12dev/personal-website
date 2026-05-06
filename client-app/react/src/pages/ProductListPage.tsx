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

const ProductListPage = () => {
  return (
    <>
      <section className="size-full -mt-20">
        <img
          src="https://picsum.photos/1200/600"
          className="object-cover w-full h-1/3"
        ></img>
        <div className="mx-auto text-center text-sm mt-10">
          <p>Crafted sweetness, elevated moments</p>
          <br />
          <p>把午後的陽光、空氣裡的香氣，和一點點期待，揉進每一口甜裡</p>
          <br />
          <p>把日子的稜角磨平，藏進細膩的甜與剛好的溫柔之中</p>
          <br />
          <p>最後，把未來藏進，細膩的甜與剛好的溫柔之中</p>
        </div>
      </section>

      {/* <section>
        <div className="container mx-auto px-6 text-center text-sm md:text-base max-w-2xl">
          <div className="flex flex-col gap-y-4 leading-relaxed tracking-wide text-justify sm:text-center">
            <p className="whitespace-nowrap sm:whitespace-normal">
              Crafted sweetness, elevated moments
            </p>
            <p>把午後的陽光、空氣裡的香氣，和一點點期待，揉進每一口甜裡</p>
            <p>把日子的稜角磨平，藏進細膩的甜與剛好的溫柔之中</p>
            <p>最後，把未來藏進，細膩的甜與剛好的溫柔之中</p>
          </div>
        </div>
      </section> */}

      <section className="mt-20">
        <div className="mx-auto text-sm w-2/3">
          <h2>商品列表</h2>
          {CardImage()}
        </div>
      </section>
    </>
  );
};

export function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute z-30 inset-0 aspect-video bg-black/35" />
      <img
        src="/personal-website/home"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Macha Mille Crepe Cake</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default ProductListPage;
