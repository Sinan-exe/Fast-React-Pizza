import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuanity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuanity);
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-3 font-semibold text-stone-300">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}$</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
