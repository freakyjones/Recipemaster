import React from 'react'
import Modal from './modal'
class Items extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mealid:props.id,
            dishname:'',
            type:'',
            catagory:'',
            instruction:'',
            modal_visibility:false,
            hover:false,
            youtube:''
        }
        this.handleclick=this.handleclick.bind(this)
        this.handlebtnclick=this.handlebtnclick.bind(this)
        this.handlehover=this.handlehover.bind(this)
    }
  async handleclick(){
    try{
        const res= await   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.state.mealid}`);
        const data= await res.json();
        console.log(data.meals[0])
        data.meals.forEach(element => {
             this.setState(()=>{
                 const newdishname=element.strMeal;
                 const newtype=element.strArea;
                 const newcatagory=element.strCategory;
                 const newinstruction=element.strInstructions;
                 const visibility=!this.state.modal_visibility
                 const youtube=element.strYoutube
                 return{
                     dishname:newdishname,
                     type:newtype,
                     catagory:newcatagory,
                     instruction:newinstruction,
                     modal_visibility:visibility,
                     youtube:youtube
                 }
             })
        });
    }catch{
       console.log('error')
 }
     
        
    }
    handlebtnclick(){
        this.setState(()=>{
            let newvisibility=!this.state.modal_visibility;
            return{
                modal_visibility:newvisibility
            }

        })
    }
    handlehover(){
       this.setState(()=>{
           const hover=!this.state.hover
           return{
               hover:hover
           }
       })
       console.log(this.state.hover)
    console.log('hello')
    }
    render(){
        return(
            <div className="item">
                 <img  src={this.props.mealimg} alt="receipe img" onClick={this.handleclick} style={{cursor:'pointer'}}/>
                 {this.state.modal_visibility?  
                  <Modal
                 mealimg={this.props.mealimg}
                 dishname={this.state.dishname}
                 type={this.state.type}
                 catagory={this.state.catagory}
                 instruction={this.state.instruction}
                 handlebtnclick={this.handlebtnclick}
                 handlehover={this.handlehover}
                 hover={this.state.hover}
                 youtube={this.state.youtube}
                 />
                 :null }
             </div>
           
        )
    }
}

export default Items;