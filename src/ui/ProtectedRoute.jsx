import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute() {
  const navigate = useNavigate();

  // 1. Loade the authecticated user
  const { isAuthenticated, isLoading } = useUser();

  useEffect(
    function () {
      // 3. if there is no autheticted user redirect to the /login
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2. while this is happening show a spinner
  if (isLoading) return <Spinner />;

  // 4. if there is authenticted user then render the page

  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
