import React from 'react';
import { headers } from 'next/headers';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default async function ServerComponentCopy({
  children,
}: ServerComponentProps) {
  console.log('Server Component Copy');
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
