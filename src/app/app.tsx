import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import './app.css';
import { Header, SideNav } from './components';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../mui.config';

const Nser = React.lazy(() => import('nser/Module'));
const CmsCreateBanner = React.lazy(() => import('cms/create-banner'));
const CmsPlannedOutage = React.lazy(() => import('cms/planned-outage'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <header className="header">
            <Header />
          </header>
          <article className="article">
            <Routes>
              <Route path="/cms/create-banner" element={<CmsCreateBanner />} />
              <Route
                path="/cms/planned-outage"
                element={<CmsPlannedOutage />}
              />

              <Route path="/nser" element={<Nser />} />
            </Routes>
          </article>
          <aside className="aside">
            <SideNav />
          </aside>
        </div>
      </ThemeProvider>
    </React.Suspense>
  );
}

export default App;
