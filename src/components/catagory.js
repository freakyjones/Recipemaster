import React from 'react'
import CatagoryItem from './Catagory_item'
import Items from './items'
class Catagory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            catagories:[]
        }
    }
  async  componentDidMount(){
        const res=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data=await res.json();
        let catagories=data.categories;
        this.setState({catagories:catagories})
        console.log(catagories)
    }
    render(){
        const allcatagories=this.state.catagories.map(ele=>{
            return      <CatagoryItem
            key={ele.idCategory}
                         Catagoryname={ele.strCategory} 
                         Catagoryimg={ele.strCategoryThumb}
               />
        })
        return(
            <section id="Catagory">
                  <div className="container">
                      <div className="column">
                       <div className="Catagory_heading">
                        <h2>catagory</h2>
                       </div>
                       <div className="row" style={{flexWrap:'wrap'}}>
                       {allcatagories}
                       </div>
                      
                      </div>
                  </div>
                  {/* <div className="conatiner">
                    <Items/>
                  </div> */}
            </section>
        )
    }
}

export default Catagory;