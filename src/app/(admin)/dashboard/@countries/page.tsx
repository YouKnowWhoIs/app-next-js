import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { getCountries, getCompanies } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';
import getCountById from '@/lib/utils/getCountById';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const countries = await getCountries();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'countryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="flex items-end gap-2 pb-5 px-5">
        <div>
          {countries.map(({ id, title }) => (
            <p
              key={id}
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >
              {`${title} - ${counts[id] || 0}`}
            </p>
          ))}
        </div>
        <Image width={395} height={262} src="/icons/World.svg" alt="World" />
      </div>
    </DashboardCard>
  );
}
