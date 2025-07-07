import { caller } from '@/trpc/server';
import React from 'react';

const Page = async () => {
  const data = await caller.createAI({ text: 'hello' });
  console.log(data.greeting);

  return <div className="font-bold text-5xl text-rose-500">Hello world</div>;
};

export default Page;
