import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./layout.css";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();
  const hideNavBarPages = ["/"];

  useEffect(() => {
    // Hide the navbar when on the portfolio page
    const navBar = document.getElementById("nav-bar");
    const body = document.querySelector("body");

    // Remove nav bar on pages that don't use it
    if (navBar != null)
      navBar.style.display =
        hideNavBarPages.indexOf(location.pathname) >= 0
          ? "none"
          : "inline-flex";

    // Change body when on portfolio v2
    if (body != null) {
      if (location.pathname == "/") body.classList.add("body-v2");
      else body?.classList.remove("body-v2");
    }
  }, [location]);

  return (
    <>
      {<NavBar />}
      <Outlet />
    </>
  );
}

export default Layout;
