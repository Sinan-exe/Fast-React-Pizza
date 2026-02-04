import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const styles =
    "inline-block rounded-lg bg-yellow-400 px-3 py-2 font-semibold tracking-wide text-stone-800 drop-shadow-sm transition-colors duration-300 hover:bg-yellow-300 sm:text-lg ";

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles}>
      {children}
    </button>
  );
}

export default Button;
