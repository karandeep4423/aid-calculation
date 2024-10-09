// src/routes/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const ProtectedRoute = () => {
    const { token } = useAuth();

    // If the user is not authenticated, redirect to the login page
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // If authenticated, render the nested route/component
    return <Outlet />;
};

export default ProtectedRoute;
