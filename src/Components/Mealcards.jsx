import React from 'react'

const Mealcards = ({detail}) => {
    console.log(detail);
  return (
    <div>
        {!detail ? "" : detail.map((curItem)=> {
            return(
                <div className='flex flex-col justify-center flex-wrap w-70 m-auto mt-4 gap-2'>
                   <img className='w-70 h-50 bg-white shadow-2xl' src={curItem.strMealThumb}/>
                   <p className='font-medium text-center'>{curItem.strMeal}</p>
                   <button className='border-2 py-2 px-4 rounded-2xl bg-amber-500 text-white '>Recipe</button>
               </div>
            )
        })
        
            }
    </div>
  )
}

export default Mealcards