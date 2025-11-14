import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

import Spinner from "./pages/Spinner";

const AppLayout = lazy(() => import("./pages/AppLayout"));
const Home = lazy(() => import("./components/home/Home"));
const Cultural = lazy(() => import("./components/cultural/Cultural"));
const Events = lazy(() => import("./components/events/Events"));
const Sports = lazy(() => import("./components/sports/Sports"));
const Technical = lazy(() => import("./components/technical/Technical"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />

              <Route path="cultural" element={<Cultural />} />

              <Route path="events" element={<Events />} />

              <Route path="sports" element={<Sports />} />

              <Route path="technical" element={<Technical />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
