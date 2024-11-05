import { useState } from "react";
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
  ].reverse();
  /*const links = [
    "/",
    /*"/about",
    "/blog",
    "/current-projects",
    "/all-projects",
  ].reverse();*/

  function updateCurrentPage() {
    console.log(window.location.hash);
  }

  return (
    <div className="nav-container">
      <div className="site-title">
        <SiteTitle />
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          {items.map((item) => (
            <li key={item.at(0)}>
              <Link
                to={
                  typeof item.at(1) !== "undefined" // Go to page ___ is to the corresponding index in link, if links[index] is undefined, go to home page "/"
                    ? item.at(1)!
                    : "/"
                }
                className={"nav-link text-center"}
                key={item.at(0)}
                onClick={updateCurrentPage}
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
