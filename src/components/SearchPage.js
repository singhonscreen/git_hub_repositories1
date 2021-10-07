import React from 'react'
import history from './history'


const SearchPage = ({ setState, state, setSearchData, searchData}) => {
    const handleChange =(e)=>{
        setState(e.target.value)
     }
     const handleSearchData = ()=>{
    setSearchData(state);
  history.push(`/users/${state}/repos`) 
   }
    return (
        <div className="App">
        <div className="container">
        <div className="center_div">
        <h1>Welcome to the Github Search</h1> 
        <input className="input_Search" type="text" placeholder="Enter your git repo name" onChange={handleChange} />
        <input className="btn" type="submit" value='Search' onClick={handleSearchData} />
        </div>
        </div>
       
        </div>
    )
}

export default SearchPage;
