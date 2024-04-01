import { Details, Home, SignIn, SuccessOrder } from '@/pages';
import { ErrorOrder } from '@/pages/ErrorOrder';
import { Purchases } from '@/pages/Purchases';
import { BaseLayout } from '@/templates/Base';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const BaseRoutes: React.FC = () => {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/success-order" element={<SuccessOrder />} />
        <Route path="/error-order" element={<ErrorOrder />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
    </BaseLayout>
  );
};

export default BaseRoutes;
