import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./staticPages/ErrorPage";
import PrivacyPolicy from "./staticPages/PrivacyPolicy";
import TermsPage from "./staticPages/TermsPage";
import Faq from "./staticPages/Faq";
import AboutUs from "./staticPages/AboutUs";
import Auctions from "./features/auction/Auctions";
import Product from "./features/auction/Product";
import Login from "./features/auth/Login";
import Singup from "./features/auth/Singup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuctionPage from "./Pages/AuctionPage";
import UserAccountPage from "./Pages/UserAccountPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Auctions />} />
            <Route path="auctions/:id" element={<AuctionPage />} />
            <Route path="me" element={<UserAccountPage />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="singup" element={<Singup />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="faq" element={<Faq />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
