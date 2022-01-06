import React, { useEffect, useState } from 'react';
import { useDebounce } from "use-debounce";
//Debounce is used to hold API request for some time limit, otherwise it will make a request for every letter typed in the search bar

import { useResultContext } from "../contexts/ResultContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative max-w-md sm:ml-48 md:ml-72 sm:-mt-10 mt-3 border-slate-400">
      <input
        value={text}
        type="text"
        className="container sm:w-96 w-full h-10 dark:bg-gray-200 border rounded-md shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search here or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-5 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
    </div>
  );
};