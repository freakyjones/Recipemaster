import React from 'react'
import Items from './items'
class SearchByLetter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            meals:[]
        }
        this.handleclick=this.handleclick.bind(this)
    }
  async  handleclick(event){
        const value=event.target.textContent.slice(0,1);
        console.log(value)

        const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
        const data=await res.json();
        const meal=data.meals;
        console.log(meal[0])
        this.setState({meals:meal})
    }
    render(){
        const mealitem=this.state.meals.map(ele=>{
            return <Items
                         key={ele.idMeal}
                         id={ele.idMeal}
                         mealimg={ele.strMealThumb}
            />
        })
        return(
            <section id="SearchByLetter">
                  <div className="container">
                      <div className="column">
                       <h1>search any receipe by clicking his first number</h1>
                       <span>
                          <h2 onClick={this.handleclick} >A/</h2> 
                          <h2 onClick={this.handleclick} >B/</h2>
                          <h2 onClick={this.handleclick} >C/</h2>
                          <h2 onClick={this.handleclick} >D/</h2>
                          <h2 onClick={this.handleclick} >E/</h2>
                          <h2 onClick={this.handleclick} >F/</h2>
                          <h2 onClick={this.handleclick} >G/</h2>
                          <h2 onClick={this.handleclick} >H/</h2>
                          <h2 onClick={this.handleclick} >I/</h2>
                          <h2 onClick={this.handleclick} >J/</h2>
                          <h2 onClick={this.handleclick} >K/</h2>
                          
                          <h2 onClick={this.handleclick} >L/</h2>
                          <h2 onClick={this.handleclick} >M/</h2>
                          <h2 onClick={this.handleclick} >N/</h2>
                          <h2 onClick={this.handleclick} >O/</h2>
                          <h2 onClick={this.handleclick} >P/</h2>
                          <h2 onClick={this.handleclick} >Q/</h2>
                          <h2 onClick={this.handleclick} >R/</h2>
                          <h2 onClick={this.handleclick} >S/</h2>
                          <h2 onClick={this.handleclick} >T/</h2>
                          <h2 onClick={this.handleclick} >W/</h2>
                          <h2 onClick={this.handleclick} >V/</h2>
                          <h2 onClick={this.handleclick} >X/</h2>
                          <h2 onClick={this.handleclick} >Y/</h2>
                          <h2 onClick={this.handleclick} >Z</h2>
                           </span>
                       </div>
                  </div>
                  <div className="container" >
                     <div className="row item_positionar">
                         {mealitem}
                    </div>
                </div>
            </section>
        )
    }
}

export default SearchByLetter;