import React, { useState } from "react";
import Mealcards from "./Mealcards";

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  }

  const myFun = async () => {
    if(search == ""){
     setMsg("Please Enter Someting");
    } else {
        const get = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
          );
          const jsonData = await get.json();
          setData(jsonData.meals);
          setMsg("");
    }
 
  }


  return (
    <>
    <h1 className="text-center">FOOD RECIPE APP</h1>
      <div>
        <div className="flex justify-center mt-5">
          <input
            className="border-2 py-2 px-10 mr-2 rounded-sm bg-gray-200"
            type="text"
            placeholder="Enter Dishes"
            onChange={handleInput}
          />
          <button
            className="border-2 py-2 px-4 rounded-sm bg-amber-500 text-white items-center "
            onClick={myFun}
          >
            Search
          </button>
        </div>
        <h4 className="text-center mt-4 text-red-600">{msg}</h4>
        <div>
            <Mealcards detail={data}/>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
