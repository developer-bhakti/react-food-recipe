import React from "react";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  console.log(detail);
  return (
    <div>
      {!detail
        ? ""
        : detail.map((curItem) => {
            return (
              <div className="flex flex-col justify-center flex-wrap w-70 m-auto mt-4 gap-2">
                <img
                  className="w-70 h-50 bg-white shadow-2xl"
                  src={curItem.strMealThumb}
                />
                <p className="font-medium text-center">{curItem.strMeal}</p>
                <NavLink to ={`/${curItem.idMeal}`}> <button className="border-2 py-2 px-4 rounded-2xl bg-amber-400 text-white flex justify-center text-center items-center flex-col">
                  Recipe
                </button></NavLink>
               
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
