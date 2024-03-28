import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import ProtectedRoute from "./protectedRoute";
import Dashboard from "../pages/dashboard/dashboard";

function RoutesContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard"  >
        <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

      </Route>
    </Routes>
  );
}

export default RoutesContainer;
