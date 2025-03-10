import React from "react";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  console.log(detail);
  return (
    <div className="flex items-center justify-center flex-wrap  gap-2">
      {!detail
        ? ""
        : detail.map((curItem) => {
            return (
              <div className="flex flex-col items-center w-70 m-4 border rounded-2xl p-4 hover:shadow-2xl">
                <img
                  className="w-70 h-50 bg-white rounded-xl"
                  src={curItem.strMealThumb}
                />
                <p className="font-medium text-center my-3">{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  {" "}
                  <button className="border-2 py-2 px-4 rounded-2xl bg-amber-600 text-white  ">
                    Recipe
                  </button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
