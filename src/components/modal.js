import React from 'react'
import Cutbtn from '../img/cut_btn.svg'
import Playerbtn from "../img/plyerbtn.png"
const Modal=(props)=>{
      return(
          <section id="modal">
              <div className="modal_bg" style={{visibility:'visible'}}>
            <div className="upperportion">    
              <div className="modal_img">
                <div className="image_container" onMouseEnter={props.handlehover} onMouseLeave={props.handlehover} >
                <img src={props.mealimg} alt="modalimg" />

                {/* {props.hover?<div className="player_btn" style={{opacity:'1'}}>
                    <img src="../src/img/plyerbtn.png"/>
                </div>:<div className="player_btn" style={{opacity:'0'}}>
                    <img src="../src/img/plyerbtn.png"/>
                </div>} */}
                {props.hover?
                <div className="player_btn" style={{opacity:'1',transition:'all 0.5s linear'}}>
                   <a href={props.youtube} target="_blank"><img src={Playerbtn}/></a> 
                </div>:
                <div className="player_btn" style={{opacity:'0'}}>
                    <img src={Playerbtn}/>
                </div>} 

              </div>
                
              </div>
              <div className="defination_item">
               <img src={Cutbtn}  alt="exit_btn" style={{width:'3em'}} onClick={props.handlebtnclick}/>
         
               <div className="div1">
      <h3><span>dish name</span> :{props.dishname}</h3> 
      <h3><span>type</span> :{props.type}</h3>
               </div>
               <div className="div2"> 
      <h3><span>catagory</span> :{props.catagory}</h3>
               </div>
              </div>
            </div>
               <div className="instruction_area">
                   <div className="instruction_container">
                    <h2>instructions</h2>
      <p>{props.instruction}</p>
                    </div>
               </div>
               </div>
          </section>
        )
}

export default Modal;