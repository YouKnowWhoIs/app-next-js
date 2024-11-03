'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './button';

export default function ButtonCompanies() {
  const router = useRouter();

  return <Button onClick={() => router.push('/companies')}>Companies</Button>;
}
