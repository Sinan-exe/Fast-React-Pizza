import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  //
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="items-center justify-between py-2 sm:flex">
      <p className="font-medium">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-medium text-stone-500">
          {formatCurrency(totalPrice)}
        </p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
