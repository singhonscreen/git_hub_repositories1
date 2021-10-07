import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <div className="main_container">
    
    <ContentLoader 
    speed={2}
    width={1000}
    height={800}
    // viewBox="0 0 800 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
    >
    <rect x="150" y="20" rx="3" ry="20" width="200" height="16" /> 
    <rect x="150" y="40" rx="3" ry="15" width="150" height="12" /> 
    <rect x="150" y="60" rx="3" ry="12" width="140" height="12" /> 
    <rect x="0" y="150" rx="3" ry="12" width="250" height="12" /> 
    <rect x="0" y="200" rx="3" ry="15" width="90%" height="100" /> 
    <rect x="0" y="310" rx="3" ry="15" width="100%" height="100" /> 
    <rect x="0" y="420" rx="3" ry="15" width="70%" height="100" /> 
    
    <circle cx="70" cy="70" r="70" />
    </ContentLoader>
    </div>
    )
    
    export default MyLoader