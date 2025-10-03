import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SEOStructuredData } from './components/SEOStructuredData';
import { Home } from './pages/Home';
import { People } from './pages/People';
import { Projects } from './pages/Projects';
import { Publications } from './pages/Publications';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
export function App() {
  return <Layout>
      <SEOStructuredData />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>;
}