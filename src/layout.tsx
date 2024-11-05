import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
