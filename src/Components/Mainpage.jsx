import React, { useState } from "react";
import Mealcards from "./Mealcards";

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const handleInput = (event) => {
    setSearch(event.target.value);
  }

  const myFun = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await get.json();
    // console.log(jsonData.meals);
    setData(jsonData.meals);
  };
//   console.log(data);

  return (
    <>
      <div>
        <div className="flex justify-center mt-5">
          <input
            className="border-2 py-2 px-10 mr-2 rounded-sm bg-gray-200"
            type="text"
            placeholder="Enter Dishes"
            onChange={handleInput}
          />
          <button
            className="border-2 py-2 px-4 rounded-sm bg-amber-500 text-white"
            onClick={myFun}
          >
            Search
          </button>
        </div>
        <div>
            <Mealcards detail={data}/>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
