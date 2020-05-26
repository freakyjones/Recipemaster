import React from 'react'
import Header from './header'
import Search_bar from './search_bar'
import SearchByLetter from './search_by_letter'
import RandomMeal from './random_meal'
import Catagory from './catagory'
import Footer from './footer'
import css from '../style/App.css'
class App extends React.Component{
    render(){
        return(
            <div className="root">
             <Header/>
             <Search_bar/>
             <SearchByLetter/>
             <RandomMeal/>
             <Catagory/>
             <Footer/>
            </div>
        )
    }
}

export default App;