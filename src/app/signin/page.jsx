'use client';
import SignInPage from '@/PagesWeb/SignInPage';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <div>
      <SignInPage />
      <ToastContainer />
    </div>
  );
};

export default page;
