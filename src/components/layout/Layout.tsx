import * as React from 'react';

import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
