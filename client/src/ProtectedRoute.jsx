import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const {loading, isAuthenticated} = useAuth();

  if(loading) return <h1>
    Loading...
  </h1>;

  if (!loading && !isAuthenticated){
    return <Navigate to='/login' replace />//redirect to LoginPage because you are not authenticated
  }

  return <Outlet />;//it works to say that you can contie in the component that is contained in this component in App.jsx
}

export default ProtectedRoute;
