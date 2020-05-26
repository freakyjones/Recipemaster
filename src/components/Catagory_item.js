import React from 'react'
import Catagory from './catagory'

class CatagoryItem extends React.Component{
   constructor(props){
      super(props)
      
   }
    render(){
        return(
            <div className="Catragory_item">
               <div className="row ">
                <div className="item" >
                   <img src={this.props. Catagoryimg} alt="chicken"/>
                   <h3>{this.props. Catagoryname}</h3>
                </div>
               </div>
            </div>
        )
    }
}

export default CatagoryItem;