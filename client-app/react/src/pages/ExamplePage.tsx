import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Badge } from '@/components/ui/badge';

const accordionItems = [
  {
    value: "notifications",
    trigger: "Notification Settings",
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
  },
  {
    value: "privacy",
    trigger: "Privacy & Security",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
  },
  {
    value: "billing",
    trigger: "Billing & Subscription",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
]


export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <Carousel setApi={setApi} className="w-full max-w-[12rem] sm:max-w-xs mx-auto">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current}/{count}
      </div>
    </>
  )
}

export function AccordionMultiple() {
  return (
    <Accordion
      type="multiple"
      className="max-w-lg mx-auto"
      defaultValue={["notifications"]}
    >
      {accordionItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

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
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}

const ExamplePage = () => {
  return (
    <div className='container min-h-[50rem]'>
      <div className="text-center mb-12 bg-background">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          元件範例
        </h1>
        <h2>Button</h2>
        <Button variant={"default"}>default</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"link"}>link</Button>

        <h2>Card</h2>
        <div>{CardImage()}</div>

        <h2>背景顏色&文字</h2>
        <div className='bg-card'>
          bg-card
        </div>
        <div className="bg-card text-card-foreground rounded-lg p-4">
          bg-card text-card-foreground
        </div>

        <h2>Carousel</h2>
        <div>
           {CarouselDemo()}
        </div>

        <h2>Accordion</h2>
        <div>{AccordionMultiple()}</div>
      </div>
    </div>
  );
};


export default ExamplePage;