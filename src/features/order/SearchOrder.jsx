import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-36 rounded-full bg-yellow-100 px-3 py-2 text-sm text-stone-700 transition-all duration-300 placeholder:text-stone-700 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-40 sm:w-80 sm:focus:w-96"
      />
    </form>
  );
}

export default SearchOrder;
