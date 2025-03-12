import React, { useState } from "react";
import Mealcards from "./Mealcards";
import { LoaderCircle } from "lucide-react";

const Mainpage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search == "") {
      setMsg("Please Enter Someting");
    } else {
      setLoading(true);
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      setData(jsonData.meals);
      setMsg("");
      setLoading(false);
    }
  };

  if (loading == true)
    return (
      <p className="flex items-center justify-center h-screen">
        <LoaderCircle className="w-10 h-10 animate-spin" />
      </p>
    );
  return (
    <>
      <h1 className="text-center my-5 text-4xl font-semibold">FOOD RECIPE APP</h1>
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
          {data === null ? (
            <p>No dish available</p>
          ) : (
            <Mealcards detail={data} />
          )}
        </div>
      </div>
    </>
  );
};

export default Mainpage;
