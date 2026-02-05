import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  //
  const { name, quantity, totalPrice } = item;

  return (
    <li className="items-center justify-between py-2 sm:flex">
      <p className="font-medium">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-medium text-stone-500">
          {formatCurrency(totalPrice)}
        </p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
