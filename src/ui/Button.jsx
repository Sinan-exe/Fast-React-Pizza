import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const styles =
    "inline-block rounded-lg bg-yellow-400 font-semibold tracking-wide text-stone-800 drop-shadow-sm transition-colors duration-300 hover:bg-yellow-300  ";

  const className = {
    primary: styles + " px-3 py-2 text-sm sm:text-lg",
    small: styles + "px-2 py-1 text-xs md:text-sm tracking-normal",
  };

  if (to) {
    return (
      <Link to={to} className={className[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className[type]}>
      {children}
    </button>
  );
}

export default Button;
