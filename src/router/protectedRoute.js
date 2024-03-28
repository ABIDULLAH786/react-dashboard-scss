import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashLayout from '../components/layouts/DashLayout';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  let isAuthenticated = (user?.role === "ADMIN" || user?.role == "STUDENT") && (user.userName) || true

  if (!isAuthenticated)
    navigate("/login")


  return <DashLayout>{children}</DashLayout>
}

export default ProtectedRoute;