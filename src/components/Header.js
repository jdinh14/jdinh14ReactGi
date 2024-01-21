import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {

    return (
      <header>
        <div className="App-headerr">
            <ul>
        <Link to="/">
        <p>Home</p>
        </Link>

        <Link to="/Easy">
              <p>Easy</p>
            </Link>

            <Link to="/Medium">
            <p>Medium</p>
            </Link>
            </ul>

            <Link to="/Hard">
              <p>Hard</p>
            </Link>

            </div>
      </header>
  
    );
  }