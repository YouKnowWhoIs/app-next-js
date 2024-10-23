'use client';

import React from 'react';
import CompanyForm, { CompanyFormProps } from './company-form';
import Modal, { ModalProps } from './modal';

export interface CompanyFormModadlProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModadlProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
