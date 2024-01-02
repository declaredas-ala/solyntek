import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "hooks/useAuthContext";

import Home from "pages/Home";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import UsersPage from "pages/Users";


const PrivateRoute = ({ element, redirectTo }) => {
  const { user } = useAuthContext();

  return user ? (
    <React.Fragment>{element}</React.Fragment>
  ) : (
    <Navigate to={redirectTo} />
  );
};

const ProjectRoutes = () => {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={!user ? <LoginPage /> : <Navigate to="/users" />} 
            />
              <Route 
              path="/register" 
              element={!user ? <RegisterPage /> : <Navigate to="/users" />} 
            />
            <Route
              path="/users/*"
              element={
                <PrivateRoute
                  element={<UsersPage />}
                  redirectTo="/login"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default ProjectRoutes;
