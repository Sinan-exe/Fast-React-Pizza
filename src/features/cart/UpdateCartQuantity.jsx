import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaeItemQuantity,
} from "./cartSlice";

function UpdateCartQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2">
      <Button
        type="rounded"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        type="rounded"
        onClick={() => dispatch(increaeItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;
