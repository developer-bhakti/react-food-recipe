import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  console.log(mealid);

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);
  };

  if (info != "") {
    getInfo();
  }

  return (
    <div className="flex flex-col">
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="h-screen m-50 flex flex-col">
          <img className="mr-7 ml-7 mt-7 mb-7 border" src={info.strMealThumb} />
          <div>
            <h1 className="text-center font-bold">Recipe Detail</h1>
            <button className=" bg-orange-600 text-white py-2 px-4 rounded-2xl border">
              {info.strMeal}
            </button>
            <h3 className="font-medium text-center mb-4">Instructions</h3>
            <p className="flex justify-center text-center items-center">
              {info.strInstructions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
