import React from 'react'
import './Home.css'
import useFetch from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const {error,isPending,data} = useFetch("http://localhost:3000/recipes")
  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>loading...</div>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
