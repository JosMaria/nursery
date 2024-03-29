import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './index.css';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<p>Cargando pagina principal</p>}>
      <RouterProvider router={router} />
      <Toaster />
    </Suspense>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
