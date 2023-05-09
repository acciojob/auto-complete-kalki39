import { useState } from "react";

const Search = () => {
  const [data, setData] = useState("");
  let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  let filterArr = fruits.filter((fruit) => fruit.includes(data.toLowerCase()));
  return (
    <>
      <h1>Search Items</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      {filterArr?.length > 0
        ? filterArr.map((fruit) => <li>{fruit}</li>)
        : fruits.map((fruit) => <li>{fruit}</li>)}
    </>
  );
};

export default Search;
