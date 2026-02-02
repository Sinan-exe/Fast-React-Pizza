import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast-React-Pizza-Co</Link>
      <p className="flex bg-white p-4 text-center">Sinan</p>

      <SearchOrder />
    </header>
  );
}

export default Header;
