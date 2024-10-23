'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import LogoUploader from './logo-uplodaer';
import InputField from './input-field';
import Button from './button';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-x1">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
            />
            <InputField label="Joined date" type="date" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
