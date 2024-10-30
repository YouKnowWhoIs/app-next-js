'use client';

import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <Header>{`Information about company (${params.id})`}</Header>
    </div>
  );
}
