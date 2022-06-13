import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Header from './Components/Header/Header';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
