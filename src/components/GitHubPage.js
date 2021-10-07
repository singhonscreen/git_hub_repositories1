
import React, {useState, useEffect} from 'react'
import axios from 'axios';
// import Loader from './Loader';
import MyLoader from './Loader';

// import Repos from './Repos';

const GitHubPage = ({ searchData, setLoading,loading }) => {
    const [getData, setGetData] = useState({})

    const uri = `https://api.github.com/users/${searchData}`;
    useEffect(() => {
      const headerData = async () => {
        setLoading(true)
        const res = await axios.get(uri)
        setGetData(res.data)
        setLoading(false)
      }
      headerData()
    }, [])
   
    if(loading) return <MyLoader />

    return (
        <>
        
            <div className="main_container">
            <div className="header_container">
            <div className="header">
                <div className="img_contain">
                    <img src={getData.avatar_url} alt="not found" />
                </div>
                <div className="header_data">
                    <h1>{getData.name}</h1>
                    <h4>{getData.bio}</h4>
                    <p><i className="fas fa-map-marker-alt"></i>{getData.location}</p>
                    <p>{getData.twitter_username}</p>
                </div>
                </div>
                <p>{getData.url}</p>
        </div>
       
            </div>
        </>
    )
}


export default GitHubPage
