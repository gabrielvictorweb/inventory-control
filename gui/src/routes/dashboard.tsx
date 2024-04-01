import { Products } from '@/pages/Dashboard/Products';
import { DashboardLayout } from '@/templates/Dashboard';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardRoutes: React.FC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
