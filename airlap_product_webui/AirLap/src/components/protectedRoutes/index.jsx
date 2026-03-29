import { Navigate, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from '../../constants';

function isLoggedIn() {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!token) return false;
  else 
  return true;
}

export default function ProtectedRoutes() {
  const auth = isLoggedIn();
  return auth ? <Outlet /> : <Navigate to="/" />;
}
