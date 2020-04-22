import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';



function UsersContainer ({ userData, fetchUsers }) {

 var a=["1","10"];
 

  const [number, setNumber] = React.useState({
    value: 'all',
  })
 
  useEffect(() => {
    
    fetchUsers();
   
  }, [fetchUsers])

  let X =number.value;
  let Y = 0;
  function KeyPress(e){
    if(e.keyCode === 13){
      
      setNumber({ value: e.target.value.replace(/^0+/, ''), });
      console.log(number)
      }
  }

  function handleChange(e) {
    X = e.target.value
  }

  function Validate(){
    setNumber({ value:  X.replace(/^0+/, ''),})
  }

  function SplitArray(word){
     const words = word.split("-");
     return words;
  }




   
  let id=number.value;
  a = SplitArray(id.toString());
  
  

  return userData.loading ? (
 <div><br></br>
<div id="typing-loader"></div></div>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
        <div className="centralize-About">
  
    
    <label>Search:</label>
    
    <input className="inputUsers" id="myInput" type="text" defaultValue="All"  onChange={handleChange} onKeyDown={KeyPress}  ></input> 
    <button className="searchButton" onClick={Validate}><FontAwesomeIcon icon={faSearch} size="1x"  /><span className="tooltiptext">Search</span></button>
    <div>Example of search: "3-7","All" and also by name .</div>
   <p style={{fontSize:'3rem', fontFamily: 'Spartan, sans-serif', marginTop:'15px'}}>Find people by Name or ID</p>
    </div>
      <div className="boxSearch">
     
      {userData && 
    userData.users &&
    userData.users.map(user =>  {
      if(!a[1]){a[1]=id}
  


      if(id.toString() ==='' ){return null} 
      
    
        if(user.name.toString().toLowerCase().includes(id.toString().toLowerCase()) || user.id.toString() ===id.toString()){return  <div className="searchContent" key={user.id} id={Y=Y+1}>
        <Fade>  
        <p>{user.id}.<b> {user.name}</b>  with e-mail: {user.email}  and lives in the city: <u>{user.address.city}</u></p>
        </Fade>  </div> } 
      
     
    if(id.toString().toLocaleLowerCase() ==='all') {return       <div className="searchContent"  key={user.id} id={Y=Y+1}>
    <Fade>  
      <p>{user.id}.<b> {user.name}</b> with e-mail: {user.email}  and lives in the city: <u>{user.address.city}</u></p>
      </Fade> 
        </div> } 
     
        if((a[0].toString()<= user.id && user.id<= a[1].toString()) || (a[0].toString()>= user.id && user.id>= a[1].toString())) {return       <div className="searchContent" key={user.id} id={Y=Y+1}>
      <Fade> 
       <p>{user.id}. <b> {user.name}</b> with e-mail: {user.email}  and lives in the city: <u>{user.address.city}</u></p>
       </Fade> 
    </div> } 

      
    else return null; 
    }
  
    )
    
    }
   
      </div>
      
      {Y===0 && <h2>Nothing found</h2>}
    </div>
  )
        } 


    

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)