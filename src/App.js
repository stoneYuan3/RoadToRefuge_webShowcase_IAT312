import logo from './logo.svg';
import './App.css';

import { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";

export const NavMain = () => {
  return (
    <>
    <header className="flex">
        <nav className="flex nav_main">
            <div className="logo">
                <Link to="/">
                    <img src="/img/logo.svg" />
                    <p>Road To Refuge</p>
                </Link>
            </div>

            <div className="flex links-nav">
              <Link to="/">Home</Link>
              <Link to="GDD">Game Design Document</Link>
              <Link to="members">Members & Roles</Link>
                {/* <Link onClick={() => setPage("gallery")} to={homelink} className={currentPage.gallery?"style-selected":""}>Gallery</Link>
                <Link onClick={() => setPage("about")} to="about" className={currentPage.about?"style-selected":""}>About Me</Link> */}
            </div>
        </nav>
    </header>
    <Outlet />
    </>
  );
}

export const App = (props) => {
  return (
    <div className="flex section-main">
      {props.content}
    </div>
  );
}

