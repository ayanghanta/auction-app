import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./staticPages/ErrorPage";
import PrivacyPolicy from "./staticPages/PrivacyPolicy";
import TermsPage from "./staticPages/TermsPage";
import Faq from "./staticPages/Faq";
import AboutUs from "./staticPages/AboutUs";
import Auctions from "./features/auction/Auctions";
import Login from "./features/auth/Login";
import Singup from "./features/auth/Singup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuctionPage from "./Pages/AuctionPage";
import UserAccountPage from "./Pages/UserAccountPage";
import AddNewProduct from "./features/product/AddNewProduct";
import { Toaster } from "react-hot-toast";
import ScrolltoTop from "./ui/SrolltoTop";
import LiveAuctions from "./features/auction/LiveAuctions";
import MyProducts from "./Pages/MyProducts";
import ManageProducts from "./Pages/ManageProducts";
import AdminProductReview from "./features/admin/AdminProductReview";
import { CurrentBidderProvider } from "./contexts/CurrentBidderContext";
import MyWinings from "./features/winings/MyWinings";
import MyBids from "./features/bid/MyBids";
import MyOrders from "./features/orders/MyOrders";
import Checkout from "./features/checkout/Checkout";
import ThankYou from "./ui/ThankYou";
import OrderDetails from "./features/orders/OrderDetails";
import ProtectedRoute from "./ui/ProtectedRoute";
import LandingPage from "./Pages/LandingPage";

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
          <Route path="/" element={<LandingPage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Auctions />} />
            <Route
              path="auctions/:id"
              element={
                <CurrentBidderProvider>
                  <AuctionPage />
                </CurrentBidderProvider>
              }
            />
            <Route path="live-auctions" element={<LiveAuctions />} />

            <Route element={<ProtectedRoute />}>
              <Route path="me" element={<UserAccountPage />} />
              <Route path="checkout/:productId" element={<Checkout />} />
              <Route path="myBids" element={<MyBids />} />
              <Route path="myProducts" element={<MyProducts />} />
              <Route path="addProduct" element={<AddNewProduct />} />
              <Route path="manageProducts" element={<ManageProducts />} />
              <Route
                path="review/:productId"
                element={<AdminProductReview />}
              />
              <Route path="thank-you" element={<ThankYou />} />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="myOrders/:orderId" element={<OrderDetails />} />
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="singup" element={<Singup />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="faq" element={<Faq />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ScrolltoTop />
      </BrowserRouter>

      <Toaster
        gutter={12}
        position="top-center"
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "#494949",
            borderRadius: "4px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
