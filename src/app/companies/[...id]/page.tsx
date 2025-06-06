import React from 'react';
import Header from '@/app/components/header';
interface PageProps {
  params: Promise<{ id: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <>
      <Header>Companies ({resolvedParams.id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
