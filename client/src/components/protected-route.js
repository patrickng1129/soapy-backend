import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ authenticated, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  return authenticated ? children : null;
}

export default ProtectedRoute;
