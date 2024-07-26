import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './global.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Inventory } from './components/Inventory/Inventory.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
]);

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
)
