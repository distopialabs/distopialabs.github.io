import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  return <div className="flex flex-col min-h-screen bg-light">
      <Navigation />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>;
}