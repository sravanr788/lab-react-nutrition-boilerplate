import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodCard from './components/FoodCard'
import FooData from "./resources/FoodData.js"
import Noresult  from './components/noresult.jsx'
function App() {
  const [search,setSearch]= useState("")
  const filteredData = FooData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });
  
  return (
  <>
    <h1>PRO NUTRITION 🍀</h1>
    <Search setSearch={setSearch} />

    {/* {filter = FooData.filter((e)=>{
      return e.name.toLowerCase().includes(search.toLowerCase())

    })? 
    (filter.map((e,i)=>{
      return  <FoodCard data={e} index={i}/>
    }) )
    : <Noresult />  
  } */}

{filteredData.length === 0 ? (  <Noresult /> ) : (
      filteredData.map((e, i) => (
        <FoodCard key={i} data={e} index={i} />
      ))
  )}

  </>
  )
}


export default App

// const filteredData = FooData.filter((e) => { e.name.toLowerCase().includes(search.toLowerCase());
// });

// (filteredData.length === 0) ? console.log("No results found")
//  : filteredData.map((e,i)=>{
//     return  <FoodCard data={e} index={i}/>
//   })
