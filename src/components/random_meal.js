import React from 'react'
import RandomMealItem from './RandomMeal_Item'
import Items from './items'
class RandomMeal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            meal:[]
        }
        this.handleclick=this.handleclick.bind(this)
    }
    async handleclick(){
       const res=await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
       const data= await res.json();
       const newmeal=data.meals
       console.log(newmeal)
       this.setState({meal:newmeal})
    }
    render(){
        const mealitem=this.state.meal.map(ele=>{
            return <Items
                         key={ele.idMeal}
                         id={ele.idMeal}
                         mealimg={ele.strMealThumb}
            />
        })
        return(
          <section id="RandomMeal">
             <div className="container">
                 <div className="row">
                  <div className="RandeomMeal_left">
                        <h2>pick a  random receipe by clicking this</h2>
                        <button className="RandomMeal_btn" onClick={this.handleclick}>submit</button>
                  </div>
                  <div className="RandomMeal_right">
                         {mealitem}
                  </div>
                </div>
             </div>
          </section>
        )
    }
}

export default RandomMeal;