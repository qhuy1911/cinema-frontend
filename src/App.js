import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { UserLayout } from "./components/Layouts";
import { Fragment, useEffect, useState } from "react";
import AuthService from "./services/AuthService";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      if (user.roles.includes("ROLE_ADMIN")) {
        setIsAdmin(true);
      }
    }
  }, [isAdmin]);
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = UserLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = UserLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  currentUser ? (
                    isAdmin ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <Navigate to={"/"} replace />
                    )
                  ) : (
                    <Navigate to={"/login"} replace />
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
