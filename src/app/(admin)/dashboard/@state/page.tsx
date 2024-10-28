import React from 'react';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import { getSummaryStats } from '@/lib/api';

export interface PageProps {}

const labelByStat: { [key: string]: string } = {
  promotion: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
        <div key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key] || 0}
          />
        </div>
      ))}
    </div>
  );
}