import './RecipeList.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeList({recipes}) {
  return (
    <div className='recipe-list'>{recipes.map(recipe => <div key={recipe.id} className="card">
        <h1>{recipe.title}</h1>
    <p>{recipe.cookingTime} to make .</p>
    <div>{recipe.method.substring(0,100)}...</div>
    <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
    </div>)}</div>
  )
}
