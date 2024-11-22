import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from './components/theme-provider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <React.StrictMode>
      <div style={{ height: '60vh' }}>
        <RouterProvider router={router} />
      </div>
      <div style={{ height: '40vh' }}>
        {/* "At a glance" content goes here */}
      </div>
    </React.StrictMode>
  </ThemeProvider>
)
