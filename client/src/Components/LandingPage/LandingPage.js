import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";


export default function Landing(){
return (

  <div className="landing">
    

    <div className="emptyLand"> </div>
   
    <div className="container_text">
      <div className="cover" >
      
        <div className="text">
        <h1 className="h1l">DOGAPPEDIA</h1>
        
          
          <p className="texto_landing"> "Dogs are not our whole life, but they make our lives whole."</p>

          <Link to='/dogs'>
            <button className="lbutton"> LETS GO! </button>
          </Link>
         
        </div>
      
  
         
      </div>
    </div>
    

    </div>
    )
}