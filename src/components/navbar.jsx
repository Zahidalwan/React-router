import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="flex h-[50px] justify-between px-5 items-center ">
        <li className="">
          {/* <Link to="/">Login</Link> */}
          <button onClick={() => navigate("/")}>Login</button>
        </li>
        <li>
          {/* <Link to="/register">Register</Link> */}
          <button onClick={() => navigate("/register")}>Register</button>
        </li>
        <li>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
