 import { Link } from "react-router-dom";

export default function Header (props){
    return (
            <header>
              <h1>My Portfolio Page</h1>
              <nav className="header">
                <Link to="/">
                  <div>HOME</div>
                </Link>
                <Link to="/about">
                  <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                  <div>PROJECTS</div>
                </Link>
              </nav>
            </header>
          );
        }