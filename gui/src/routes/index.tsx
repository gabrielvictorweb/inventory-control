import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './dashboard';
import BaseRoutes from './base';
import ProvidersApplication from '@/providers';

const RouterConfig: React.FC = () => {
  return (
    <ProvidersApplication>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="/*" element={<BaseRoutes />} />
        </Routes>
      </BrowserRouter>
    </ProvidersApplication>
  );
};

export default RouterConfig;
