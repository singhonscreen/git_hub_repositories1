import React, {useEffect, useState} from 'react'
import { Pagination } from './Pagination';
import axios from 'axios';



const Repos = ({ searchData, setLoading, loading}) => {
    const [reposData, setReposData] = useState([{ }])
    const [currpage, setCurrpage] = useState(1)
    const [cardPerPage] = useState(10)

    const uri1 = `https://api.github.com/users/${searchData}/repos`;
    useEffect(() => {
      const repoData = async () => {
        setLoading(true);
        const res1 = await axios.get(uri1)
        setLoading(true)
        setReposData(res1.data)
        setLoading(false);
        // console.log(res1);
      }
      repoData();
    }, [])

    const indexOfLastCard = currpage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currCard = reposData.slice(indexOfFirstCard, indexOfLastCard )
    // const currCard = reposData.slice(0, 4 )

    //change page
   const paginate =(pageNumber)=>{
       setCurrpage(pageNumber)
   }
   
    return (
        <>
        <div className="main_container">
        <div className="card_container">
        {
            currCard.map((item)=>{
                return(
        
                    <div className="cards" key ={item.id}>
                    <div className="repo_card">
                    <h3>{item.name}</h3>
                    <p>{
                            item.description
                        }</p>
                        <div className="categories">
                        <button className="btn1">{item.language}</button>
                        
                        </div>
                        </div>
                        
                        </div>
                        )
                    })   
                }
                </div>
                <Pagination totalPage= {reposData.length} currpage = {currpage}  cardPerPage= {cardPerPage} paginate={paginate} />
                </div>
                </>
    )
}

export default Repos
