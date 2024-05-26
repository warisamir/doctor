import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"
import { useContext } from "react"

const ProtectedRoute = ({children, allowedRoles}) => {

    const {token ,role}=useContext(AuthContext);
    const isAllowed=allowedRoles.includes(role);
    const accessibleRoute=token && isAllowed? children: <Navigate to="/login" replace={true} />;

  return accessibleRoute;
}

export default ProtectedRoute