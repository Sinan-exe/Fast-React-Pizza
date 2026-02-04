function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-lg bg-yellow-400 px-3 py-2 font-semibold tracking-wide text-stone-800 drop-shadow-sm transition-colors duration-300 hover:bg-yellow-300 sm:text-lg md:px-4 md:py-3"
    >
      {children}
    </button>
  );
}

export default Button;
