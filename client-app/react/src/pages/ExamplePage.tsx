import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ExamplePage = () => {
  return (
    <div className='h-[50rem]'>
      <div className="text-center mb-12 bg-background">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          元件範例
        </h1>
        <Button variant={"default"}>default</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"link"}>link</Button>
        <Card className='m-2'>Card</Card>
        <div className='bg-card'>
          bg-card
        </div>
        <div className="bg-card text-card-foreground rounded-lg p-4">
          bg-card text-card-foreground
        </div>
      </div>
    </div>
  );
};


export default ExamplePage;