import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import SiteTitle from "./SiteTitle";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const items = [
    ["Home", "/"],
    /*"About",
    "Blog",
    "Current Projects",*/
    ["All Projects", "/all-projects"],
    ["Portfolio V2", "/portfoliov2"],
  ].reverse();
  /*const links = [
    "/",
    /*"/about",
    "/blog",
    "/current-projects",
    "/all-projects",
  ].reverse();*/

  const [currentPath, setCurrentPath] = useState("/404");

  /*let index = -1;
  for (let i = 0; i < items.length; i++) {
    if (items.at(i)!.at(1) === window.location.hash.slice(1)) {
      index = i;
    }
  }
  setSelectedIndex(index);*/

  // On page change, update the navbar
  const location = useLocation();
  useEffect(() => {
    //console.log("Route changed:", location.pathname);
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="nav-container">
      <div className="site-title">
        <SiteTitle />
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          {items.map((item) => (
            <li
              key={item.at(0)}
              className={currentPath === item.at(1) ? "active" : " "}
            >
              <Link
                to={
                  typeof item.at(1) !== "undefined" // Go to page ___ is to the corresponding index in link, if links[index] is undefined, go to home page "/"
                    ? item.at(1)!
                    : "/"
                }
                className={"nav-link text-center"}
                key={item.at(0)}
                /*onClick={}*/
              >
                {item.at(0)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
