import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const [loading, setLoading] = useState(false);
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  console.log(mealid);

  const getInfo = async () => {
    setLoading(true);

    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);

    setLoading(false);
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (loading == true)
    return (
      <p className="flex items-center justify-center h-screen">
        <LoaderCircle className="w-10 h-10 animate-spin" />
      </p>
    );

  return (
    <div className="m-10 border p-10 rounded-2xl bg-blue-100">
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 ">
          <img className="w-96 h-96 rounded-2xl" src={info.strMealThumb} />
          <div className="flex flex-col items-center md:items-start justify-center  ">
            <h1 className=" font-bold text-4xl my-4">
              Recipe Detail For :{" "}
              <span className="text-orange-600"> {info.strMeal}</span>
            </h1>
            {/* <button className="my-5 bg-orange-600 text-white py-2 px-4 rounded-2xl border">
             
            </button> */}
            <h3 className="font-medium  mb-4 text-3xl">Instructions</h3>
            <p className="text-2xl">{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
