import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function Recipe() {
  const {id} = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const {error,isPending,data:recipe} = useFetch(url)
  return (
    <>
    {error && <div>{error}</div>}
    {isPending && <div>loading...</div>}
    {recipe && <div>
      <h4 className='page-title'>{recipe.title}</h4>
      <p>Takes {recipe.cookingTime} to cook.</p>
      <ul>
        {recipe.ingredients.map(ing => <li>{ing}</li>)}
      </ul>
      <p>{recipe.method}</p>
      </div>}
    </> 
  )
}

export default Recipe