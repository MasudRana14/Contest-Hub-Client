import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = (children) => {
    const [user, loading] = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();


    const location = useLocation();

    if (loading || isAdminLoading) {
        return < div className="flex justify-center mx-auto py-20">
            <span className="loading loading-spinner text-success w-20"></span>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default AdminRoute;