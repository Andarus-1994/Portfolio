import React from "react"
import ContentLoader from "react-content-loader" 



const MyLoader = () => (
   
  <ContentLoader 
  className="ContentLoader"
    speed={1}
    width={700}
    height={850}
   
    interval={0.5}
    viewBox="0 0 400 160"
    backgroundColor="rgb(68, 162, 224)"
    foregroundColor="rgb(46, 118, 167)"
  >
 
 <rect x="180" y="36" rx="3" ry="3" width="196" height="26" /> 
    <rect x="189" y="71" rx="3" ry="3" width="187" height="86" /> 
    <rect x="266" y="39" rx="3" ry="3" width="33" height="0" /> 
    <rect x="166" y="04" rx="3" ry="3" width="223" height="22" /> 
    
  </ContentLoader>
)


export default MyLoader