import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./staticPages/ErrorPage";
import PrivacyPolicy from "./staticPages/PrivacyPolicy";
import TermsPage from "./staticPages/TermsPage";
import Faq from "./staticPages/Faq";
import AboutUs from "./staticPages/AboutUs";
import Auctions, {
  loader as auctionsLoader,
} from "./features/auction/Auctions";
import Product, { loader as productLoader } from "./features/auction/Product";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Auctions />,
        errorElement: <ErrorPage />,
        loader: auctionsLoader,
      },
      {
        path: "/product/:productId",
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;