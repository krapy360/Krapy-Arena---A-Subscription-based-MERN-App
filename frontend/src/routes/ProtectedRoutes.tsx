import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context";

export const ProtectedRoutes = () => {
    const [state] = useContext(UserContext);

    if (state.loading) return <div> spinner...</div>;

    return state.data ? <Outlet /> : <Navigate to="/" />;
};