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
      <h4>{recipe.title}</h4></div>}
    </> 
  )
}

export default Recipe