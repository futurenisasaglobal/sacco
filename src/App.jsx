import React from 'react';
   import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
   import axios from 'axios';

   // Public Pages
   import HomePage from './pages/public/HomePage';

   // Layouts
   import MainLayout from './layouts/MainLayout';
   import AuthLayout from './layouts/AuthLayout';

   // Portal Pages
   import LoginPage from './pages/auth/LoginPage';
   import RegisterPage from './pages/auth/RegisterPage';
   import DashboardPage from './pages/app/DashboardPage';
   import LoansPage from './pages/app/LoansPage';
   import PaymentsPage from './pages/app/PaymentsPage';
   import SavingsPage from './pages/app/SavingsPage';
   import DownloadsPage from './pages/app/DownloadsPage';
   import ReportsPage from './pages/app/ReportsPage';
   import ProfilePage from './pages/app/ProfilePage';
   import SettingsPage from './pages/app/SettingsPage';


   import AboutPage from './pages/public/AboutPage';
   import ProductsPage from './pages/public/ProductsPage';
   import PromotionsPage from './pages/public/PromotionsPage';
  //  import DownloadsPage from './pages/public/DownloadsPage';
   import ContactPage from './pages/public/ContactPage';

   const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
   export const apiClient = axios.create({
     baseURL: API_BASE_URL,
     headers: { 'Content-Type': 'application/json' },
   });

   export default function App() {
     return (
       <Router>
         <Routes>
           {/* Public */}
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/contact" element={<ContactPage />} />

           {/* Portal */}
           <Route path="/portal/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
           <Route path="/portal/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />

           {/* Member App */}
           <Route path="/app/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
           <Route path="/app/savings" element={<MainLayout><SavingsPage /></MainLayout>} />
           <Route path="/app/loans" element={<MainLayout><LoansPage /></MainLayout>} />
           <Route path="/app/payments" element={<MainLayout><PaymentsPage /></MainLayout>} />
           <Route path="/app/downloads" element={<MainLayout><DownloadsPage /></MainLayout>} />
           <Route path="/app/reports" element={<MainLayout><ReportsPage /></MainLayout>} />
           <Route path="/app/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
           <Route path="/app/settings" element={<MainLayout><SettingsPage /></MainLayout>} />

           {/* Legacy redirects */}
           <Route path="/dashboard" element={<Navigate to="/app/dashboard" replace />} />
           <Route path="/login" element={<Navigate to="/portal/login" replace />} />
         </Routes>
       </Router>
     );
   }