import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div ClassName="nav">
      <Link to="/Header">
        <h2>Header</h2>
      </Link>

      <Link to="/About">
        <h2>About Me</h2>
      </Link>

      <Link to="/Footer">
        <h2>Footer</h2>
      </Link>
    </div>
  );
}
