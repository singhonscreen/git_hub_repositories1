import React, {useState} from 'react'

export const Pagination = ({ cardPerPage,totalPage,paginate, currpage }) => {
    
    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(totalPage/cardPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className = "pagination">
            {
                pageNumbers.map((number)=>(
                    <li key = {number}  className = {currpage === number ? 'active' : null } onClick={()=>paginate(number)} >
                    
                    {number}
                    
                    </li>
                ))
            }
            </ul>
        </nav>
    )
}
