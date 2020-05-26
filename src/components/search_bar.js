import React from 'react'
import Items from './items'
class Search_bar extends React.Component{
    constructor(props){
        super(props)
            this.state={
              search_item:'',
              mealimg:'',
              mealid:'',
              submit:false,
              notfound:false
            }
        this.handlechange=this.handlechange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
    }
    handlechange(event){

      let {value,name}= event.target

      this.setState({[name]:value});
      console.log(value)
    }
    async handlesubmit(event){
        event.preventDefault()
        try{
            const res=await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.search_item}`);
            const data=await res.json();
            data.meals.forEach(element => {
                console.log(element.strMealThumb)
                this.setState(()=>{
                    let newmealimg=element.strMealThumb
                    let newmealid=element.idMeal
                    return{
                        mealimg:newmealimg,
                        mealid:newmealid,
                        submit:true,
                        notfound:false
                    }
                })
            });
        }
        catch{
          this.setState({notfound:true,submit:false})
        }
   
        
    }
    render(){
        return(
          <section id="SearchBar">
                 <div className="container">
                     <div className="column">
                      <div className="SearchBar_Heading">
                           <h1>search your favourite raceipe here</h1>
                      </div>
                      <div className="SearchBar_input">
                          <form onSubmit={this.handlesubmit}>
                             <input type="text" name="search_item" placeholder="search" onChange={this.handlechange} required={true}/>
                             <button type="submit">submit</button>
                          </form>
                      </div>
                      </div>
                 </div>
                 {this.state.submit?    <div className="container" >
                     <div className="row item_positionar">
                         <Items
                         key={this.state.mealid}
                         id={this.state.mealid}
                         mealimg={this.state.mealimg}
                         />
                     </div>
                </div>:null}
                {this.state.notfound?<div className="container" >
                     <div className="row item_positionar" style={{minHeight:'10em',textAlign:'center',background:'#fff',color:'#000',displa:"block"}}>
                         <h2 style={{textAlign:'center',margin:'0 auto'}} >item not found</h2>
                     </div>
                     </div>:null}
             
          </section>
          
        )
    }
}

export default Search_bar;