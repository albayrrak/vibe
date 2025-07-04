import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import React from 'react';

const Page = async () => {
  const users = await prisma.user.findMany();

  return <div className="font-bold text-rose-500"></div>;
};

export default Page;
