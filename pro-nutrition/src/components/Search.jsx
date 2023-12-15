import React from "react";

function Search(props){
    const {setSearch} = props;
    return(
        <>
        <h1>Search</h1>
        <input type="text" 
        style={{
            width : "400px",
            padding : "10px 30px",
            fontSize : "large",
        }}
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        placeholder="Search Food here 🍌"
        />
        </>
    )
}

export default Search