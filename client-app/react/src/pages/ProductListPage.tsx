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
      <section className="w-full h-auto -mt-20">
        <img
          src="https://picsum.photos/1200/600"
          className="object-cover w-full h-96"
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

const ProductDescText = ({text}: {text:string}) => {
  return (<>
    <p className="inline leading-6 md:leading-10">{text}</p>
    <br className="hidden md:block"></br>
  </>);
}

export default ProductListPage;
